import { TrendingDown, Receipt, Shield } from "lucide-react";
import BilanButton from "@/components/BilanButton";

const problems = [
  { icon: TrendingDown, title: "Retraite", desc: "Votre pension pourra-t-elle maintenir votre niveau de vie ? Estimez l'écart avec vos revenus actuels." },
  { icon: Receipt, title: "Impôts", desc: "Vos versements PER peuvent réduire votre revenu imposable, dans les limites applicables. Identifiez l'économie possible selon votre situation." },
  { icon: Shield, title: "Prévoyance", desc: "Un arrêt de travail peut fragiliser vos revenus et vos proches. Faites le point sur vos besoins de protection." },
];

const ProblemSection = () => (
  <section aria-labelledby="problem-title" className="py-6 md:py-14 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 id="problem-title" className="font-heading text-2xl md:text-4xl font-bold text-foreground text-center mb-6">Vous avez tout construit. <span className="text-gradient-gold">Et pour après ?</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
        {problems.map((problem) => (
          <div key={problem.title} className="flex md:flex-col gap-3 p-4 rounded-lg bg-card border border-border shadow-card">
            <problem.icon className="w-5 h-5 text-copper shrink-0 mt-1" />
            <div><h3 className="font-heading text-lg font-semibold text-foreground mb-1">{problem.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{problem.desc}</p></div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center"><BilanButton /></div>
    </div>
  </section>
);

export default ProblemSection;
