import Image from "next/image"
import { ControlPanelViewer } from "@/components/control-panel-viewer"

const stats = [
  { value: '67"', label: "Chamber Diameter" },
  { value: "1–2", label: "Seat Configuration" },
  { value: "2.0", label: "ATA Max Pressure" },
  { value: "31\"", label: "Modular Section Width" },
  { value: "95%", label: "Oxygen Delivery via 20 LPM Generator" },
]

export function OverviewSection() {
  return (
    <section id="overview" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Two-column layout: Image left, text right */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left column: Chamber image — shows below text on mobile */}
          <div className="order-2 flex items-center justify-center rounded-lg bg-background lg:order-1">
            <Image
              src="/images/vital-sphere-360-chamber.png"
              alt="Vital Sphere 360 hyperbaric chamber — white upright hard shell with control panel and interior premium seating"
              width={500}
              height={600}
              className="h-auto w-full max-w-xs object-contain sm:max-w-sm lg:max-w-md"
              priority
            />
          </div>

          {/* Right column: Text content — shows first on mobile */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">The Overview</p>
            <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {"Experience the luxurious Vital Sphere 360 2.0 ATA hard-shell chamber"}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
              A game-changer for healthcare providers and wellness centers offering advanced hyperbaric
              oxygen therapy. The upright walk-in design comfortably fits one person with a high-end
              reclining chair, or can be configured as a dual-seat setup. Its optional modular cabin ships
              in two 31-inch sections to fit through standard U.S. doorways and most commercial elevators.
              The 2.0 ATA rating safely increases oxygen delivery to tissues, supporting faster healing and
              improved recovery across a wide range of conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width stats row — 2-col on mobile, 3-col on sm, 5-col on lg */}
      <div className="border-b border-border bg-background">
        <dl className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
          <div className="grid grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-1.5 border-b border-border px-3 py-5 text-center last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${
                  i === 4 ? "col-span-2 border-b-0 sm:col-span-1" : ""
                }`}
              >
                <dd className="text-xl font-bold text-primary sm:text-2xl lg:text-3xl">{stat.value}</dd>
                <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </div>
        </dl>
      </div>
    </section>
  )
}
