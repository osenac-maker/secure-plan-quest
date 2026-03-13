import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logoRetiro from "@/assets/logo-retiro-v2.png";

const benefits = [
  "Jusqu'à 10 000 € d'économies fiscales dès la 1ʳᵉ année",
  "Bilan retraite 100 % gratuit, sans engagement",
  "Un conseiller patrimonial dédié à votre situation",
];

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(10,40%,8%)]/90 via-[hsl(15,30%,12%)]/75 to-transparent/30" />
    </div>

    <div className="container mx-auto px-4 relative z-10 py-32">
      <div className="max-w-2xl">
        {/* Logo with glowing backdrop */}
        <motion.div
          className="relative inline-block mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-copper/20 via-white/10 to-gold/15 rounded-2xl blur-2xl" />
          <img
            src={logoRetiro}
            alt="RETIRO Patrimoine"
            className="relative h-36 md:h-44 w-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Transformez vos revenus d'aujourd'hui
          <span className="block text-gradient-gold mt-2">en liberté de demain.</span>
        </motion.h1>

        <motion.div
          className="border-l-[3px] border-copper pl-6 mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl text-white/75 italic font-heading">
            Réduisez vos impôts, préparez votre retraite et protégez votre famille grâce à une stratégie patrimoniale adaptée aux dirigeants et indépendants.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Link to="/simulateur">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white text-base gap-2 font-medium px-8 border-0 group shadow-lg shadow-copper/30">
              Faire mon bilan retraite gratuit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/simulateur">
            <Button size="lg" variant="outline" className="border-copper/50 text-copper bg-white/90 hover:bg-white hover:text-copper-light text-base px-8 font-medium">
              Prendre rendez-vous
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="space-y-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              className="flex items-center gap-2.5 text-white/70"
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
    </div>

    {/* Decorative copper line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-mahogany via-copper to-gold/50" />
  </section>
);

export default HeroSection;
