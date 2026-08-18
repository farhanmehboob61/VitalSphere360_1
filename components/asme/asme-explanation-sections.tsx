import Image from "next/image"
import Link from "next/link"
import { Ruler, Layers, Wrench, ClipboardCheck, Award, Gauge, ClipboardList, Search, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const explanationCards = [
  {
    number: "01",
    title: "The shell comes first",
    description:
      "The hard chamber is the pressure boundary around every session. We treat its design, materials, joints, fittings, and access points as pressure-vessel work—not cosmetic housing.",
  },
  {
    number: "02",
    title: "A process we can show",
    description:
      "ASME work is tied to controlled procedures and records. That gives buyers a clearer view of how the chamber was made, checked, and prepared for service.",
  },
  {
    number: "03",
    title: "More than our word",
    description:
      "The U Stamp brings inspection into the picture. It is an external check on the manufacturing system behind the chamber, not just a line in a brochure.",
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
  { number: "01", title: "Design the vessel", description: "Set the pressure, structure, access, and service requirements before fabrication begins.", icon: Ruler },
  { number: "02", title: "Control the materials", description: "Select and track the materials and components that become part of the pressure boundary.", icon: Layers },
  { number: "03", title: "Build to procedure", description: "Use controlled fabrication methods and qualified personnel throughout the build.", icon: Wrench },
  {
    number: "04",
    title: "Inspect and test",
    description: "Check the work in process and pressure-test the finished vessel before release.",
    icon: ClipboardCheck,
  },
  { number: "05", title: "Document the build", description: "Complete the required review and apply the ASME identification to the certified vessel.", icon: Award },
]

const benefitCards = [
  {
    icon: Gauge,
    title: "A vessel built for repeat use",
    description: "The chamber is made for the routine cycle of pressurizing, holding, and returning to normal between sessions.",
  },
  {
    icon: ClipboardList,
    title: "A clearer ownership story",
    description: "The certification framework gives your team something concrete to ask about when reviewing a chamber purchase.",
  },
  {
    icon: Search,
    title: "Inspection in the process",
    description: "The build is not finished when the paint is finished. Inspection and testing are part of getting the vessel ready.",
  },
  {
    icon: ShieldCheck,
    title: "Confidence for the next session",
    description:
      "The goal is straightforward: a pressure vessel your clinic can operate with a better understanding of how it was built.",
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
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">What we build to</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              What the U Stamp covers in your chamber
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Every session takes place inside a vessel that is repeatedly pressurized and returned to normal.
              That is why we focus on the details customers cannot see once the chamber is installed: the shell,
              the fabrication record, the inspection points, and the test that happens before delivery.
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
                The U Stamp is tied to the pressure-vessel work behind the chamber. For a buyer, that means the
                vessel is made through a defined system—not assembled casually and described as “certified” after
                the fact. The work includes:
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
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">For owners and clinics</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Know what is behind the shell.
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
                The pressure vessel is the foundation. Around it, we add the features that make the Vital Sphere
                360 practical to own and comfortable to use: an approachable entry, intuitive controls, cooling,
                and an interior designed for the full length of a session.
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
            Want the details behind the chamber?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-blue-100">
            Talk with the Oxygen Health Systems team about the Vital Sphere 360, the ASME U Stamp, and what
            ownership looks like for your clinic or home.
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
