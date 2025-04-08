import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { topArticles } from "../utils/TopArticles";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const TopArticles = () => {
  return (
    <section className="w-full flex items-center mt-16">
      <Card className="w-full bg-background">
        <CardTitle>
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
            Top Articles for You
          </h1>
          <p className="text-sm text-foreground mx-auto font-normal text-center">
            Explore the most popular and insightful articles curated just for
            you. <br />
            Stay updated with the latest trends, tips, and tutorials in web
            development, JavaScript, AI, and more.
          </p>
        </CardTitle>
        <CardContent className="grid grid-cols-1 sm:grid-cols-1 mt-6 md:grid-cols-3 gap-5 mx-auto">
          {topArticles.map((article) => {
            return (
              <Link
                href={"#"}
                className="group relative w-full md:max-w-sm rounded-2xl overflow-hidden shadow-lg bg-background transition-shadow border-1 border-foreground/60 duration-300"
                key={article.id}
              >
                <Image
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  src={article.image}
                  alt={article.title}
                />
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-1">
                    <div className="inline-block px-1 py-1 text-xs font-bold bg-foreground/50 rounded-full text-background">
                    CN</div>
                    <h1 className="text-sm text-muted-foreground font-semibold">By {article.author}</h1>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition duration-200 line-clamp-2">
                    {article.title}
                  </h2>
                  <h3 className="text-sm text-muted-foreground font-semibold">Web Development</h3>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                    <span>12 mints read</span>
                  </div>
                  <div className="mt-3 absolute bottom-2 right-4 flex items-center justify-end gap-4 text-sm text-foreground">
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      {article.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={16} />
                      {article.likes}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
};
