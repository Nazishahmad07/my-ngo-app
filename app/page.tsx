import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ImpactMetrics } from "@/components/impact-metrics"
import { FeaturedProjects } from "@/components/featured-projects"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PartnerLogos } from "@/components/partner-logos"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />

      <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are dedicated to creating sustainable solutions for communities in need through education,
                healthcare, and environmental initiatives. Our approach focuses on empowering local communities to build
                a better future for generations to come.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/donate">
                <Button size="lg" className="px-8">
                  Donate Now
                </Button>
              </Link>
              <Link href="/programs">
                <Button size="lg" variant="outline" className="px-8">
                  Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ImpactMetrics />
      <FeaturedProjects />
      <TestimonialsSection />
      <PartnerLogos />
      <NewsletterSignup />
    </main>
  )
}

