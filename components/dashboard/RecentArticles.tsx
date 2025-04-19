"use client";

import React, { useTransition } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { BoxIcon, DeleteIcon, Ellipsis, PenIcon } from "lucide-react";
import Link from "next/link";
import { Prisma } from "@prisma/client";
import { deleteArticle } from "@/actions/delete-article";

type reactArticlesProps = {
  articles: Prisma.ArticlesGetPayload<{
    include: {
      comments: true;
      likes: true;
      author: {
        select: {
          name: true;
          email: true;
          imageURL: true;
        };
      };
    };
  }>[];
};

export const RecentArticles: React.FC<reactArticlesProps> = ({ articles }) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Recent Articles</CardTitle>
        <Button
          variant={"ghost"}
          className="text-muted-foreground cursor-pointer"
          size={"sm"}
        >
          View All &#8594;
        </Button>
      </CardHeader>

      {!articles.length ? (
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You have no recent articles
          </p>
        </CardContent>
      ) : (
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Title</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Likes</TableHead>
                <TableHead className="text-center">Comments</TableHead>
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {articles.map((article, index) => (
                <TableRow key={index}>
                  <TableCell className="text-left">{article.title}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={"secondary"}
                      className="rounded-full bg-green-200 text-green-800"
                    >
                      Published
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {article.likes.length}
                  </TableCell>
                  <TableCell className="text-center">
                    {article.comments.length}
                  </TableCell>
                  <TableCell className="text-center">
                    {article.createdAt.toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="cursor-pointer bg-transparent hover:bg-transparent"
                        >
                          <Ellipsis />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent>
                        <DropdownMenuLabel>
                          {/* edit button  */}
                          <Link
                            href={`/dashboard/articles/${article.id}/edit`}
                            className="cursor-pointer"
                          >
                            <Button
                              variant={"ghost"}
                              className="flex gap-2 items-center justify-start w-full cursor-pointer"
                            >
                              <PenIcon className="h-4 w-4" /> Edit
                            </Button>
                          </Link>

                          {/* delete button  */}
                          <DeleteButton articleId={article.id} />
                        </DropdownMenuLabel>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      )}
    </Card>
  );
};

type deleteArticleProps = {
  articleId: string;
};
const DeleteButton: React.FC<deleteArticleProps> = ({ articleId }) => {
  const [pending, startTransition] = useTransition();

  return (
    <form
      action={() => {
        startTransition(async () => await deleteArticle(articleId));
      }}
    >
      <Button
        disabled={pending}
        variant={"ghost"}
        className="flex items-center justify-start w-full cursor-pointer"
      >
        {pending ? (
          <>
            <BoxIcon className="h-4 w-4 animate-spin inline" /> Deleting...
          </>
        ) : (
          <>
            <DeleteIcon className="h-4 w-4 inline" /> Delete
          </>
        )}
      </Button>
    </form>
  );
};
