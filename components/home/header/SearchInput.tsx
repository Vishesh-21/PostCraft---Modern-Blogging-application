import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  return (
    <form>
      <div className="relative">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          type="text"
          name="search"
          className="pl-8 w-52 focus-visible:ring-1"
        />
      </div>
    </form>
  );
};
