"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { ToggleMode } from "./ToggleMode";
import { SearchInput } from "./SearchInput";
import { X } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export const Navbar: React.FC = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  return (
    <div className="sticky top-0 left-0 z-52 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="md:max-w-6xl mx-auto md:px-0 px-4 py-4 flex justify-between items-center">
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
            href={"/dashboard/articles/create"}
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
            href={"/dashboard"}
            className="hover:text-primary transition-all duration-200"
          >
            Dashboard
          </Link>
        </div>

        {/* right section */}
        <div className="flex items-center gap-2">
          <div className="hidden md:inline-block">
            <SearchInput />
          </div>
          <ToggleMode />

          {/* user authentication actions */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: {
                    width: "34px",
                    height: "34px",
                  },
                },
              }}
            />
          </SignedIn>

          <SignedOut>
            <div className="hidden md:flex items-center space-x-2">
              <SignUpButton>
                <Button variant={"secondary"} className="cursor-pointer">
                  Signup
                </Button>
              </SignUpButton>
              <SignInButton>
                <Button className="cursor-pointer">Login</Button>
              </SignInButton>
            </div>
          </SignedOut>

          {/* buttons for mobile devices  */}
          <Button
            variant={"ghost"}
            className="md:hidden cursor-pointer text-muted-foreground hover:text-foreground hover:bg-transparent"
            size={"icon"}
            onClick={() => setIsMobileDevice(!isMobileDevice)}
          >
            {isMobileDevice ? (
              <X className="h-6 w-6" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* mobile view section  */}
        {isMobileDevice && (
          <div className="fixed bg-background w-full h-50vh top-16 right-0 flex flex-col py-6 px-5">
            <div className="flex flex-col gap-3 text-[0.9rem] font-[500]">
              <SearchInput />
              <Link
                href={"/dashboard/articles/create"}
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
                href={"/dashboard"}
                className="hover:text-primary transition-all duration-200"
              >
                Dashboard
              </Link>

              <div className="flex flex-col gap-5">
                <Button variant={"secondary"} className="cursor-pointer">
                  Signup
                </Button>
                <Button className="cursor-pointer">Login</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
