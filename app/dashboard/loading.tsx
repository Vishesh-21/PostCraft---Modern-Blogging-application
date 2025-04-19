"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function DoingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6"
      >
        <Card className="shadow-xl rounded-2xl border">
          <CardContent className="p-8 flex flex-col items-center gap-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              <Skeleton className="h-16 w-16 mx-auto border-primary" />
            </motion.div>
            <h1 className="text-2xl font-semibold text-center">
              Work in Progress 🚧
            </h1>
            <p className="text-gray-600 text-center">
              This page is currently under development. Check back soon!
            </p>

            <div className="w-full space-y-2">
              <Skeleton className="h-4 w-3/4 mx-auto" />
              <Skeleton className="h-4 w-1/2 mx-auto" />
              <Skeleton className="h-4 w-5/6 mx-auto" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
