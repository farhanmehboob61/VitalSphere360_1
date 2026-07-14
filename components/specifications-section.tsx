import Image from "next/image"

const chamberSpecs = [
  "2.0 ATA | 15 PSI | 100 kPa",
  'One-piece size: 67" D × 58.4" W × 69" H',
  'Two-piece size: 69" D × 59" W × 70.5" H',
  "Optional modular cabin in two 31-inch sections",
  "Selectable pressures: 1.3 / 1.6 / 1.8 / 2.0 ATA",
  "Dual 120 LPM air compressors",
  "20 LPM oxygen generator at 60 PSI",
  "Single-seat comfort or dual-seat configuration",
  "Touchscreen LCD display for operation",
  "Noise level: < 60 dB",
  "Easy-slide polycarbonate (PU) door",
  "Interior and exterior controls for independent use",
  "USB charging port included",
  "3-year warranty",
]

const systemSpecs = [
  "Intelligent smart controller with redundant dual compressors",
  "Dual 120 LPM compressor unit for dependable airflow",
  "Dual 20 LPM oxygen concentrators up to 60 PSI",
  "Dual oxygen amplifiers for enhanced delivery",
  "Built-in dehumidifier for cleaner, drier air",
  "PSA molecular sieve oxygen generation",
  "Double inlet and outlet filtration",
  "No external oxygen tank required",
]

const acSpecs = [
  "Dedicated water-cooled triple-action air conditioner (900 watts)",
  "Adjustable water temperature from 5°C to 10°C",
  "Precision touchscreen temperature control",
  "Interior radiator fan that removes humidity from the chamber",
  "Whisper-quiet operation for a relaxing session",
  "Portable glossy-black cabinet on locking casters",
  "Recessed side handles for easy repositioning",
  "High-flow perforated ventilation panels",
]

const specTable = [
  { spec: "Chamber", weight: "1,200 lbs", power: "N/A", size: '67" D × 58.4" W × 69" H' },
  {
    spec: "Dual all in one smart controller unit",
    weight: "188 lbs",
    power: "2010 Watts",
    size: '36" L × 19" W × 49" H',
  },
  { spec: "AC Unit", weight: "60 lbs", power: "900 Watts", size: '15" L × 20" W × 23" H' },
  { spec: "Equipment Voltage", weight: "—", power: "110V–120V (220V on request)", size: "—" },
]

const certifications = [
  {
    name: "CE Marking",
    description:
      "Declares that the chamber conforms to European Union health, safety, and environmental protection standards, allowing it to be sold and operated within the European Economic Area.",
  },
  {
    name: "ISO 9001:2015",
    description:
      "Certifies a quality management system focused on consistent processes, customer satisfaction, and continual improvement across manufacturing and service.",
  },
  {
    name: "ISO 14001:2015",
    description:
      "Certifies an environmental management system that controls environmental impact and promotes responsible, sustainable manufacturing practices.",
  },
  {
    name: "ISO 13485",
    description:
      "The globally recognized quality management standard for medical devices, ensuring rigorous design, production, and regulatory compliance for medical-grade equipment.",
  },
  {
    name: "ASME Compliant — U Stamp",
    description:
      "The chamber is built to the ASME Boiler and Pressure Vessel Code and carries the ASME U Stamp, certifying that the pressure vessel is designed, fabricated, and inspected to recognized safety standards for pressurized equipment.",
  },
]

export function SpecificationsSection() {
  return (
    <section id="specifications" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Specifications</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Full technical specifications
          </h2>
        </div>

        {/* Grouped Spec Sections */}
        <div className="mt-12 space-y-8">
          {/* Chamber Features */}
          <div className="border-b border-border pb-8">
            <h3 className="text-lg font-semibold text-foreground">Chamber Features</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {chamberSpecs.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Oxygen System */}
          <div className="border-b border-border pb-8">
            <h3 className="text-lg font-semibold text-foreground">Oxygen System</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {systemSpecs.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dual All-in-One Unit - with image */}
          <div className="border-b border-border pb-8">
            <h3 className="text-lg font-semibold text-foreground">Dual All-in-One Unit</h3>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-lg border border-border bg-secondary/40">
                <Image
                  src="/images/dual-all-in-one-unit.jpeg"
                  alt="Dual all-in-one smart controller unit"
                  width={1024}
                  height={1024}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Redundant dual 120 LPM compressors and dual 20 LPM oxygen concentrators with built-in backup systems — no external oxygen tank required.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid items-center gap-6 rounded-2xl border-2 border-blue-200 bg-card p-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border bg-secondary/40">
            <Image
              src="/images/ac-unit.jpeg"
              alt="Air conditioning unit — glossy black portable cabinet on casters with touchscreen control panel, side handles, and perforated ventilation grilles"
              width={1024}
              height={1024}
              className="h-auto w-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Air conditioning unit</h3>
            <ul className="mt-5 grid gap-3">
              {acSpecs.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border-2 border-blue-200 bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Oxygen Health Systems Vital Sphere 360 hardshell hyperbaric oxygen chamber specifications
              </caption>
              <thead>
                <tr className="border-b border-border bg-secondary/60">
                  <th scope="col" className="px-6 py-4 font-semibold">Component</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Weight</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Power</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Size</th>
                </tr>
              </thead>
              <tbody>
                {specTable.map((row) => (
                  <tr key={row.spec} className="border-b border-border last:border-0">
                    <th scope="row" className="px-6 py-4 font-medium">{row.spec}</th>
                    <td className="px-6 py-4 text-muted-foreground">{row.weight}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.power}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border-2 border-blue-200 bg-card p-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Quality Assured</p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Certifications &amp; Standards</h3>
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Built to the highest international manufacturing standards, ensuring safety, quality, and
              reliability you can trust.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 rounded-xl border border-border bg-background p-6">
            <Image
              src="/images/certifications.png"
              alt="Certification marks — CE, ISO 9001:2015, ISO 14001:2015, and ISO 13485 Quality Management System"
              width={1200}
              height={140}
              className="h-auto w-full max-w-md flex-1 object-contain sm:max-w-xl"
            />
            <Image
              src="/images/asme-mark.png"
              alt="ASME certification mark — American Society of Mechanical Engineers U Stamp"
              width={220}
              height={140}
              className="h-16 w-auto object-contain sm:h-20"
            />
          </div>

          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.name}>
                <dt className="text-sm font-semibold">{cert.name}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{cert.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
