import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TransitionSection from "@/components/landing/TransitionSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/layout/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TransitionSection />
    <BenefitsSection />
    <SocialProofSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
