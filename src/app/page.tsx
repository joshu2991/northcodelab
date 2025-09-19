import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { LogoCarousel } from '@/components/LogoCarousel'
import { ServicesSection } from '@/components/ServicesSection'
import { WebSolutionsSection } from '@/components/WebSolutionsSection'
import { PortfolioSection } from '@/components/PortfolioSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <LogoCarousel />
      <ServicesSection />
      <WebSolutionsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}