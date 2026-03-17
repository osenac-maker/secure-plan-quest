import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
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
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white text-base gap-2 font-medium px-8 border-0 group shadow-lg shadow-copper/30">
              Faire mon bilan retraite gratuit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/simulateur">
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base gap-2 font-medium px-8">
              Estimer mes économies d'impôts
            </Button>
          </Link>
        </motion.div>

        <motion.p
          className="text-sm text-white/50 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          100 % gratuit • sans engagement • résultat immédiat
        </motion.p>

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
    </div>

    {/* Decorative copper line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-mahogany via-copper to-gold/50" />
  </section>
);

export default HeroSection;
