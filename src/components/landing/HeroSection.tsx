import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logoRetiro from "@/assets/logo-retiro-v2.png";

const benefits = [
  "Jusqu'à 10 000 € d'économies fiscales par an",
  "Audit 100% gratuit et sans engagement",
  "Conseiller dédié en 48h",
];

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image with warm overlay */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/40" />
    </div>

    <div className="container mx-auto px-4 relative z-10 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* Logo featured prominently */}
          <motion.img
            src={logoRetiro}
            alt="RETIRO Patrimoine"
            className="h-24 w-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Faire de votre patrimoine
            <span className="block text-gradient-gold mt-1">un projet de vie</span>
          </motion.h1>

          <motion.div
            className="border-l-3 border-copper pl-5 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground italic font-heading">
              Découvrez dès maintenant vos axes d'optimisation patrimoniale et fiscale.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white text-base gap-2 font-medium px-8 border-0 group shadow-lg">
                Faire mon bilan gratuit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/simulateur">
              <Button size="lg" variant="outline" className="border-navy/20 text-navy hover:bg-navy/5 text-base px-8">
                Prendre rendez-vous
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                className="flex items-center gap-2 text-foreground/70"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 text-copper" />
                <span className="text-sm">{b}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right side - decorative empty for hero image to show through */}
        <div className="hidden lg:block" />
      </div>
    </div>
  </section>
);

export default HeroSection;
