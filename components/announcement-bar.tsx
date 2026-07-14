import { Star } from 'lucide-react'

export function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex h-auto items-center justify-center gap-2 bg-primary px-0 py-2.5 text-center">
      <div className="flex gap-0.5 flex-shrink-0">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="size-3.5 fill-yellow-400 text-yellow-400"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-xs font-medium text-white">
        Featured on Top Doctor Magazine <span className="mx-1.5 inline text-blue-100">|</span> 10,000+ Happy Users{' '}
        <span className="mx-1.5 inline text-blue-100">|</span> Free White-Glove Installation
      </p>
    </div>
  )
}
