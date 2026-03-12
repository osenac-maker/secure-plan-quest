import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Jusqu'à 10 000 € d'économies fiscales par an",
  "Audit 100% gratuit et sans engagement",
  "Conseiller dédié en 48h",
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-hero animate-gradient pt-32 pb-20 md:pb-28">
    {/* Animated background orbs */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/20">
            <Sparkles className="w-4 h-4 text-accent" />
            Spécialiste indépendants & dirigeants
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Réduisez vos impôts.{" "}
          <motion.span
            className="block"
            style={{ opacity: 0.9 }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Préparez votre retraite.
          </motion.span>
          <motion.span
            className="block"
            style={{ opacity: 0.7 }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            Protégez votre famille.
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Obtenez votre audit retraite et fiscal gratuit en 2 minutes. Découvrez combien vous pouvez économiser grâce au PER et aux solutions patrimoniales.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/simulateur">
            <Button size="lg" variant="secondary" className="text-base gap-2 font-semibold px-8 group relative overflow-hidden">
              <span className="relative z-10">Faire mon bilan gratuit</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <motion.div
                className="absolute inset-0 bg-accent/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              className="flex items-center gap-2 text-primary-foreground/70"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
            >
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm">{b}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
