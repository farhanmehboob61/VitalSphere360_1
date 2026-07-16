import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Phone, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Thank You | Vital Sphere 360 | Oxygen Health Systems",
  description:
    "Thank you for reaching out to Oxygen Health Systems. Our team has received your request and will be in touch shortly with pricing and a personalized demo of the Vital Sphere 360.",
  robots: { index: false, follow: true },
}

const nextSteps = [
  {
    title: "We review your request",
    description:
      "A product specialist reviews your details to tailor pricing and configuration options to your needs.",
  },
  {
    title: "We reach out within 1 business day",
    description:
      "Expect a call or email to schedule your free consultation and live demo of the Vital Sphere 360.",
  },
  {
    title: "You get a personalized quote",
    description:
      "Receive custom pricing, financing details, and installation timelines with no obligation.",
  },
]

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background pt-10 text-foreground">
      <AnnouncementBar />

      {/* Simple themed header */}
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
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Confirmation hero */}
        <section className="bg-primary">
          <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-24">
            <span className="flex size-16 items-center justify-center rounded-full bg-white/15 text-white">
              <CheckCircle2 className="size-9" aria-hidden="true" />
            </span>
            <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Thank you — your request has been received
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-blue-100">
              We appreciate your interest in the Vital Sphere 360 2.0 ATA hard-shell hyperbaric
              chamber. A member of our team will be in touch shortly with pricing and a personalized
              demo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Return to homepage
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href="tel:+16308127865" className="flex items-center gap-2">
                  <Phone className="size-4" aria-hidden="true" />
                  Call us now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What happens next */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What happens next</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Here&apos;s what to expect
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {nextSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Direct contact */}
          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-8 text-center">
            <p className="text-pretty text-lg font-medium">
              Prefer to reach us directly? We&apos;re happy to help.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
              <a href="tel:+16308127865" className="flex items-center gap-2 text-base font-semibold text-foreground">
                <Phone className="size-5 text-primary" aria-hidden="true" />
                +1 (630) 812-7865
              </a>
              <a
                href="mailto:sales@oxygenhealthsystems.com"
                className="flex items-center gap-2 text-base font-semibold text-foreground"
              >
                <Mail className="size-5 text-primary" aria-hidden="true" />
                sales@oxygenhealthsystems.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
