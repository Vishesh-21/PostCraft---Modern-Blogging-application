import { SkeletonCardComponent } from "@/components/articles/SkeletonCardComponent";
import { Features } from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import { Navbar } from "@/components/home/header/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StatsSection } from "@/components/home/StatsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { TopArticles } from "@/components/home/TopArticles";
import { Card, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-6xl mt-4 md:px-0 px-4 ">
        <HeroSection />

        {/* top article section  */}
        <section className="w-full flex items-center mt-16">
          <Card className="w-full bg-background">
            <CardTitle>
              <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
                Top Articles for You
              </h1>
              <p className="text-sm text-foreground mx-auto font-normal text-center">
                Explore the most popular and insightful articles curated just
                for you. <br />
                Stay updated with the latest trends, tips, and tutorials in web
                development, JavaScript, AI, and more.
              </p>
            </CardTitle>
            <Suspense fallback={<SkeletonCardComponent />}>
              <TopArticles />
            </Suspense>
          </Card>
        </section>

        <Features />
        <HowItWorks />
        <StatsSection />
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
