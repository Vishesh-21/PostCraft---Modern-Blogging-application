"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const likeDislikeToggle = async (articleId: string) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("You must be logged in to like an article");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!existingUser) {
    throw new Error("User not found");
  }

  const existingLike = await prisma.like.findFirst({
    where: {
      articleId,
      userId: existingUser.id,
    },
  });

  if (existingLike) {
    await prisma.like.delete({
      where: { id: existingLike.id },
    });
  } else {
    await prisma.like.create({
      data: {
        articleId,
        userId: existingUser.id,
      },
    });
  }

  revalidatePath(`/articles/${articleId}`);
};
