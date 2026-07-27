import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { AirMenuShowcase } from "@/components/airmenu-showcase";
import { MetricsBanner } from "@/components/metrics-banner";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesGrid />
        <AirMenuShowcase />
        <MetricsBanner />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  );
}
