import { Navbar } from "@/components/home/header/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import React from "react";

export default function Home() {
  return (
    <div className="h-[150vh]">
      <Navbar />
      <div className="mx-auto max-w-6xl mt-4">
        <HeroSection />
      </div>
    </div>
  );
}
