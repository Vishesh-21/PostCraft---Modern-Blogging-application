import { Features } from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import { Navbar } from "@/components/home/header/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StatsSection } from "@/components/home/StatsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { TopArticles } from "@/components/home/TopArticles";
import { Loader } from "lucide-react";
import React, { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-6xl mt-4 md:px-0 px-4 ">
        <HeroSection />
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-[90vh]">
              <Loader
                className="text-primary h-10 w-10 animate-spin"
                style={{ animationDuration: "2s" }}
              />
            </div>
          }
        >
          <TopArticles />
        </Suspense>
        <Features />
        <HowItWorks />
        <StatsSection />
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
