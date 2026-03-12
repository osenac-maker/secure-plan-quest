import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Jusqu'à 10 000 € d'économies fiscales par an",
  "Audit 100% gratuit et sans engagement",
  "Conseiller dédié en 48h",
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-hero pt-32 pb-20 md:pb-28">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(160_60%_42%/0.15),transparent_60%)]" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/10">
            🎯 Spécialiste indépendants & dirigeants
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Réduisez vos impôts.{" "}
          <span className="block opacity-80">Préparez votre retraite.</span>
          <span className="block opacity-60">Protégez votre famille.</span>
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
            <Button size="lg" variant="secondary" className="text-base gap-2 font-semibold px-8">
              Faire mon bilan gratuit
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-2 text-primary-foreground/70">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm">{b}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
