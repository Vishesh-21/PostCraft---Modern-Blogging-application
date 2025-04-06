"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleMode() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const buttonVariant = theme === "dark" ? "default" : "outline";

  return (
    <Button
      variant={buttonVariant}
      size={"icon"}
      onClick={toggleTheme}
      className="cursor-pointer"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
      <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block transition-all" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
