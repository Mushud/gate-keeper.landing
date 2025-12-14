import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";
import IntegrationSection from "@/components/integration-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="integration">
        <IntegrationSection />
      </div>
      <Footer />
    </div>
  );
}
