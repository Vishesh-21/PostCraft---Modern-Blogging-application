"use client";

import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";
import { searchAction } from "@/actions/search-article";

export const InputSearch = () => {
  const query = useSearchParams();

  return (
    <div className="px-5">
      <form action={searchAction}>
        <div className="relative mx-auto max-w-4xl">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            type="text"
            name="search"
            defaultValue={query.get("search") || ""}
            className="pl-8 w-full focus-visible:ring-1"
          />
        </div>
      </form>
    </div>
  );
};
