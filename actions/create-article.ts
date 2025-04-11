"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { string, z } from "zod";

const createArticleSchema = z.object({
  title: string()
    .min(5, "Title must be at least 5 characters")
    .max(200, "Title must be less than 200 characters"),
  category: string().min(5, "Category must be at least 5 characters"),
  content: string().min(20, "content must be at least 20 characters"),
});

type createArticleFormState = {
    errors  : {
        title ?: string[],
        category ?: string[],
        content ?: string[],
        featuredImage ?: string[],
        formErrors ?: string[],
    }
}

//action to create new article
export const createArticle = async (prevState : createArticleFormState,formDate : FormData) : Promise<createArticleFormState> => {
        const result = createArticleSchema.safeParse({
            title: formDate.get("title") as string,
            category: formDate.get("category") as string,
            content: formDate.get("content") as string
        })

        if (!result.success) {
            return {
                errors: result.error.flatten().fieldErrors
            }
        }

        const {userId} = await auth();
        if(!userId) {
            return {
                errors : {
                    formErrors : ["You must be logged in to create an article"]
                }
            }
        }

        redirect('/dashboard/');
};
