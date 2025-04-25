import React from "react";
import { Loader } from "lucide-react";

export default function DoingPage() {
  return (
    <div className="h-[80vh] w-full flex items-center gap-2 flex-col justify-center">
      <Loader
        className="text-primary w-20 h-20 animate-spin"
        style={{ animationDuration: "2s" }}
      />
      <h1 className="text-xl font-bold">Loading Dashboard</h1>
      <p className="text-foreground/50">Please wait a moment while we load your dashboard</p>
    </div>
  );
}
