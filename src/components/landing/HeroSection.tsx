import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Shield } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-with-logo.jpg";

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden overflow-x-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(10,40%,8%)]/85 via-[hsl(15,30%,12%)]/50 to-transparent/10" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 md:py-32">
      <div className="flex items-center gap-12">
        {/* Left: text content */}
        <div className="max-w-2xl flex-1 min-w-0">
          <div className="mb-8" />

          <motion.h1
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
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
            <p className="text-base md:text-xl text-white/90 font-heading">
              Chaque année, des milliers de dirigeants et indépendants paient trop d'impôts, sous-estiment leur baisse de revenus à la retraite et laissent leur famille sans protection. Nous vous aidons à inverser la tendance.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white text-sm sm:text-base gap-2 font-medium px-4 sm:px-8 border-0 group shadow-lg shadow-copper/30 whitespace-normal h-auto py-3 text-left w-full">
                Découvrir ce que je toucherai vraiment à la retraite
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:+33XXXXXXXXX">
              <Button size="lg" variant="outline" className="border-copper/50 !text-white hover:bg-copper/10 text-sm sm:text-base gap-2 font-medium px-4 sm:px-8 bg-white/5 backdrop-blur-sm w-full">
                <Phone className="w-4 h-4" />
                Être rappelé gratuitement
              </Button>
            </a>
          </motion.div>

          <motion.ul
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              "Anticipez votre retraite : découvrez ce que vous toucherez vraiment",
              "Réduisez vos impôts dès cette année grâce au PER",
              "Protégez votre famille et vos revenus en cas d'imprévu",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: circular gauge badge */}
        <motion.div
          className="hidden lg:flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120, damping: 14 }}
        >
          <div className="relative w-52 h-52 flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-copper/20" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-copper/60"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            />

            {/* Inner content */}
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <div className="w-14 h-14 rounded-full bg-copper/15 flex items-center justify-center">
                <Shield className="w-7 h-7 text-copper" />
              </div>
              <span className="text-xl font-bold text-white font-heading">Bilan offert</span>
              <span className="text-xs text-copper font-semibold uppercase tracking-widest">Sans engagement</span>
            </div>
          </div>

          {/* Labels below */}
          <div className="mt-4 flex flex-col items-center gap-1.5 text-center">
            {["Confidentiel", "Résultat immédiat"].map((label) => (
              <span key={label} className="text-sm text-white/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-copper" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    {/* Decorative copper line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-mahogany via-copper to-gold/50" />
  </section>
);

export default HeroSection;
