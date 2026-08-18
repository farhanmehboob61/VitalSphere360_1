import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteFooter } from "@/components/site-footer"
import { AsmeExplanationSections } from "@/components/asme/asme-explanation-sections"

export const metadata: Metadata = {
  title: "ASME Certified Hyperbaric Chamber | Vital Sphere 360",
  description:
    "Learn about the ASME pressure-vessel standards, U Stamp certification, inspection, testing, and engineering behind the Vital Sphere 360 hyperbaric chamber.",
  alternates: {
    canonical: "https://vitalsphere1.oxygenhealthsystems.com/ASME",
  },
}

export default function AsmePage() {
  return (
    <div className="min-h-screen bg-background pt-10 text-foreground">
      <AnnouncementBar />

      {/* Themed header matching the main site */}
      <header className="sticky top-10 z-40 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Oxygen Health Systems home">
            <Image
              src="/images/oxygen-health-systems-logo-transparent.png"
              alt="Oxygen Health Systems"
              width={143}
              height={74}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="tel:+16308127865"
              className="hidden items-center gap-2 text-sm font-semibold text-foreground sm:flex"
            >
              <Phone className="size-4 text-primary" aria-hidden="true" />
              +1 (630) 812-7865
            </a>
            <Button asChild size="sm">
              <Link href="/#contact">Request Pricing</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Breadcrumb */}
        <div className="border-b border-border bg-background">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Vital Sphere 360
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li className="font-medium text-foreground" aria-current="page">
                ASME Certification
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left: copy */}
              <div>
                <Image
                  src="/images/asme-mark.png"
                  alt="ASME certification mark — American Society of Mechanical Engineers U Stamp"
                  width={220}
                  height={140}
                  priority
                  className="h-16 w-auto object-contain"
                />
                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary">
                  Safety &amp; Engineering
                </p>
                  <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                  ASME Certified Pressure Vessels
                </h1>
                <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                  A hyperbaric chamber is more than a wellness device — it is a pressure vessel designed to
                  safely operate under elevated pressure. Vital Sphere chambers are manufactured to rigorous
                  pressure-vessel standards and carry the ASME U Stamp, providing independent verification of
                  critical manufacturing, inspection, and quality-control requirements.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <a href="#why-asme-matters" className="flex items-center gap-2">
                      Explore the ASME Standard
                      <span aria-hidden="true">↓</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right: product visual with restrained engineering annotations */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl border border-border bg-card p-8 sm:p-10">
                  <div
                    className="pointer-events-none absolute inset-6 rounded-xl border border-dashed border-primary/25 sm:inset-8"
                    aria-hidden="true"
                  />
                  <Image
                    src="/images/vital-sphere-360-chamber.png"
                    alt="Vital Sphere 360 hyperbaric chamber — ASME-compliant pressure vessel construction"
                    width={500}
                    height={600}
                    priority
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 24rem, 20rem"
                    className="relative mx-auto h-auto w-full max-w-xs object-contain sm:max-w-sm"
                  />
                  <Image
                    src="/images/asme-ustamp.webp"
                    alt="ASME U Stamp certification badge"
                    width={96}
                    height={96}
                    loading="lazy"
                    sizes="96px"
                    className="absolute bottom-10 right-8 size-16 rounded-full border border-border bg-background/95 p-1.5 shadow-sm sm:bottom-12 sm:right-12 sm:size-20"
                  />
                  <span className="absolute right-6 top-6 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:right-8 sm:top-8">
                    Pressure Vessel
                  </span>
                  <span className="absolute bottom-6 left-6 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:bottom-8 sm:left-8">
                    2.0 ATA · 100 kPa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AsmeExplanationSections />
      </main>

      <SiteFooter />
    </div>
  )
}
