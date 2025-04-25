"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { searchAction } from "@/actions/search-article";

export const SearchInput = () => {
  
  const query = useSearchParams();

  return (
    <form action={searchAction}>
      <div className="relative">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          type="text"
          name="search"
          defaultValue={query.get("search") || ""}
          className="pl-8 md:w-52 w-full focus-visible:ring-1"
        />
      </div>
    </form>
  );
};
