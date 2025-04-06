import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import { ToggleMode } from "./ToggleMode";
import { SearchInput } from "./SearchInput";

export const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 left-0 z-52 full border-b-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="md:max-w-6xl mx-auto md:px-0 px-4 py-4 flex justify-between">
        {/* left section  */}
        <div>
          <Link href={"/"}>
            <h2 className="md:text-3xl text-3xl font-bold">
              <span className="text-primary">P</span>ost
              <span className="text-primary">C</span>raft
            </h2>
          </Link>
        </div>

        {/* desktop view section  */}
        <div className="hidden md:flex items-center gap-10 text-[0.9rem] font-[500]">
          <Link
            href={"/articles"}
            className="hover:text-primary transition-all duration-200"
          >
            Articles
          </Link>
          <Link
            href={"/tutorials"}
            className="hover:text-primary transition-all duration-200"
          >
            Tutorials
          </Link>
          <Link
            href={"/about"}
            className="hover:text-primary transition-all duration-200"
          >
            About
          </Link>
          <Link
            href={"/Dashboard"}
            className="hover:text-primary transition-all duration-200"
          >
            Dashboard
          </Link>
        </div>

        {/* right section */}
        <div className="flex items-center gap-2">
          <SearchInput/>
          <ToggleMode/>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant={"secondary"} className="cursor-pointer">
              Signup
            </Button>
            <Button className="cursor-pointer">Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
