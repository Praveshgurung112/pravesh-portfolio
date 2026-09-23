// Animated loading skeleton component
// Shows while data fetches from API routes

export default function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-white/5 rounded-lg ${className}`}
      aria-hidden="true"
    />
  );
}

export function SkillsSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
          <Skeleton className="h-8 w-8 rounded-xl" />
          <Skeleton className="h-4 w-3/4" />
          <div className="flex flex-wrap gap-2 mt-4">
            {Array.from({ length: 4 }).map((_, j) => (
              <Skeleton key={j} className="h-6 w-16 rounded-full" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
          <Skeleton className="h-10 w-10 rounded-xl" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <div className="flex gap-2 mt-4">
            {Array.from({ length: 3 }).map((_, j) => (
              <Skeleton key={j} className="h-6 w-14 rounded-md" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
