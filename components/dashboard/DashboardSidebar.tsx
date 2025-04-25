"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  BarChart,
  FileText,
  Home,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from "lucide-react";

export const DashboardSidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: <Home className="w-5 h-5 mr-2" /> },
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5 mr-2" />,
    },
    {
      href: "/dashboard/articles/create",
      label: "Articles",
      icon: <FileText className="w-5 h-5 mr-2" />,
    },
    {
      href: "#",
      label: "Comments",
      icon: <MessageCircle className="w-5 h-5 mr-2" />,
    },
    {
      href: "#",
      label: "Analytics",
      icon: <BarChart className="w-5 h-5 mr-2" />,
    },
    {
      href: "#",
      label: "Settings",
      icon: <Settings className="w-5 h-5 mr-2" />,
    },
  ];

  return (
    <div className="h-full px-3 py-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href="/">
          <h1 className="md:text-4xl text-3xl font-bold">
            <span className="text-primary">P</span>ost
            <span className="text-primary">C</span>raft
          </h1>
        </Link>
      </div>

      <nav className="space-y-2">
        {links.map(({ href, label, icon },index) => {
          const isActive = pathname === href;

          return (
            <Link key={index} href={href}>
              <Button
                className={`w-full justify-start cursor-pointer ${
                  isActive ? "bg-muted text-primary" : ""
                }`}
                variant="ghost"
              >
                {icon}
                {label}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
