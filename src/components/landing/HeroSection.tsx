import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-with-logo.jpg";

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(10,40%,8%)]/85 via-[hsl(15,30%,12%)]/50 to-transparent/10" />
    </div>

    <div className="container mx-auto px-4 relative z-10 py-32">
      <div className="max-w-2xl">
        <div className="mb-8" />

        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Chaque année, des milliers d'euros vous échappent.
          <span className="block text-gradient-gold mt-2">La question est : combien dans votre cas ?</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/75 mb-10 max-w-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          En 2 minutes, identifiez vos marges d'optimisation et préparez votre retraite efficacement.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4 mb-4"
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
        </motion.div>

        <motion.p
          className="text-sm text-white/50 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          100 % gratuit • sans engagement • résultat immédiat
        </motion.p>
      </div>
    </div>

    {/* Decorative copper line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-mahogany via-copper to-gold/50" />
  </section>
);

export default HeroSection;
