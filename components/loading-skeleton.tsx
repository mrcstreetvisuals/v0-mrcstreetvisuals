export function LoadingSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-800 rounded-lg w-full h-full" />
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
      <div className="aspect-[4/3] bg-gray-800 animate-pulse" />
      <div className="p-6 space-y-3">
        <div className="h-6 bg-gray-800 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-gray-800 rounded animate-pulse w-full" />
        <div className="h-4 bg-gray-800 rounded animate-pulse w-5/6" />
      </div>
    </div>
  )
}

export function GridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}
