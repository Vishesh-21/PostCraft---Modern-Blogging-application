import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { topArticles } from "../utils/TopArticles";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";

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
        <CardContent className="grid grid-cols-1 mt-6 md:grid-cols-3 gap-5">
          {topArticles.map((article) => {
            return (
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-background hover:shadow transition-shadow hover:shadow-accent-foreground duration-300" key={article.id}>
                <Image
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover"
                  src={article.image}
                  alt={article.title}
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-foreground hover:text-primary transition duration-200 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span>By {article.author}</span>
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm text-foreground">
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
              </div>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
};
