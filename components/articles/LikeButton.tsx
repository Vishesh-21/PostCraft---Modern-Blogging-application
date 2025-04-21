"use client";

import React, { useOptimistic, useTransition } from "react";
import { Button } from "../ui/button";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";
import { Comment, Like } from "@prisma/client";
import { likeDislikeToggle } from "@/actions/like-article";

type likeButtonProps = {
  articleId: string;
  likes: Like[];
  isLiked: boolean;
  comments: Comment[];
};

export const LikeButton: React.FC<likeButtonProps> = ({
  articleId,
  likes,
  isLiked,
  comments,
}) => {
  const [optimisticLike, setOptimisticLike] = useOptimistic(likes.length);
  const [isPending, startTransition] = useTransition();

  const handleLike = async () => {
    startTransition(async () => {
      setOptimisticLike(isLiked ? optimisticLike - 1 : optimisticLike + 1);
      await likeDislikeToggle(articleId);
    });
  };

  return (
    <div className="flex gap-4 mb-6 border-t pt-4">
      <form action={handleLike}>
        <Button
          type="submit"
          className="cursor-pointer gap-2"
          variant={"ghost"}
          disabled={isPending}
        >
          <Heart
            className={`h-5 w-5 ${isLiked ? "text-red-500 fill-red-500" : ""}`}
          />{" "}
          {optimisticLike}
        </Button>
      </form>

      <Button className="cursor-pointer gap-2" variant={"ghost"}>
        <MessageCircle className="w-5 h-5" /> {comments.length}
      </Button>

      <Button className="cursor-pointer gap-2" variant={"ghost"}>
        <Bookmark className="w-5 h-5" />
      </Button>

      <Button className="cursor-pointer gap-2" variant={"ghost"}>
        <Share2 className="w-5 h-5" />
      </Button>
    </div>
  );
};
