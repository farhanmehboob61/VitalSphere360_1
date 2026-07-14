import { Activity, HeartPulse, ShieldPlus } from "lucide-react"

const benefits = [
  {
    icon: Activity,
    title: "Faster Recovery",
    description:
      "Increased oxygen levels at 2.0 ATA promote quicker healing for injuries, surgeries, and chronic wounds while enhancing tissue repair.",
  },
  {
    icon: HeartPulse,
    title: "Improved Circulation",
    description:
      "HBOT boosts oxygen delivery to tissues, improving circulation and supporting overall cardiovascular health throughout the body.",
  },
  {
    icon: ShieldPlus,
    title: "Enhanced Immune Function",
    description:
      "Higher oxygen levels strengthen the body's immune response, helping patients fight infections and recover more effectively.",
  },
]

const applications = [
  "Chronic wounds and ulcers",
  "Sports injuries and muscle strains",
  "Chronic pain and inflammation",
  "Fatigue and low energy levels",
  "Post-surgical recovery",
  "Neurological conditions & TBIs",
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Key Benefits</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            A valuable addition to any wellness facility
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border-2 border-blue-200 bg-card p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <benefit.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 sm:p-10">
          <h3 className="text-xl font-semibold">Versatile applications</h3>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
            The ability to deliver high-pressure oxygen therapy at 2.0 ATA makes this chamber effective
            for a wide range of health and wellness protocols:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium"
              >
                <span className="size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
