"use client";

import React, { useActionState, useRef } from "react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LoaderIcon, Send } from "lucide-react";
import { createComment } from "@/actions/create-comment";

type commentInputProps = {
  articleId: string;
};
export const CommentInput: React.FC<commentInputProps> = ({ articleId }) => {
  const [formState, action, isPending] = useActionState(
    createComment.bind(null, articleId),
    { errors: {} }
  );

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isPending) return;
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (inputRef.current) {
        formRef.current?.requestSubmit(); // to submit the form
      }
    }
  };

  return (
    <form action={action} ref={formRef} className="mb-8 w-full">
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex-1 flex flex-row items-center gap-4">
          <Input
            type="text"
            name="comment"
            className="focus-visible:ring-1"
            placeholder="Add a comment..."
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />

          <Button
            type="submit"
            className={isPending ? "cursor-not-allowed" : "cursor-pointer"}
            disabled={isPending}
          >
            {isPending ? (
              <LoaderIcon className="animate-spin w-5 h-5" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {formState.errors.comment && (
        <span className="md:ml-12 text-destructive text-sm">
          {formState.errors.comment}
        </span>
      )}

      {formState.errors.formErrors && (
        <span className="md:ml-12 text-destructive text-sm">
          {formState.errors.formErrors[0]}
        </span>
      )}
    </form>
  );
};
