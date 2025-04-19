import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Clock, FileText, Heart, MessageCircle, PlusCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RecentArticles } from "./RecentArticles";
import { prisma } from "@/lib/prisma";

export const BlogDashboard = async () => {
  const [articles, totalComments,totalLikes] = await Promise.all([
    prisma.articles.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        comments: true,
        likes: true,
        author: {
          select: {
            name: true,
            email: true,
            imageURL: true,
          },
        },
      },
    }),
    prisma.comment.count(),
    prisma.like.count(),
  ]);

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-bold text-2xl">Blog DashBoard</h1>
          <p>Manage your content and analytics</p>
        </div>

        <Link href={"/dashboard/articles/create"}>
          <Button className="cursor-pointer">
            <PlusCircle className="h-5 w-5" />
            New Article
          </Button>
        </Link>
      </div>

      {/* quicks stats  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* total articles  */}
        <Card>
          <CardHeader className="flex items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-xl">
              Total Articles
            </CardTitle>
            <FileText className="h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{articles.length}</div>
            <p className="text-sm text-muted-foreground mt-1">
            All Articles at a Glance
            </p>
          </CardContent>
        </Card>

        {/* total comments  */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-xl">
              Total likes
            </CardTitle>
            <Heart className="h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLikes}</div>
            <p className="text-sm text-muted-foreground mt-1">
            Total Love Received
            </p>
          </CardContent>
        </Card>

        {/* average rating  */}
        <Card>
          <CardHeader className="flex flex-row items-center  justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-xl">
              Total comments
            </CardTitle>
            <MessageCircle className="h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalComments}</div>
            <p className="text-sm text-muted-foreground mt-1">
            Total Reader Responses
            </p>
          </CardContent>
        </Card>
      </div>

      {/* recent articles component  */}
      <RecentArticles articles={articles} />
    </main>
  );
};
