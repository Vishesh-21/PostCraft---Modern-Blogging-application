import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const SkeletonCardComponent: React.FC = () => {
    return (
      <div className="grid grid-cols-1 px-8 sm:grid-cols-1 mt-6 md:grid-cols-3 gap-5">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <Card key={index}>
              <Skeleton className="w-full h-48" />
              <div className="p-5 space-y-4">
                {/* Author Section */}
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-4 w-24 rounded" />
                </div>
  
                {/* Title */}
                <Skeleton className="h-6 w-full rounded" />
                <Skeleton className="h-4 w-32 rounded" />
  
                {/* Meta Info */}
                <div className="mt-4 flex items-center justify-between text-sm">
                  <Skeleton className="h-4 w-20 rounded" />
                  <Skeleton className="h-4 w-20 rounded" />
                </div>
  
                {/* Like & Comment Icons */}
                <div className="mt-3 absolute bottom-2 right-4 flex items-center justify-end gap-4">
                  <Skeleton className="h-4 w-8 rounded" />
                  <Skeleton className="h-4 w-8 rounded" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    );
  };