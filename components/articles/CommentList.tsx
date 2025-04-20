import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Prisma } from "@prisma/client";
import { formateDate } from "@/lib/dateFormate";

type commentsProps = {
  comments: Prisma.CommentGetPayload<{
    include: {
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

export const CommentList: React.FC<commentsProps> = ({ comments }) => {
  return (
    <div className="space-y-4">
      {comments.length === 0 && (
        <div className="text-center">
          <span className="font-bold">No comments yet</span>
        </div>
      )}
      
      {comments.map((comment) => {
        return (
          <div className="flex gap-4" key={comment.id}>
            <Avatar className="h-10 w-10">
              <AvatarImage src={comment.author.imageURL as string} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="leading-0">
                <span className="font-medium">{comment.author.name}</span>
                <span className="text-sm ml-2">
                  {formateDate(comment.createAt)}
                </span>
              </div>
              <p>{comment.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
