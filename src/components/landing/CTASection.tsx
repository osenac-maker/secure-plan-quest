import BilanButton from "@/components/BilanButton";
import sectionRetirement from "@/assets/section-retirement.jpg";

const CTASection = () => (
  <section aria-labelledby="final-title" className="relative py-12 md:py-20 overflow-hidden">
    <div className="absolute inset-0">
      <img src={sectionRetirement} alt="Un couple préparant une retraite sereine" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/80" />
    </div>
    <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
      <h2 id="final-title" className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground mb-4">Préparez votre retraite avec une vision claire</h2>
      <div className="divider-gold mx-auto mb-5" />
      <p className="text-primary-foreground/90 mb-6">Votre retraite estimée, vos leviers fiscaux : faites le point sur votre situation.</p>
      <BilanButton />
      <p className="mt-4 text-sm text-primary-foreground/80">Gratuit · Confidentiel · Sans engagement</p>
    </div>
  </section>
);

export default CTASection;
