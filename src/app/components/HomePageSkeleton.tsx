import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export function HomePageSkeleton() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Featured Section Skeleton */}
      <Card className="mb-12 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <Skeleton className="md:w-1/2 h-[400px] md:h-auto" />

          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <Skeleton className="h-6 w-24 mb-4" />
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-10 w-4/5 mb-6" />
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-5/6 mb-8" />

            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Tabs Skeleton */}
      <div className="mb-8">
        <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg w-fit">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-28" />
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-16" />
        </div>
      </div>

      {/* Blog Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card
            key={i}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Skeleton className="w-full h-[240px]" />

            <CardHeader>
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>

            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>

            <CardFooter className="flex items-center justify-between">
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
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Newsletter Section Skeleton */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <CardContent className="p-8 md:p-12 text-center">
          <Skeleton className="h-10 w-64 mx-auto mb-4 bg-white/20" />
          <Skeleton className="h-5 w-96 max-w-full mx-auto mb-8 bg-white/20" />

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Skeleton className="flex-1 h-12 bg-white/20" />
            <Skeleton className="h-12 w-32 bg-white/30" />
          </div>

          <Skeleton className="h-4 w-48 mx-auto mt-4 bg-white/20" />
        </CardContent>
      </Card>
    </main>
  );
}
