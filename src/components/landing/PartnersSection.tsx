import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

// Vrais assureurs partenaires crédibles pour le marché TNS/dirigeant
const insurers = [
  { name: "AXA", sub: "Assurance vie & PER" },
  { name: "Generali", sub: "Épargne & Prévoyance" },
  { name: "Swiss Life", sub: "PER & Retraite" },
  { name: "Allianz", sub: "Patrimoine" },
  { name: "Spirica", sub: "Assurance vie" },
  { name: "Apicil", sub: "TNS & Madelin" },
  { name: "Cardif", sub: "BNP Paribas" },
  { name: "Suravenir", sub: "Crédit Mutuel" },
];

// Dupliqué pour le scroll infini
const allInsurers = [...insurers, ...insurers];

const strengths = [
  { label: "Indépendance totale", detail: "Aucun conflit d'intérêt" },
  { label: "Analyse comparative", detail: "Tous contrats étudiés" },
  { label: "Notations AAA / AA", detail: "Solidité financière" },
  { label: "Accès institutionnel", detail: "Tarifs professionnels" },
];

const PartnersSection = () => (
  <section className="py-20 bg-background border-y border-border overflow-hidden">
    <div className="container mx-auto px-4">
      {/* Header */}
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
          <span className="text-gradient-gold">
            plus grandes compagnies européennes
          </span>
        </motion.h2>
        <motion.div
          className="divider-gold mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <motion.p
          className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Courtier indépendant, nous sélectionnons les meilleurs contrats parmi
          les leaders de l'assurance en Europe — sans conflit d'intérêt.
        </motion.p>
      </div>
    </div>

    {/* Scroll infini des logos */}
    <div className="relative w-full mb-12">
      {/* Dégradés masques sur les bords */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
      >
        {allInsurers.map((insurer, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col items-center justify-center w-36 h-20 rounded-lg border border-border bg-card hover:border-copper/30 hover:bg-copper/5 transition-colors duration-300 px-4"
          >
            <span className="font-heading font-bold text-foreground text-base leading-none">
              {insurer.name}
            </span>
            <span className="text-xs text-muted-foreground/60 mt-1 text-center leading-tight">
              {insurer.sub}
            </span>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Garanties courtier */}
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {strengths.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/50"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <ShieldCheck className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-semibold text-foreground leading-snug">
                {item.label}
              </div>
              <div className="text-xs text-muted-foreground/70 mt-0.5">
                {item.detail}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
