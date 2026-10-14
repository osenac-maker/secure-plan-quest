import BilanButton from "@/components/BilanButton";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-with-logo.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85svh] md:min-h-[min(85svh,850px)] flex items-center overflow-hidden overflow-x-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Dirigeant indépendant préparant sa retraite" className="w-full h-full object-cover" />
      {/* Voile horizontal : très sombre à gauche (zone de texte), s'éclaircit vers la droite */}
      <div className="absolute inset-0 hero-overlay" />
      {/* Voile vertical doux pour ancrer le bas de section */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(10,40%,6%)]/60 via-transparent to-[hsl(10,40%,6%)]/30" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-32 pb-10 md:pt-36 md:pb-16">
      <div className="flex items-center gap-12">
        {/* Left: text content */}
        <div className="max-w-2xl flex-1 min-w-0 lg:bg-[hsl(10,40%,6%)]/30 lg:backdrop-blur-sm lg:rounded-2xl lg:p-8 lg:-ml-4">
          

          <motion.h1
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
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
            <p className="text-base md:text-xl text-primary-foreground/90 font-heading">
              Votre entreprise est assurée. Et vous ? En 2 minutes, découvrez votre retraite estimée et l'impôt que vous pouvez économiser.
            </p>
          </motion.div>

          <motion.div className="flex flex-col items-start gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}>
            <BilanButton />
            <a href={`https://wa.me/33622828844?text=${encodeURIComponent("Bonjour, je souhaite être rappelé pour un bilan retraite.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 underline underline-offset-4 hover:text-copper">
              <Phone className="w-3.5 h-3.5" /> Être rappelé
            </a>
          </motion.div>
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
                className="text-4xl font-bold text-primary-foreground font-heading"
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
              <span className="text-sm font-medium text-primary-foreground/80 font-heading">Bilan offert</span>
            </div>
          </div>

          {/* Labels below */}
          <div className="mt-4 flex flex-col items-center gap-1.5 text-center">
            {["Sans engagement", "Confidentiel", "Résultat immédiat"].map((label) => (
              <span key={label} className="text-sm text-primary-foreground/60 flex items-center gap-2">
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
