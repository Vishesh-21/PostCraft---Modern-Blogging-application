import { AllArticlesPage } from "@/components/articles/AllArticles";
import { InputSearch } from "@/components/articles/InputSearch";
import { SkeletonCardComponent } from "@/components/articles/SkeletonCardComponent";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader } from "lucide-react";
import React, { Suspense } from "react";

type searchPageProps = {
  searchParams: Promise<{ search?: string }>;
};

const AllArticles: React.FC<searchPageProps> = async ({ searchParams }) => {
  const query = (await searchParams).search || "";

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
          <AllArticlesPage query={query} />
        </Suspense>

        {/* Pagination  */}
        <div className="my-12 flex justify-center gap-2 ">
          <Button
            className="cursor-pointer border-1"
            size={"sm"}
            variant={"ghost"}
          >
            <ArrowLeft className="w-4 h-4" /> Prev
          </Button>

          <Button
            className="cursor-pointer border-1"
            size={"sm"}
            variant={"ghost"}
          >
            1
          </Button>

          <Button
            className="cursor-pointer border-1"
            size={"sm"}
            variant={"ghost"}
          >
            2
          </Button>

          <Button
            className="cursor-pointer border-1"
            size={"sm"}
            variant={"ghost"}
          >
            3
          </Button>

          <Button
            className="cursor-pointer border-1"
            size={"sm"}
            variant={"ghost"}
          >
            4
          </Button>

          <Button
            className="cursor-pointer border-1"
            size={"sm"}
            variant={"ghost"}
          >
            5
          </Button>

          <Button
            className="cursor-pointer border-1"
            size={"sm"}
            variant={"ghost"}
          >
            Next <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default AllArticles;


