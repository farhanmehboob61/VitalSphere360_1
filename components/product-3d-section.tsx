"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

const ProductModelViewer = dynamic(() => import("@/components/product-3d-viewer"), {
  ssr: false,
  loading: () => <ViewerSkeleton />,
})

function ViewerSkeleton() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <span className="size-6 animate-spin rounded-full border-2 border-slate-300 border-t-slate-500" aria-hidden="true" />
      <span className="text-xs font-medium text-slate-500">Loading 3D model…</span>
    </div>
  )
}

export function Product3DSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  // Sticky once true: the heavy 3D chunk + asset load only once, the very first time it scrolls into view.
  const [hasLoaded, setHasLoaded] = useState(false)
  // Tracks live visibility so the render loop can pause when the viewer scrolls off-screen.
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting) setHasLoaded(true)
      },
      { rootMargin: "150px", threshold: 0.1 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="model-3d" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Interactive 3D Model</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Explore the Vital Sphere 360 from every angle
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Drag to rotate and scroll to zoom into a full 3D model of the chamber — get a real sense of its
            scale and form before it arrives at your door.
          </p>
        </div>

        <div
          ref={containerRef}
          className="mt-10 overflow-hidden rounded-2xl border-2 border-blue-200 bg-card p-2 sm:p-3"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 sm:aspect-[16/10]">
            {hasLoaded ? (
              <ProductModelViewer isActive={isInView} />
            ) : (
              <ViewerSkeleton />
            )}
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Drag to rotate &middot; Scroll or pinch to zoom &middot; Tap Reset View to recenter
        </p>
      </div>
    </section>
  )
}
