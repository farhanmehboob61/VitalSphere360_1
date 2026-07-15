import Image from "next/image"

const liningOptions = [
  {
    name: "Cream",
    description: "Warm cream quilted leather for a classic, inviting cabin feel.",
    image: "/images/lining-cream.png",
    alt: "Close-up of warm cream quilted leather interior lining with diamond stitching",
  },
  {
    name: "Black with Gold Stitching",
    description: "Deep black leather accented with fine gold diamond stitching for a bold, luxurious look.",
    image: "/images/lining-black-gold.png",
    alt: "Close-up of black quilted leather interior lining accented with gold diamond stitching",
  },
  {
    name: "Light Gray",
    description: "Soft light gray quilting for a clean, modern, spa-like atmosphere.",
    image: "/images/lining-light-gray.png",
    alt: "Close-up of soft light gray quilted leather interior lining with diamond stitching",
  },
  {
    name: "Dark Gray",
    description: "Rich charcoal gray quilting for an understated, contemporary finish.",
    image: "/images/lining-dark-gray.png",
    alt: "Close-up of rich charcoal dark gray quilted leather interior lining with diamond stitching",
  },
]

export function InteriorLiningSection() {
  return (
    <section id="interior-lining" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Interior Lining</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Four interior lining color options
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Personalize the cabin of your Vital Sphere 360 with premium quilted leather lining, available in four
            distinctive finishes to match your space and style.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {liningOptions.map((option) => (
            <div
              key={option.name}
              className="flex flex-col overflow-hidden rounded-2xl border-2 border-blue-200 bg-card"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={option.image || "/placeholder.svg"}
                  alt={option.alt}
                  width={512}
                  height={512}
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-base font-semibold">{option.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
