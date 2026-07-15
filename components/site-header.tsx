"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Model", href: "#overview" },
  { label: "Gallery", href: "#gallery" },
  { label: "Technical Details", href: "#specifications" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Sales", href: "#contact" },
]

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const sections = navLinks.map((link) => ({
      id: link.href.replace("#", ""),
      href: link.href,
    }))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-10 z-40 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#overview" className="flex items-center" aria-label="Oxygen Health Systems home">
          <Image
            src="/images/oxygen-health-systems-logo-transparent.png"
            alt="Oxygen Health Systems"
            width={143}
            height={74}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`border-b-2 text-sm font-medium transition-all ${
                activeSection === link.href
                  ? "border-primary font-bold text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+16308127865"
            className="hidden items-center gap-2 text-sm font-semibold text-foreground sm:flex"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {"+1 (630) 812-7865"}
          </a>
          <Button asChild size="sm">
            <a href="#contact">Request Pricing</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
