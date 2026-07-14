import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FeaturesSection } from "@/components/features-section"
import { SpecificationsSection } from "@/components/specifications-section"
import { OptionalFeaturesSection } from "@/components/optional-features-section"
import { InteriorLiningSection } from "@/components/interior-lining-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FinancingSection } from "@/components/financing-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <OverviewSection />
        <BenefitsSection />
        <FeaturesSection />
        <SpecificationsSection />
        <OptionalFeaturesSection />
        <InteriorLiningSection />
        <TestimonialsSection />
        <ReviewsSection />
        <FinancingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
