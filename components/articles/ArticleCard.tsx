import { Prisma } from "@prisma/client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Badge } from "../ui/badge";
import userImage from "@/public/userImage.jpeg";
import articleImage from "@/public/articleImage.jpeg";
import { LikeButton } from "./LikeButton";
import { CommentList } from "./CommentList";
import { CommentInput } from "./CommentInput";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

type ArticleCardProp = {
  article: Prisma.ArticlesGetPayload<{
    include: {
      author: {
        select: {
          name: true;
          email: true;
          imageURL: true;
        };
      };
    };
  }>;
};

export const ArticleCard: React.FC<ArticleCardProp> = async ({ article }) => {
  const comments = await prisma.comment.findMany({
    where: {
      articleId: article.id,
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
          imageURL: true,
        },
      },
    },
    orderBy: {
      createAt: "desc",
    },
  });

  const likes = await prisma.like.findMany({
    where: {
      articleId: article.id,
    },
  });

  const { userId } = await auth();

  const user = await prisma.user.findUnique({
    where: {
      clerkUserId: userId as string,
    },
  });

  const isLiked: boolean = likes.some((like) => like.userId === user?.id);

  const TotalComments = await prisma.comment.findMany({
    where: { articleId: article.id },
  });

  return (
    <main className="max-w-7xl flex flex-col md:flex-row gap-6 mx-auto px-4 mb-10">
      <Card className="bg-background md:w-[65%] w-full text-foreground shadow-md relative">
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="text-normal border-1">
            {article.category}
          </Badge>
        </div>

        <CardHeader>
          <CardTitle className="text-3xl font-bold">{article.title}</CardTitle>

          <div className="flex items-center gap-2 mt-4">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <img
                loading="lazy"
                src={(article?.author?.imageURL || userImage) as string}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-sm text-muted-foreground font-semibold">
              By {article?.author?.name}
            </h1>
          </div>

          <p className="text-sm text-muted-foreground mt-2">
            Published on {article.createdAt.toLocaleDateString("en-GB")}
          </p>
        </CardHeader>
        <Separator />

        <CardContent className="prose prose-neutral dark:prose-invert max-w-none mt-4 space-y-4">
          <div className="w-full mx-auto h-[300px]">
            <Image
              src={article.feature || articleImage}
              alt={article.title}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="mt-4"
          />

          {/* articles action  */}
          <LikeButton articleId={article.id} likes={likes} isLiked={isLiked} comments={TotalComments}/>
        </CardContent>
      </Card>

      <Card className="relative md:w-[380px] w-full max-h-screen overflow-auto">
        <CardContent className="max-h-[90vh] overflow-y-auto">
          <CommentList comments={comments} />
        </CardContent>
        <CardFooter className="absolute bottom-0 w-full z-[100] bg-background pt-3">
          <CommentInput articleId={article.id} />
        </CardFooter>
      </Card>
    </main>
  );
};
