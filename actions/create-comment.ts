"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createCommentSchema = z.object({
  comment: z.string().min(1, "Comment should at least contain one character."),
});

type createCommentFormState = {
  errors: {
    comment?: string[];
    formErrors?: string[];
  };
};
export const createComment = async (
  articleId: string,
  prevState: createCommentFormState,
  formData: FormData
): Promise<createCommentFormState> => {
  const result = createCommentSchema.safeParse({
    comment: formData.get("comment"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { userId } = await auth();

  if (!userId) {
    return {
      errors: {
        formErrors: ["You have to login first!"],
      },
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!existingUser) {
    return {
      errors: {
        formErrors: ["User not found. Please register before adding comment."],
      },
    };
  }

  try {
    await prisma.comment.create({
      data: {
        body: result.data.comment,
        authorId: existingUser.id,
        articleId,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          formErrors: [error.message],
        },
      };
    } else {
      return {
        errors: {
          formErrors: ["Error occurred while adding an comment. Try again!"],
        },
      };
    }
  }
  revalidatePath(`/articles/${articleId}`);
  return { errors: {} };
};
