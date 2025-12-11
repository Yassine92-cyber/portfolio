import { Navigation } from "@/components/Navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export function BlogSkeleton() {
  return (
    <main className="relative min-h-screen bg-[#030303]">
      <Navigation />
      <section className="relative py-12 md:py-16 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <Breadcrumbs items={[{ label: "Blog" }]} />
            
            {/* Header Skeleton */}
            <div className="text-center mb-16">
              <Skeleton className="h-12 w-32 mx-auto mb-4" />
              <Skeleton className="h-6 w-96 mx-auto mb-2" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </div>

            {/* Filters Skeleton */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-10 w-full rounded-lg" />
                </div>
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-10 w-full rounded-lg" />
                </div>
              </div>
            </div>

            {/* Blog Posts Skeleton */}
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08]"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <Skeleton className="w-full md:w-48 h-32 rounded-lg flex-shrink-0" />
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-5 w-20 rounded-full" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex items-center gap-4 pt-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

