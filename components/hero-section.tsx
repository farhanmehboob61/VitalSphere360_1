import { Button } from "@/components/ui/button"

const HERO_SRCSET =
  "/images/vital-sphere-360-hero-800.webp 800w, /images/vital-sphere-360-hero-1200.webp 1200w, /images/vital-sphere-360-hero-1600.webp 1600w"

export function HeroSection() {
  return (
    <section id="overview" className="overflow-hidden border-b border-border bg-background">
      <div className="relative w-full">
        {/* Hero Image Container - Full Width */}
        <div className="relative w-full bg-gradient-to-r from-blue-100 to-white">
          {/*
            LCP-critical hero: served as pre-optimized static WebP (9–24 KB) via a
            native <img> so it never waits on Next.js's on-demand image optimizer,
            which is cold on every fresh Lighthouse run and dominates mobile LCP.
            The preload link is auto-hoisted to <head> by React 19.
          */}
          <link
            rel="preload"
            as="image"
            href="/images/vital-sphere-360-hero-1200.webp"
            // @ts-expect-error - valid responsive preload attributes
            imageSrcSet={HERO_SRCSET}
            imageSizes="100vw"
            fetchPriority="high"
          />
          <img
            src="/images/vital-sphere-360-hero-1200.webp"
            srcSet={HERO_SRCSET}
            sizes="100vw"
            width={1600}
            height={650}
            alt="Vital Sphere 360 Hyperbaric Chamber"
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full object-contain"
          />

          {/* Badges - Top Left Overlay */}
          <div className="absolute left-3 top-3 flex flex-col gap-2 sm:left-6 sm:top-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <div className="size-1 rounded-full bg-primary" />
              Walk-In Hard Shell
            </div>
          </div>
        </div>

        {/* Price and CTA Section */}
        <div className="border-b border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-8 lg:px-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Starting price · financing available</p>
              <p className="text-3xl font-bold text-foreground sm:text-4xl">$63,900</p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <Button size="lg" className="w-full sm:w-auto sm:px-8" asChild>
                <a href="#contact">Request a Demo &amp; Quote</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto sm:px-8" asChild>
                <a href="tel:+16308127865">Call +1 (630) 812-7865</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
