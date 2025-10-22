import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardHeader } from "./ui/card";

export function AuthorProfileSkeleton() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cover Photo Skeleton */}
      <Skeleton className="h-[300px] w-full rounded-none" />

      {/* Profile Header */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-20 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Avatar Skeleton */}
                <Skeleton className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />

                {/* Info Skeleton */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <Skeleton className="h-9 w-64 mb-2" />
                      <Skeleton className="h-6 w-48 mb-3" />
                      <div className="flex flex-wrap gap-4 mb-3">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-4 w-40" />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Skeleton className="h-9 w-28" />
                      <Skeleton className="h-9 w-32" />
                    </div>
                  </div>

                  {/* Bio Skeleton */}
                  <div className="mb-4">
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-2" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>

                  {/* Social Links Skeleton */}
                  <div className="flex gap-2">
                    <Skeleton className="h-9 w-20" />
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-12" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <Skeleton className="h-9 w-16 mx-auto mb-2" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs Skeleton */}
        <div className="mb-6">
          <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg w-fit">
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-20" />
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-20" />
          </div>
        </div>

        {/* Blog Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="w-full h-[240px]" />

              <CardHeader>
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>

              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </CardContent>

              <div className="px-6 pb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div className="flex flex-col">
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-8" />
                  <Skeleton className="h-4 w-8" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
