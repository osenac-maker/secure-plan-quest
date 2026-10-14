import { ClipboardCheck, UserCheck, Rocket } from "lucide-react";
import BilanButton from "@/components/BilanButton";

const steps = [
  { icon: ClipboardCheck, step: "01", title: "Votre situation", desc: "Répondez aux questions sur votre activité, vos revenus et vos objectifs." },
  { icon: UserCheck, step: "02", title: "Votre estimation", desc: "Consultez votre pension estimée, puis demandez votre bilan complet par email." },
  { icon: Rocket, step: "03", title: "Votre échange", desc: "Si vous le souhaitez, un conseiller vous rappelle pour examiner vos besoins." },
];

const HowItWorksSection = () => (
  <section aria-labelledby="steps-title" className="py-8 md:py-14 bg-card">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 id="steps-title" className="font-heading text-2xl md:text-4xl font-bold text-foreground text-center mb-6">Comment ça <span className="text-gradient-gold">marche ?</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
        {steps.map((step) => (
          <div key={step.step} className="flex md:flex-col items-start gap-3 p-4 rounded-lg bg-background border border-border shadow-card">
            <div className="flex items-center gap-2 text-copper shrink-0"><step.icon className="w-5 h-5" /><span className="text-xs font-semibold">{step.step}</span></div>
            <div><h3 className="font-heading text-lg font-semibold text-foreground mb-1">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p></div>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground text-center mt-5">L'IA prépare l'analyse. Un conseiller la vérifie et la signe.</p>
      <div className="text-center mt-5"><BilanButton /></div>
    </div>
  </section>
);

export default HowItWorksSection;
