import { Navigation } from "@/components/Navigation";
import { Skeleton } from "@/components/ui/skeleton";

export function HomeSkeleton() {
  return (
    <main className="relative min-h-screen bg-[#030303]">
      <Navigation />
      
      {/* Hero Section Skeleton */}
      <section className="relative py-24 md:py-32 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto mb-8" />
            <Skeleton className="h-10 w-48 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="relative py-24 md:py-32 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-12 w-48 mx-auto mb-12" />
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Skeleton className="w-48 h-48 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Skeleton */}
      <section className="relative py-24 md:py-32 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <Skeleton className="h-12 w-64 mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-48 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Skeleton */}
      <section className="relative py-24 md:py-32 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <Skeleton className="h-12 w-64 mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="flex items-center gap-4 mb-4">
                    <Skeleton className="w-12 h-12 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

