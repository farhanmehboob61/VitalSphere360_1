import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="overview" className="overflow-hidden border-b border-border bg-background">
      <div className="relative w-full">
        {/* Hero Image Container - Full Width */}
        <div className="relative w-full bg-gradient-to-r from-blue-100 to-white">
          <Image
            src="/images/vital-sphere-360-hero.png"
            alt="Vital Sphere 360 Hyperbaric Chamber"
            width={1400}
            height={600}
            priority
            className="h-auto w-full object-cover"
          />

          {/* Badges - Top Left Overlay */}
          <div className="absolute left-4 top-4 flex flex-col gap-2 sm:left-6 sm:top-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <Image src="/images/asme-mark.png" alt="ASME" width={14} height={14} />
              ASME Certified
            </div>
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
