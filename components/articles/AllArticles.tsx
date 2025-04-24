import React from "react";
import { Card, CardContent } from "../ui/card";
import { Heart, MessageCircle, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { filterArticles } from "@/lib/filterArticles/filterArticlesByQuery";

type AllArticlesPageProps = {
  query: string;
};

export const AllArticlesPage: React.FC<AllArticlesPageProps> = async ({
  query,
}) => {
  const articles = await filterArticles(query);

  if (articles.length <= 0) {
    return <NotSearchResult />;
  }

  return (
    <section className="w-full flex items-center mt-10">
      <Card className="w-full bg-background">
        {articles.length ? (
          <CardContent className="grid grid-cols-1 sm:grid-cols-1 mt-6 md:grid-cols-3 gap-5">
            {articles?.map((article) => {
              return (
                <Link
                  href={`/articles/${article?.id}`}
                  className="group relative w-full md:max-w-sm rounded-2xl overflow-hidden shadow-lg bg-background transition-shadow border-1 border-foreground/60 duration-300"
                  key={article?.id}
                >
                  <Image
                    width={500}
                    height={500}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    src={article?.feature}
                    alt={article?.title}
                  />
                  <div className="p-5 space-y-4">
                    <div className="flex items-center gap-1">
                      <div className="h-8 w-8 rounded-full overflow-hidden">
                        <img
                          loading="lazy"
                          src={article?.author?.imageURL as string}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h1 className="text-sm text-muted-foreground font-semibold">
                        By {article?.author?.name}
                      </h1>
                    </div>
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition duration-200 line-clamp-2">
                      {article?.title}
                    </h2>
                    <h3 className="text-sm text-muted-foreground font-semibold">
                      {article?.category}
                    </h3>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span>
                        {new Date(article?.createdAt).toLocaleDateString()}
                      </span>
                      <span>12 mints read</span>
                    </div>
                    <div className="mt-3 absolute bottom-2 right-4 flex items-center justify-end gap-4 text-sm text-foreground">
                      <div className="flex items-center gap-1">
                        <Heart size={16} />
                        {article?.likes.length}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={16} />
                        {article?.comments.length}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </CardContent>
        ) : (
          <h1 className="text-center text-5xl py-18 opacity-60 font-bold">
            Not Found any article
          </h1>
        )}
      </Card>
    </section>
  );
};

const NotSearchResult = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 rounded-full bg-muted p-4">
        <Search className="h-10 w-10" />
      </div>
      <h3 className="font-bold text-xl">No Result Found</h3>
      <p className="mt-2">
        Try searching for something else, we couldn&apos;t find what you were
        looking for!
      </p>
    </div>
  );
};
