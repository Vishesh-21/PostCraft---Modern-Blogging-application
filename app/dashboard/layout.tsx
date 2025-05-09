import { LeftSidebar } from "@/components/dashboard/LeftSidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <div className="flex">
        <LeftSidebar />
        <div className="flex-1 max-h-screen overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}
