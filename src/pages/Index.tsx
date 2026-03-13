import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TransitionSection from "@/components/landing/TransitionSection";
import ProblemSection from "@/components/landing/ProblemSection";
import MidCTASection from "@/components/landing/MidCTASection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/layout/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TransitionSection />
    <ProblemSection />
    <MidCTASection />
    <HowItWorksSection />
    <SolutionsSection />
    <BenefitsSection />
    <SocialProofSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
