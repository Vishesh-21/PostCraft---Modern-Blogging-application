"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { string, z } from "zod";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createArticleSchema = z.object({
  title: string()
    .min(5, "Title must be at least 5 characters")
    .max(200, "Title must be less than 200 characters"),
  category: string().min(5, "Category must be at least 5 characters"),
  content: string().min(20, "content must be at least 20 characters"),
});

type createArticleFormState = {
  errors: {
    title?: string[];
    category?: string[];
    content?: string[];
    featuredImage?: string[];
    formErrors?: string[];
  };
};

//action to create new article
export const EditArticle = async (
  articleId: string,
  prevState: createArticleFormState,
  formData: FormData
): Promise<createArticleFormState> => {
  const result = createArticleSchema.safeParse({
    title: formData.get("title") as string,
    category: formData.get("category") as string,
    content: formData.get("content") as string,
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
        formErrors: ["You must be logged in to create an article"],
      },
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!existingUser) {
    return {
      errors: {
        formErrors: ["You must be logged in to edit an article"],
      },
    };
  }

  const existingArticle = await prisma.articles.findUnique({
    where: {
      id: articleId,
    },
  });

  if (!existingArticle) {
    return {
      errors: {
        formErrors: ["Article not found"],
      },
    };
  }

  //starting creating new article
  const imageFile = formData.get("featuredImage") as File | null;

  let imageURL = existingArticle?.feature;

  if (imageFile && imageFile.name !== "undefined") {
    try {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadResponse: UploadApiResponse | undefined = await new Promise(
        (res, rej) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: "auto" },
            (err, result) => {
              if (err) {
                rej(err);
              }
              res(result);
            }
          );

          uploadStream.end(buffer);
        }
      );

      if (uploadResponse) {
        imageURL = uploadResponse.secure_url;
      } else {
        return {
          errors: {
            featuredImage: ["failed to upload image try again!"],
          },
        };
      }
    } catch (error) {
      return {
        errors: {
          formErrors: ["failed to upload image try again!"],
        },
      };
    }
  }

  try {
    await prisma.articles.update({
      where: {
        id: articleId,
      },
      data: {
        title: result.data.title,
        category: result.data.category,
        content: result.data.content,
        feature: imageURL,
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
          formErrors: ["Something went wrong"],
        },
      };
    }
  }
  revalidatePath("/dashboard/");
  redirect("/dashboard/");
};
