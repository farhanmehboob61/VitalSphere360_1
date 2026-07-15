import dynamic from "next/dynamic"
import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"

// Below-fold sections are code-split so their JavaScript (including the
// interactive carousel, control-panel viewer, and slideshow) is not parsed or
// hydrated on the initial main-thread pass, reducing Total Blocking Time.
const FeaturesSection = dynamic(() =>
  import("@/components/features-section").then((m) => m.FeaturesSection)
)
const OptionalFeaturesSection = dynamic(() =>
  import("@/components/optional-features-section").then((m) => m.OptionalFeaturesSection)
)
const InteriorLiningSection = dynamic(() =>
  import("@/components/interior-lining-section").then((m) => m.InteriorLiningSection)
)
const SpecificationsSection = dynamic(() =>
  import("@/components/specifications-section").then((m) => m.SpecificationsSection)
)
const FinancingSection = dynamic(() =>
  import("@/components/financing-section").then((m) => m.FinancingSection)
)
const ReviewsSection = dynamic(() =>
  import("@/components/reviews-section").then((m) => m.ReviewsSection)
)
const ContactSection = dynamic(() =>
  import("@/components/contact-section").then((m) => m.ContactSection)
)
const SiteFooter = dynamic(() =>
  import("@/components/site-footer").then((m) => m.SiteFooter)
)

export default function Page() {
  return (
    <div className="min-h-screen bg-background pt-10 text-foreground">
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <OverviewSection />
        <FeaturesSection />
        <OptionalFeaturesSection />
        <InteriorLiningSection />
        <SpecificationsSection />
        <FinancingSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
