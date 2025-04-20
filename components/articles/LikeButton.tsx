import React from "react";
import { Button } from "../ui/button";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";

export const LikeButton = () => {
  return (
    <div className="flex gap-4 mb-6 border-t pt-4">
      <form action="">
        <Button className="cursor-pointer gap-2" variant={"ghost"}>
          <Heart className="h-5 w-5" /> 0
        </Button>
      </form>

      <Button className="cursor-pointer gap-2" variant={"ghost"}>
        <MessageCircle className="w-5 h-5" /> 0
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
