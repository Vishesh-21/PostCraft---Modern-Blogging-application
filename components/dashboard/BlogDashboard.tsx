import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FileText, MessageCircle, PlusCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RecentArticles } from "./RecentArticles";

export const BlogDashboard = () => {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-bold text-2xl">Blog DashBoard</h1>
          <p>Manage your content and analytics</p>
        </div>

        <Link href={"/dashboard/articles/create"}>
          <Button className="cursor-pointer">
            <PlusCircle className="h-5 w-5" />
            New Article
          </Button>
        </Link>
      </div>

      {/* quicks stats  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* total articles  */}
        <Card>
          <CardHeader className="flex items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-xl">
              Total Articles
            </CardTitle>
            <FileText className="h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-sm text-muted-foreground mt-1">
              +5 from last month
            </p>
          </CardContent>
        </Card>

        {/* total comments  */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-xl">
              Total Comments
            </CardTitle>
            <MessageCircle className="h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-sm text-muted-foreground mt-1">
              12 awaiting moderation
            </p>
          </CardContent>
        </Card>

        {/* average rating  */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-xl">
              Avg. Rating Time
            </CardTitle>
            <Star className="h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-sm text-muted-foreground mt-1">
              0.6 from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* recent articles component  */}
      <RecentArticles />
    </main>
  );
};
