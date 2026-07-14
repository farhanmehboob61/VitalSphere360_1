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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">The Overview</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {"Experience the luxurious Vital Sphere 360 2.0 ATA hard-shell chamber"}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            A game-changer for healthcare providers and wellness centers offering advanced hyperbaric
            oxygen therapy. The upright walk-in design comfortably fits one person with a high-end
            reclining chair, or can be configured as a dual-seat setup. Its optional modular cabin ships
            in two 31-inch sections to fit through standard U.S. doorways and most commercial elevators.
            The 2.0 ATA rating safely increases oxygen delivery to tissues, supporting faster healing and
            improved recovery across a wide range of conditions.
          </p>
        </div>
      </div>

      <div className="border-b border-border bg-background">
        <dl className="mx-auto flex max-w-7xl items-center justify-between divide-x divide-border px-4 py-12 sm:px-6 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-1 flex-col items-center gap-2 px-4 text-center">
              <dd className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</dd>
              <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground sm:text-sm">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
