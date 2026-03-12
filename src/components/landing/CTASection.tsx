import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-20 bg-hero animate-gradient relative overflow-hidden">
    <motion.div
      className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 6, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-primary-foreground/5 blur-3xl"
      animate={{ scale: [1.2, 1, 1.2] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/15"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles className="w-4 h-4" />
          Gratuit & sans engagement
        </motion.div>
      </motion.div>
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Prêt à optimiser votre situation ?
      </motion.h2>
      <motion.p
        className="text-primary-foreground/70 max-w-xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Faites votre audit retraite et fiscal gratuit en 2 minutes. Sans engagement, 100% confidentiel.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Link to="/simulateur">
          <Button size="lg" variant="secondary" className="text-base gap-2 font-semibold px-8 group">
            Commencer mon bilan gratuit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
