import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features } from "../utils/features";

export const Features: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex items-center mt-16">
      <Card className="bg-background py-10">
        <CardHeader>
          <CardTitle>
            <h2 className="text-4xl font-bold text-primary text-center mb-4">
              Powerful Features
            </h2>
          </CardTitle>
          <CardDescription>
            <p className="text-sm text-foreground mx-auto text-center">
              Discover the tools that make blogging seamless, enjoyable, and
              impactful. Everything you need to create, share, and grow your
              content.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 mt-6 md:grid-cols-3 gap-x-2 gap-y-4">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:border-primary hover:shadow-xl hover:scale-100 scale-95 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-primary flex gap-1">
                  {feature.icon}
                  <h1>{feature.title}</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
