import { ArticleCard } from "@/components/articles/ArticleCard";
import { prisma } from "@/lib/prisma";
import React from "react";

type Props = {
  params: { id: string };
};

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = params;

  let article = null;

  try {
    article = await prisma.articles.findUnique({
      where: { id: id },
      include: {
        author: {
          select: {
            name: true,
            email: true,
            imageURL: true,
          },
        },
      },
    });
  } catch (error) {
    console.log("error", error);
  }

  if (!article)
    return (
      <div className="mt-24 text-5xl font-bold opacity-60 text-center">
        Article not found
      </div>
    );

  return (
    <main>
      {/* article card  */}
      <div className="max-w-6xl mx-auto mt-8">
        <ArticleCard article={article} />
      </div>
    </main>
  );
}
