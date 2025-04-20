import { AllArticlesPage } from "@/components/articles/AllArticles";
import { InputSearch } from "@/components/articles/InputSearch";
import { Navbar } from "@/components/home/header/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const AllArticles = () => {
  return (
    <main>
      {/* page header  */}
      <Navbar />

      <div className="max-w-6xl mx-auto">
        {/* page heading */}
        <div className="m-6 space-y-6 text-center">
          <div className="text-4xl font-bold sm:text-5xl">All Articles</div>
        </div>

        {/* search bar  */}
        <InputSearch />

        {/* articles cards  */}
        <AllArticlesPage />

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
