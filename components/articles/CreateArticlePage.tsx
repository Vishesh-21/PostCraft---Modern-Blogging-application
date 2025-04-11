"use client";

import React, { startTransition, useActionState, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import "react-quill-new/dist/quill.snow.css";
import { createArticle } from "@/actions/create-article";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export const CreateArticlePage = () => {
  const [content, setContent] = useState("");
  const [formState, action, isPending] = useActionState(createArticle, {
    errors: {},
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("content", content);
    startTransition(() => action(formData));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Article</CardTitle>
          <CardDescription>
            Quickly draft and publish a new article to share your insights,
            ideas, or updates.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                className="text"
                name="title"
                placeholder="Enter article title..."
              />
              {formState.errors.title && (
                <p className="text-red-500 text-sm">{formState.errors.title}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
              {/* category  */}
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NN">-- Select Category --</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="career">Career</SelectItem>
                    <SelectItem value="personal-development">
                      Personal Development
                    </SelectItem>
                    <SelectItem value="reviews">Reviews</SelectItem>
                    <SelectItem value="news">News</SelectItem>
                  </SelectContent>
                </Select>
                {formState.errors.category && (
                  <p className="text-red-500 text-sm">{formState.errors.category[0]}</p>
                )}
              </div>

              {/* featured image  */}
              <div className="space-y-2">
                <Label htmlFor="featuredImage">Featured Image</Label>
                <Input
                  type="file"
                  id="featuredImage"
                  name="featuredImage"
                  accept="image/*"
                />
                {/* {formState.errors.featuredImage && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.featuredImage}
                  </p>
                )} */}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Content</Label>
              <ReactQuill theme="snow" value={content} onChange={setContent} />
              {formState.errors.content && (
                <p className="text-red-500 text-sm">{formState.errors.content[0]}</p>
              )}
            </div>

            {/* publish button  */}
            <div className="flex justify-end gap-4">
              <Button variant={"outline"} className="cursor-pointer">
                Cancel
              </Button>
              <Button type="submit" disabled={isPending} className="cursor-pointer">
                {isPending ? "Publishing..." : "Publish"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
