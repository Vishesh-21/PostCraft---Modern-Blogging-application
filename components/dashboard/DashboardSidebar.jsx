import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  BarChart,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from "lucide-react";

export const DashboardSidebar = () => {
  return (
    <div className="h-full px-3 py-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href={"/"}>
          <h1 className="md:text-4xl text-3xl font-bold">
            <span className="text-primary">P</span>ost
            <span className="text-primary">C</span>raft
          </h1>
        </Link>
      </div>

      <nav className="space-y-2">
        <Link href={"/dashboard"}>
          <Button
            className="w-full justify-start cursor-pointer"
            variant="ghost"
          >
            <LayoutDashboard className="w-5 h-5 mr-2" />
            Overview
          </Button>
        </Link>

        <Link href={"/dashboard/articles/create"}>
          <Button
            className="w-full justify-start cursor-pointer"
            variant="ghost"
          >
            <FileText className="w-5 h-5 mr-2" />
            Articles
          </Button>
        </Link>

        <Link href={"/dashboard"}>
          <Button
            className="w-full justify-start cursor-pointer"
            variant="ghost"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Comments
          </Button>
        </Link>

        <Link href={"/dashboard"}>
          <Button
            className="w-full justify-start cursor-pointer"
            variant="ghost"
          >
            <BarChart className="w-5 h-5 mr-2" />
            Analytics
          </Button>
        </Link>

        <Link href={"/dashboard"}>
          <Button
            className="w-full justify-start cursor-pointer"
            variant="ghost"
          >
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </Button>
        </Link>
      </nav>
    </div>
  );
};
