import { motion } from "framer-motion";

const TransitionSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Le meilleur moment pour préparer sa retraite était hier.
        <span className="block text-gradient-gold mt-2">Le second, aujourd'hui.</span>
      </motion.h2>
      <motion.div
        className="divider-gold mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
    </div>
  </section>
);

export default TransitionSection;
