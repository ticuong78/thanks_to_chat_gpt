import { Skeleton } from "./ui/skeleton";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

export function SinglePostSkeleton() {
  return (
    <article className="bg-white">
      {/* Hero Section Skeleton */}
      <div className="relative h-[500px] mb-8 bg-gray-200 animate-pulse">
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-8">
            <Skeleton className="h-8 w-32 mb-4 bg-white/20" />
            <Skeleton className="h-10 w-24 mb-4 bg-white/30" />
            <Skeleton className="h-12 w-full max-w-4xl mb-4 bg-white/30" />
            <Skeleton className="h-8 w-full max-w-3xl bg-white/20" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Meta Info Skeleton */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b">
            <div className="flex items-center gap-3">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div>
                <Skeleton className="h-5 w-32 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="h-12 hidden md:block"
            />

            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <Skeleton className="h-9 w-20" />
              <Skeleton className="h-9 w-20" />
              <Skeleton className="h-9 w-12" />
            </div>
          </div>

          {/* Article Content Skeleton */}
          <div className="mb-12 space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />

            <div className="py-4">
              <Skeleton className="h-8 w-2/3 mb-4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
            </div>

            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-4/5" />

            <div className="py-4">
              <Skeleton className="h-8 w-1/2 mb-4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>

            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
          </div>

          {/* Tags Skeleton */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-28" />
            <Skeleton className="h-6 w-20" />
          </div>

          {/* Share Section Skeleton */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <Skeleton className="h-6 w-40" />
                <div className="flex gap-2">
                  <Skeleton className="h-9 w-9" />
                  <Skeleton className="h-9 w-9" />
                  <Skeleton className="h-9 w-9" />
                  <Skeleton className="h-9 w-9" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Author Bio Skeleton */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <Skeleton className="w-20 h-20 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <Skeleton className="h-7 w-48 mb-3" />
                  <Skeleton className="h-5 w-full mb-2" />
                  <Skeleton className="h-5 w-5/6 mb-4" />
                  <Skeleton className="h-9 w-32" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section Skeleton */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <Skeleton className="h-8 w-40 mb-6" />

              {/* Comment Form Skeleton */}
              <div className="mb-8 pb-8 border-b">
                <Skeleton className="w-full h-32 mb-4" />
                <div className="flex justify-end">
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>

              {/* Sample Comments Skeleton */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-32 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-32 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6 mb-2" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts Skeleton */}
          <div className="mb-12">
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <Skeleton className="w-full h-[240px]" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-6 w-4/5 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <Skeleton className="w-full h-[240px]" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-6 w-4/5 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
