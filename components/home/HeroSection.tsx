"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="w-full flex items-center text-white mt-5">
      <div className="w-full py-16 px-6  mx-auto text-center bg-gradient-to-r from-primary to-indigo-700">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to Your Application
        </h1>
        <p className="text-lg sm:text-xl">
          Build smarter, faster, and more efficiently with our powerful and
          easy-to-use platform. Whether you&apos;re a beginner or a pro, we’ve
          got the tools you need to succeed.
        </p>
        <h2 className="mt-16 font-semibold text-3xl">
        &quot;Share Your <span className="text-primary">Voice</span> with the{" "}
        <span className="text-primary">World</span>&quot;
        </h2>
        <h3>
          Write, publish, and grow your audience with our powerful blogging
          platform.
        </h3>

        <div className="mt-10 space-x-4">
          <Button
            variant={"ghost"}
            onClick={() => router.push("/articles")}
            className="border-1 cursor-pointer"
          >
            Start Reading
          </Button>
          <Button
            className="cursor-pointer"
            onClick={() => router.push("/dashboard/articles/create")}
          >
            Start Writing
          </Button>
        </div>
      </div>
    </section>
  );
}
