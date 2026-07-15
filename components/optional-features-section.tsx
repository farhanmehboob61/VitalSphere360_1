import Image from "next/image"
import { ControlPanelViewer } from "@/components/control-panel-viewer"
import { SixPosLink } from "@/components/sixpos-link"
import { SeatingSlideshow } from "@/components/seating-slideshow"
import {
  Wind,
  Activity,
  Repeat,
  ShieldCheck,
  Sparkles,
  Moon,
  Palette,
  Timer,
  Zap,
  Scale,
  HeartPulse,
  Leaf,
  HandHeart,
  Dumbbell,
  Check,
  Minus,
  Armchair,
  SlidersHorizontal,
  Gem,
  Palette as PaletteIcon,
} from "lucide-react"

const bibsHighlights = [
  {
    icon: Activity,
    title: "Direct High-Flow Delivery",
    description: "93–98% pure oxygen delivered straight to your breathing zone at a high flow rate.",
  },
  {
    icon: Wind,
    title: "Inhale Activated",
    description: "True breathe-in-breathing-system technology eliminates oxygen overflow and waste.",
  },
  {
    icon: ShieldCheck,
    title: "CO2 Expeller",
    description: "Exhaled carbon dioxide is expelled outside the chamber, acting as a built-in CO2 scrubber.",
  },
  {
    icon: Repeat,
    title: "Switchable System",
    description: "Easily switch between the BIBS mask and a standard cannula during hyperbaric sessions.",
  },
]

const starlightHighlights = [
  {
    icon: Sparkles,
    title: "Immersive Night Sky",
    description: "Thousands of fiber-optic points recreate a realistic starfield, Milky Way, and galaxy.",
  },
  {
    icon: Moon,
    title: "Calming Environment",
    description: "A tranquil, spa-like atmosphere that helps users relax and unwind during every session.",
  },
  {
    icon: Palette,
    title: "Adjustable Effects",
    description: "Dim, brighten, and cycle through soothing lighting effects to match the mood.",
  },
  {
    icon: Timer,
    title: "Touchscreen Control",
    description: "Manage the ceiling alongside temperature and timer from the integrated control panel.",
  },
]

const seatingHighlights = [
  {
    icon: SlidersHorizontal,
    title: "Electric Reclining",
    description:
      "Electric reclining of the torso and footrest, forward and backward adjustment, headrest, and positioning adjust to each user for a comfortable session posture.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Business-class-inspired quilted leather with sculpted bolsters and padded armrests.",
  },
  {
    icon: Armchair,
    title: "All-Day Comfort",
    description: "Ergonomic support engineered to keep users relaxed through longer all-day sessions.",
  },
  {
    icon: PaletteIcon,
    title: "Color Options",
    description: "Choose from gray, black, or cream finishes to match your clinic or wellness space.",
  },
]

const osProtocols = [
  { icon: Zap, name: "Quick Charge" },
  { icon: Scale, name: "Comfort & Balance" },
  { icon: HeartPulse, name: "Deep Wellness" },
  { icon: Leaf, name: "Healthy Aging" },
  { icon: HandHeart, name: "Gentle Support" },
  { icon: Dumbbell, name: "Exercise Recovery" },
]

const panelComparison = [
  {
    label: "One-Touch Pressure Select (1.3 / 1.6 / 1.8 / 2.0 ATA)",
    standard: true,
    os: true,
  },
  { label: "Temperature, timer & session controls", standard: true, os: true },
  { label: "Ionizer, light, air conditioner, TV & LED controls", standard: true, os: true },
  { label: "Monitors critical oxygen, humidity & pressure", standard: true, os: true },
  { label: "6 preprogrammed 6P/OS™ protocols", standard: false, os: true },
  { label: "Hypoxic–hyperoxic paradigm with mask on / off alerts", standard: false, os: true },
]

export function OptionalFeaturesSection() {
  return (
    <section id="optional-features" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Optional Features</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Customize your chamber with premium add-ons
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Tailor the Vital Sphere 360 to your practice with optional upgrades engineered for advanced,
            clinical-grade performance.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border-2 border-blue-200 bg-card">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Advanced O2 Delivery
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">
                Lightweight High-Flow BIBS Oxygen Delivery System
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                The Built-In Breathing System (BIBS) delivers inhale-activated oxygen through a lightweight
                facemask, with exhalation expelled outside the chamber for advanced clinical-grade
                applications. It keeps ambient oxygen at a safe 21% while maximizing the concentration
                delivered directly to the user.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {bibsHighlights.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-secondary/50 p-4">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <h4 className="mt-3 text-sm font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 overflow-hidden rounded-xl border border-border bg-background lg:order-2">
              <Image
                src="/images/bibs-mask.png"
                alt="Lightweight high-flow BIBS oxygen delivery system — man wearing oxygen mask with CO2 release and oxygen inlet schematic components, blue and silver tubing"
                width={690}
                height={565}
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border-2 border-blue-200 bg-card">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <Image
                src="/images/starlight-ceiling.jpeg"
                alt="Starlight simulated ceiling inside the hyperbaric chamber — a night-sky panel with stars, the Milky Way, and a galaxy above quilted interior padding and a touchscreen control panel"
                width={1024}
                height={1024}
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Ambient Experience</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold tracking-tight">Starlight Simulated Ceiling</h3>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  +$1,200
                </span>
              </div>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Transform each session into a calming, immersive experience with a fiber-optic starlight
                ceiling. A realistic night sky — complete with a shimmering Milky Way and distant galaxy —
                turns the chamber interior into a serene, spa-like retreat that helps users fully relax.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {starlightHighlights.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-secondary/50 p-4">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <h4 className="mt-3 text-sm font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border-2 border-blue-200 bg-card">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Interior Comfort</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold tracking-tight">
                  Premium Business-Inspired Adjustable Seating
                </h3>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  +$1,200 / ea
                </span>
              </div>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Elevate every session with fully adjustable comfort seating inspired by luxury business-class
                travel. Hand-finished quilted leather, sculpted bolsters, and padded armrests deliver
                first-class support that keeps users relaxed throughout their time in the chamber.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {seatingHighlights.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-secondary/50 p-4">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <h4 className="mt-3 text-sm font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SeatingSlideshow />
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border-2 border-blue-200 bg-card">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-1">
              <ControlPanelViewer />
            </div>

            <div className="order-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Control Panel Options</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">Choose your control panel</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Every chamber includes the standard control panel with exclusive One-Touch Pressure Select.
                Upgrade to the 6P/OS<span className="align-super text-xs">™</span> panel to add six guided
                protocols and live safety monitoring — while keeping one-touch pressure selection.
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold">Included 6P/OS™ protocols</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {osProtocols.map((item, index) => (
                    <div key={item.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <item.icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>
                        <span className="text-muted-foreground/70">{index + 1}.</span> {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <SixPosLink />
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-t border-border p-6 sm:p-8 md:grid-cols-2">
            <div className="flex flex-col rounded-xl border border-border bg-background p-6">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-lg font-semibold">Standard Panel</h4>
                <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  Included
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Integrated touchscreen with One-Touch Pressure Select</p>
              <ul className="mt-5 grid gap-3">
                {panelComparison.map((row) => (
                  <li key={row.label} className="flex items-start gap-3 text-sm leading-relaxed">
                    {row.standard ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    ) : (
                      <Minus className="mt-0.5 size-4 shrink-0 text-muted-foreground/40" aria-hidden="true" />
                    )}
                    <span className={row.standard ? "text-foreground" : "text-muted-foreground/50"}>{row.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col rounded-xl border-2 border-primary bg-primary/5 p-6">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-lg font-semibold">
                  6P/OS<span className="align-super text-xs">™</span> Panel
                </h4>
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  +$5,000
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Everything in Standard, plus guided protocols &amp; monitoring</p>
              <ul className="mt-5 grid gap-3">
                {panelComparison.map((row) => (
                  <li key={row.label} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground">{row.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
