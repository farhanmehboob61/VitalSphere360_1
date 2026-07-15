import Image from "next/image"
import {
  MonitorSmartphone,
  DoorOpen,
  Wind,
  Waves,
  Gauge,
  Snowflake,
  Zap,
  Volume2,
  Activity,
  CalendarClock,
  MessageSquare,
  MousePointerClick,
} from "lucide-react"

const touchscreenCapabilities = [
  { icon: Activity, label: "Real-time pressure, temperature, oxygen & humidity monitoring" },
  { icon: CalendarClock, label: "Session management with timer and pressure profiles" },
  { icon: MessageSquare, label: "Two-way patient communication and call station" },
  { icon: MousePointerClick, label: "One-Touch Pressure Select — 1.3 / 1.6 / 1.8 / 2.0 ATA" },
]

const features = [
  {
    icon: MonitorSmartphone,
    title: "Advanced AI Touch Control",
    description:
      "Touchscreen control with interior and exterior digital displays showing pressure, temperature, humidity, and percent oxygenation. Internal controls are duplicated for safe operation from inside.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Advanced%20AI%20Touch%20Control-kDC2ApRMmuO7SB4887OWMLy5OWlwnZ.png",
  },
  {
    icon: DoorOpen,
    title: "Easy-Slide Cabin Door",
    description:
      "Large polycarbonate sliding glass door for effortless entry and exit, activated by pressure with automatic release upon de-pressurization.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Easy-Slide%20Cabin%20Door-pjbqO9Syj5xs10wpAXHj1LSo57mwXO.png",
  },
  {
    icon: Wind,
    title: "Dual All-in-One System",
    description:
      "Redundant dual 120 LPM compressors and dual 20 LPM oxygen concentrators with amplifiers — no external oxygen tank required.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dual%20All-in-One%20System-D5VOhKVXQycMHSfRinFXJyfdEAjRWa.png",
  },
  {
    icon: Snowflake,
    title: "Complimentary Air Conditioning",
    description:
      "Two-part climate control system with a built-in dehumidifier keeps every session at a comfortable, consistent temperature — included at no additional cost.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Complimentary%20Air%20Conditioning-e2kSHkR4w2DkzktsrW9CbE7B3WLvgs.png",
  },
  {
    icon: Waves,
    title: "Optional BIBS Mask System",
    description:
      "Keeps ambient oxygen low while maximizing delivery via facemask — also exhausting carbon dioxide to act as a CO2 scrubber.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Optional%20BIBS%20Mask%20System.png-UfZxiqKAo0plkpaELJzXpsF6SZ0nNh.jpeg",
  },
  {
    icon: Volume2,
    title: "Noiseless Operation",
    description:
      "Noise-reduction technology and optional noiseless pressure relief valves keep operating sound below 60 dB for a calm environment.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Noiseless%20Operation-s9nqiamv5WUXfbr41wLEmftbtSubqC.png",
  },
]

export function FeaturesSection() {
  return (
    <section id="gallery" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Engineered Features</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Built for safety, durability, comfort, and ease of use
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Just power it up, get inside, and hit the button to start your therapeutic session. Every
            detail is engineered for the ultimate user experience.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border-2 border-blue-200 bg-card">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intuitive%20high-definition%20internal%20touchscreen-vW0L2jcizS1xKCo6veYZWubw5R6EmV.png"
                alt="Intuitive high-definition internal touchscreen user interface mounted inside the chamber — showing session timer, real-time temperature, oxygen, humidity and pressure readouts, one-touch ATA pressure selection, and chamber controls"
                width={1200}
                height={620}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Touch Screen User Interface</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">
                Intuitive high-definition internal touchscreen
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                The internal HD touchscreen provides complete chamber control with real-time pressure
                monitoring, session management, and patient communication — all from inside the chamber.
              </p>

              <ul className="mt-6 grid gap-3">
                {touchscreenCapabilities.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="pt-1.5 text-foreground">{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  One-Touch Pressure Select — Included
                </span>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  6P/OS™ Protocols — Optional
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Full-Width Feature Blocks */}
        <div className="mt-12 space-y-0">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div
                key={feature.title}
                className={`border-b border-border px-4 py-12 sm:px-6 lg:px-8 ${
                  isEven ? "bg-background" : "bg-muted/40"
                }`}
              >
                <div className={`mx-auto max-w-7xl grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${isEven ? "" : "lg:grid-cols-2"}`}>
                  <div className={isEven ? "order-1" : "order-2 lg:order-2"}>
                    <div className="flex items-center gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <feature.icon className="size-6" aria-hidden="true" />
                      </span>
                      <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
                    </div>
                    <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {/* Feature image - alternates sides */}
                  <div
                    className={`overflow-hidden rounded-lg border border-border bg-background ${
                      isEven ? "order-2 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
