import { motion } from "framer-motion";
import { ShieldCheck, Building2, Globe, TrendingUp, Award, Landmark } from "lucide-react";

const strengths = [
  { icon: Building2, label: "Assureurs de 1er plan" },
  { icon: Globe, label: "Groupes européens" },
  { icon: ShieldCheck, label: "Contrats sélectionnés" },
  { icon: TrendingUp, label: "Performance prouvée" },
  { icon: Award, label: "Notations AAA / AA" },
  { icon: Landmark, label: "Solidité financière" },
];

const PartnersSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <motion.p
          className="text-copper font-medium text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nos partenaires assureurs
        </motion.p>
        <motion.h2
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nous travaillons avec les <span className="text-gradient-gold">plus grandes compagnies européennes</span>
        </motion.h2>
        <motion.div
          className="divider-gold mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Courtier indépendant, nous sélectionnons les meilleurs contrats parmi les leaders de l'assurance en Europe pour vous proposer des solutions objectivement adaptées à votre situation — sans conflit d'intérêt.
        </motion.p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {strengths.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-card border border-border gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <item.icon className="w-6 h-6 text-copper" />
            <span className="text-xs font-semibold text-muted-foreground tracking-wide text-center">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
