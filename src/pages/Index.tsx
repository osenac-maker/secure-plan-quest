import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustBanner from "@/components/landing/TrustBanner";
import TransitionSection from "@/components/landing/TransitionSection";
import ProblemSection from "@/components/landing/ProblemSection";
import MidCTASection from "@/components/landing/MidCTASection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import { AdviceComparisonSection, PersonalProtectionSection, AboutSection } from "@/components/landing/EditorialSections";
import SolutionsSection from "@/components/landing/SolutionsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PartnersSection from "@/components/landing/PartnersSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/layout/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TrustBanner />
    <TransitionSection />
    <ProblemSection />
    <MidCTASection />
    <HowItWorksSection />
    <AdviceComparisonSection />
    <PersonalProtectionSection />
    <SolutionsSection />
    <BenefitsSection />
    <PartnersSection />
    <SocialProofSection />
    <AboutSection />
    <FAQSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
