import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,40%,8%)/0.85] via-[hsl(215,40%,10%)/0.7] to-[hsl(215,40%,10%)/0.4]" />
    </div>

    <div className="container mx-auto px-4 relative z-10 py-32">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Faire de votre patrimoine
            <span className="block text-gradient-gold mt-2">un projet de vie</span>
          </h1>
        </motion.div>

        <motion.div
          className="border-l-2 border-copper pl-6 mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl text-white/70 italic font-heading">
            Découvrez dès maintenant vos axes d'optimisation patrimoniale et fiscale.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/simulateur">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white text-base gap-2 font-medium px-8 border-0 group">
              Faire mon bilan gratuit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/simulateur">
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-8">
              Prendre rendez-vous
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Bottom decorative line */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />
  </section>
);

export default HeroSection;
