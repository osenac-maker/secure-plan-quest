import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustBanner from "@/components/landing/TrustBanner";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import { AdviceComparisonSection, AboutSection } from "@/components/landing/EditorialSections";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/layout/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
    <HeroSection />
    <TrustBanner />
    <ProblemSection />
    <AdviceComparisonSection />
    <HowItWorksSection />
    <AboutSection />
    <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
