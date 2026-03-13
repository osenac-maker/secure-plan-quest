import { motion } from "framer-motion";

const partners = [
  "AXA",
  "Generali",
  "SwissLife",
  "Allianz",
  "AG2R La Mondiale",
  "Cardif",
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
          Nous travaillons avec les <span className="text-gradient-gold">leaders du marché</span>
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
          Courtier indépendant, nous sélectionnons les meilleurs contrats parmi nos partenaires pour vous proposer des solutions objectivement adaptées à votre situation — sans conflit d'intérêt.
        </motion.p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {partners.map((name, i) => (
          <motion.div
            key={name}
            className="flex items-center justify-center p-4 rounded-lg bg-card border border-border h-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <span className="text-sm font-semibold text-muted-foreground tracking-wide">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
