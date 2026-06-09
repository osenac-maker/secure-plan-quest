import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Shield } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-with-logo.jpg";

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden overflow-x-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Dirigeant indépendant préparant sa retraite" className="w-full h-full object-cover" />
      {/* Voile horizontal : très sombre à gauche (zone de texte), s'éclaircit vers la droite */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(10,45%,6%)]/97 via-[hsl(12,35%,9%)]/90 via-50% to-[hsl(15,30%,12%)]/40" />
      {/* Voile vertical doux pour ancrer le bas de section */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(10,40%,6%)]/60 via-transparent to-[hsl(10,40%,6%)]/30" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 md:py-32">
      <div className="flex items-center gap-12">
        {/* Left: text content */}
        <div className="max-w-2xl flex-1 min-w-0 lg:bg-[hsl(10,40%,6%)]/30 lg:backdrop-blur-sm lg:rounded-2xl lg:p-8 lg:-ml-4">
          <div className="mb-8" />

          <motion.h1
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Dirigeants et indépendants,
            <span className="block text-gradient-gold mt-2">sécurisez votre retraite dès aujourd'hui.</span>
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
            <a
              href={`https://wa.me/33622828844?text=${encodeURIComponent("Bonjour, je souhaite être rappelé gratuitement pour un bilan retraite.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-copper/50 !text-white hover:bg-copper/10 text-sm sm:text-base gap-2 font-medium px-4 sm:px-8 bg-white/5 backdrop-blur-sm w-full">
                <Phone className="w-4 h-4" />
                Être rappelé via WhatsApp
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

        {/* Right: gauge counter */}
        <motion.div
          className="hidden lg:flex flex-col items-center bg-[hsl(10,40%,6%)]/45 backdrop-blur-sm rounded-2xl px-6 py-8"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120, damping: 14 }}
        >
          <div className="relative w-52 h-52 flex items-center justify-center">
            {/* Background ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(25, 65%, 45%)" />
                  <stop offset="100%" stopColor="hsl(40, 80%, 55%)" />
                </linearGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="hsl(25, 65%, 45%)"
                strokeWidth="6"
                opacity="0.15"
              />
              <motion.circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="url(#gaugeGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 88}
                initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 88 * 0.25 }}
                transition={{ duration: 1.8, delay: 0.7, ease: "easeOut" }}
              />
            </svg>

            {/* Ticks */}
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * 360;
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-0.5 h-2 bg-copper/30 origin-bottom"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-76px)`,
                    }}
                  />
                );
              })}
            </div>

            {/* Inner content */}
            <div className="flex flex-col items-center justify-center text-center gap-1 z-10">
              <motion.span
                className="text-4xl font-bold text-white font-heading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  100
                </motion.span>
                <span className="text-copper">%</span>
              </motion.span>
              <span className="text-sm font-medium text-white/80 font-heading">Bilan offert</span>
            </div>
          </div>

          {/* Labels below */}
          <div className="mt-4 flex flex-col items-center gap-1.5 text-center">
            {["Sans engagement", "Confidentiel", "Résultat immédiat"].map((label) => (
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
