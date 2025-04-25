import { EditArticlePage } from "@/components/articles/EditArticlePage";
import { prisma } from "@/lib/prisma";
import React from "react";

type EditPageProps = {
  params: { id: string };
};

const EditPage = async ({ params }: EditPageProps) => {
  const { id } = params;

  let articleData = null;

  try {
    articleData = await prisma.articles.findUnique({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }

  if (!articleData)
    return (
      <div className="text-center mt-40 text-5xl font-bold opacity-50">
        Article not found !
      </div>
    );

  return (
    <div>
      <EditArticlePage article={articleData} />
    </div>
  );
};

export default EditPage;
