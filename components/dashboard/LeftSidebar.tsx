"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { LayoutDashboard } from "lucide-react";
import { DashboardSidebar } from "./DashboardSidebar";

export const LeftSidebar = () => {
  const [mobileDevice, setMobileDevice] = useState(false);

  return (
    <div className="relative">
      {/* to show it on mobile devices  */}
      <Sheet open={mobileDevice} onOpenChange={setMobileDevice}>
        <SheetTrigger asChild>
          <Button className="md:hidden absolute top-2 block cursor-pointer m-4">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[270px]">
          <DashboardSidebar />
        </SheetContent>
      </Sheet>

      <div className="hidden md:block h-screen w-[250px] border-r">
        <DashboardSidebar />
      </div>
    </div>
  );
};
