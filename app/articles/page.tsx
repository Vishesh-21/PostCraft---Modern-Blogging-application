import { AllArticlesPage } from "@/components/articles/AllArticles";
import { InputSearch } from "@/components/articles/InputSearch";
import { SkeletonCardComponent } from "@/components/articles/SkeletonCardComponent";
import { Button } from "@/components/ui/button";
import { filterArticles } from "@/lib/filterArticles/filterArticlesByQuery";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

type searchPageProps = {
  searchParams: { search?: string; page?: string };
};

const articlesPerPage = 3;

const AllArticles: React.FC<searchPageProps> = async ({ searchParams }) => {
  const query = searchParams.search || ""; 
  const currentPage = Number(searchParams.page) || 1; 

  const skip = (currentPage - 1) * articlesPerPage;
  const take = articlesPerPage;

  const { articles, totalArticles } = await filterArticles(query, skip, take);

  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  return (
    <main>
      <div className="max-w-6xl mx-auto">
        {/* page heading */}
        <div className="m-6 space-y-6 text-center">
          <div className="text-4xl font-bold sm:text-5xl">All Articles</div>
        </div>

        {/* search bar  */}
        <InputSearch />

        {/* articles cards  */}
        <Suspense fallback={<SkeletonCardComponent />}>
          <AllArticlesPage articles={articles} />
        </Suspense>

        {/* Pagination  */}
        <div className="my-12 flex justify-center gap-2 ">
          <Link href={`?search=${query}&page=${currentPage - 1}`} passHref>
            <Button
              className="cursor-pointer border-1"
              size={"sm"}
              variant={"ghost"}
              disabled={currentPage === 1}
            >
              <ArrowLeft className="w-4 h-4" /> Prev
            </Button>
          </Link>

          {Array.from({ length: totalPages }).map((_, index) => {
            return (
              <Link
                key={index}
                href={`?search=${query}&page=${index + 1}`}
                passHref
              >
                <Button
                  className="cursor-pointer border-1"
                  size={"sm"}
                  variant={currentPage === index + 1 ? "default" : "ghost"}
                >
                  {index + 1}
                </Button>
              </Link>
            );
          })}

          <Link href={`?search=${query}&page=${currentPage + 1}`} passHref>
            <Button
              className="cursor-pointer border-1"
              size={"sm"}
              variant={"ghost"}
              disabled={currentPage === totalPages}
            >
              Next <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AllArticles;
