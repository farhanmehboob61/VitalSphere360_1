import Image from "next/image"
import Link from "next/link"
import { Ruler, Layers, Wrench, ClipboardCheck, Award, Gauge, ClipboardList, Search, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const explanationCards = [
  {
    number: "01",
    title: "Verification, not just a claim",
    description:
      "ASME certification represents defined engineering, manufacturing, quality-control, inspection, and testing requirements rather than a manufacturer simply describing a product as safe.",
  },
  {
    number: "02",
    title: "Engineered for pressure",
    description:
      "Pressure-vessel construction requires careful control of materials, fabrication, welding, structural integrity, testing, and manufacturing processes.",
  },
  {
    number: "03",
    title: "Independent inspection",
    description:
      "ASME pressure-vessel manufacturing includes inspection and verification as part of the certification process, adding another layer of accountability to the manufacturing system.",
  },
]

const uStampPoints = [
  "Controlled manufacturing procedures",
  "Approved fabrication processes",
  "Qualified welding processes and personnel, where applicable",
  "Material and component traceability",
  "In-process and final inspection",
  "Pressure testing",
  "Documented quality-control procedures",
]

const processSteps = [
  { number: "01", title: "Engineering", description: "Pressure-vessel design and structural requirements.", icon: Ruler },
  { number: "02", title: "Materials", description: "Controlled materials and component selection.", icon: Layers },
  { number: "03", title: "Fabrication", description: "Manufacturing and qualified fabrication procedures.", icon: Wrench },
  {
    number: "04",
    title: "Testing & Inspection",
    description: "Inspection and pressure testing during the manufacturing process.",
    icon: ClipboardCheck,
  },
  { number: "05", title: "Certification", description: "Final verification and applicable ASME identification/documentation.", icon: Award },
]

const benefitCards = [
  {
    icon: Gauge,
    title: "Pressure Vessel Engineering",
    description: "Designed with the requirements of operating under elevated pressure in mind.",
  },
  {
    icon: ClipboardList,
    title: "Manufacturing Accountability",
    description: "Defined processes and quality-control requirements throughout construction.",
  },
  {
    icon: Search,
    title: "Independent Verification",
    description: "Inspection provides verification beyond a manufacturer's own internal claims.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Confidence",
    description:
      "A recognized engineering framework gives clinics and owners greater visibility into how the pressure vessel was manufactured.",
  },
]

const trustStrip = [
  { label: "ASME U Stamp", sublabel: "Pressure Vessel Certification" },
  { label: "Pressure Tested", sublabel: "Manufacturing Verification" },
  { label: "Independent Inspection", sublabel: "Third-Party Oversight" },
  { label: "Documented Quality Control", sublabel: "Controlled Manufacturing Process" },
]

export function AsmeExplanationSections() {
  return (
    <>
      {/* Why ASME Matters */}
      <section id="why-asme-matters" className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why ASME Matters</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Built as a pressure vessel, not just a chamber.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              A hyperbaric chamber operates at pressures above normal atmospheric pressure. Because of
              that, pressure-vessel engineering — materials, fabrication, welding, inspection, and testing —
              is a fundamental part of how the chamber is designed and built, not an afterthought.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {explanationCards.map((card) => (
              <div key={card.number} className="rounded-2xl border border-border bg-card p-8">
                <span className="text-sm font-bold tracking-widest text-primary/50">{card.number}</span>
                <h3 className="mt-4 text-lg font-bold tracking-tight">{card.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* U Stamp */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10">
              <Image
                src="/images/asme-mark.png"
                alt="ASME certification mark — American Society of Mechanical Engineers U Stamp"
                width={220}
                height={140}
                className="h-28 w-auto object-contain"
              />
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                The U Stamp
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">The U Stamp</p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                What does the ASME U Stamp mean?
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                The U designation is associated with construction of pressure vessels under the applicable
                ASME Boiler and Pressure Vessel Code requirements. For a buyer, it points to a manufacturing
                system built around:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {uStampPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Recognized pressure-vessel certification is one part of a chamber&apos;s overall safety
                profile. It does not eliminate the importance of proper installation, operation, and
                maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">The Process</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              From engineering to final inspection
            </h2>
          </div>

          <div className="relative mt-14">
            <div
              className="absolute left-6 top-0 hidden h-full w-px bg-border lg:left-0 lg:top-6 lg:h-px lg:w-full"
              aria-hidden="true"
            />
            <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
              {processSteps.map((step) => {
                const Icon = step.icon
                return (
                  <li key={step.number} className="relative flex gap-4 lg:flex-col lg:gap-0">
                    <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-primary lg:mx-auto">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="lg:mt-6 lg:text-center">
                      <span className="text-xs font-bold tracking-widest text-primary/50">{step.number}</span>
                      <h3 className="mt-1 text-base font-bold tracking-tight">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Why it matters to buyers */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why It Matters</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Confidence beyond the specification sheet.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefitCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold tracking-tight">{card.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-0 divide-y divide-border rounded-2xl border border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {trustStrip.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1.5 px-6 py-8 text-center">
                <p className="text-base font-bold tracking-tight text-foreground">{item.label}</p>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {item.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product connection */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex items-center justify-center lg:order-1">
              <Image
                src="/images/vital-sphere-360-chamber.png"
                alt="Vital Sphere 360 hyperbaric chamber — white upright hard shell with control panel and interior premium seating"
                width={500}
                height={600}
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 24rem, 20rem"
                className="h-auto w-full max-w-xs object-contain sm:max-w-sm lg:max-w-md"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Vital Sphere 360</p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Safety engineering without compromising comfort.
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Pressure-vessel engineering is one part of the overall Vital Sphere experience. Alongside its
                ASME-compliant construction, the chamber is designed around accessibility, comfort, intuitive
                controls, and a premium interior — so the engineering behind it never gets in the way of the
                session itself.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/#overview" className="flex items-center gap-2">
                  Explore the Vital Sphere 360
                  <span aria-hidden="true">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-24">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have questions about our engineering or certifications?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-blue-100">
            Our team can walk you through the Vital Sphere 360, its manufacturing standards, certifications,
            specifications, and installation requirements.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/#contact">Request a Demo &amp; Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/#specifications">View Technical Specifications</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
