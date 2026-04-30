import { motion } from "framer-motion";

const strengths = [
  { label: "Assureurs de 1er plan", detail: "Top 10 européens" },
  { label: "Groupes européens", detail: "Présence internationale" },
  { label: "Contrats sélectionnés", detail: "Analyse indépendante" },
  { label: "Performance prouvée", detail: "Historiques vérifiés" },
  { label: "Notations AAA / AA", detail: "Solidité financière" },
  { label: "Courtier indépendant", detail: "Sans conflit d'intérêt" },
];

const PartnersSection = () => (
  <section className="py-20 bg-background border-y border-border">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <motion.p
          className="text-copper font-medium text-xs tracking-widest uppercase mb-3"
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
          Nous travaillons avec les{" "}
          <span className="text-gradient-gold">plus grandes compagnies européennes</span>
        </motion.h2>
        <motion.div
          className="divider-gold mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Courtier indépendant, nous sélectionnons les meilleurs contrats parmi les leaders
          de l'assurance en Europe — sans conflit d'intérêt.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
        {strengths.map((item, i) => (
          <motion.div
            key={item.label}
            className="group flex flex-col items-center justify-center py-5 px-3 rounded-lg border border-border hover:border-copper/40 bg-card hover:bg-copper/5 transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
          >
            <span className="text-xs font-semibold text-foreground group-hover:text-copper transition-colors duration-300 leading-snug mb-1">
              {item.label}
            </span>
            <span className="text-xs text-muted-foreground/70">{item.detail}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
