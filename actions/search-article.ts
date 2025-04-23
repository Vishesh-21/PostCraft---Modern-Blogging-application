"use server";

import { redirect } from "next/navigation";

export const searchAction = async (formData: FormData) => {
  const query = formData.get("search");

  if (typeof query !== "string" || !query) {
    redirect("/");
  }
  redirect(`/articles?search=${query}`);
};
