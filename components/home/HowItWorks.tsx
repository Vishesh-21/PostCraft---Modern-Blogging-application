import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full flex items-center mt-16">
      <Card className="space-y-4 w-full">
        <CardTitle>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
            How It Works
          </h2>
          <p className="text-sm text-foreground mx-auto font-normal text-center">
            Start your blogging journey in just a few simple steps.
          </p>
        </CardTitle>

        <CardContent className="w-full">
          <h1 className="text-lg font-semibold">📝 How It Works ?</h1>
          <p className="text-justify text-foreground/50 mt-6">
            :- Starting your blogging journey with PostCraft is effortless and
            rewarding. First, sign up for free and set up your personal profile
            in just a few clicks — no tech skills needed. <br />
            <br />
            Once you&apos;re in, unleash your creativity using our powerful yet
            simple editor designed for both beginners and seasoned writers.
            Whether you&apos;re drafting your first blog post or building an
            entire content strategy, you&apos;ll have the tools to format,
            style, and organize your writing just the way you like. <br />
            <br /> When you&apos;re ready, hit publish — and your content is
            instantly live, beautifully presented, and accessible to readers
            around the world. But it doesn&apos;t stop there. With built-in SEO
            support, reader engagement features, and performance analytics, you
            can track your growth and optimize your content to reach even more
            people. <br />
            <br /> Whether you want to share personal stories, professional
            insights, or your creative work, PostCraft empowers you to build
            your voice and grow your audience with confidence.
          </p>
        </CardContent>
        <CardTitle className="text-center">
          <Button className="cursor-pointer animate-bounce">
            Start Now...
            <Star />
          </Button>
        </CardTitle>
      </Card>
    </section>
  );
};
