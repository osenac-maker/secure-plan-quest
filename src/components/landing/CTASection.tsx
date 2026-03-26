import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import sectionRetirement from "@/assets/section-retirement.jpg";

const CTASection = () => (
  <section className="relative py-28 overflow-hidden">
    {/* Background image with warm overlay */}
    <div className="absolute inset-0">
      <img src={sectionRetirement} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(10,40%,10%)]/85 via-[hsl(15,30%,15%)]/60 to-[hsl(20,20%,15%)]/50" />
    </div>

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Moins d'impôts, plus de retraite, une famille protégée
      </motion.h2>
      <motion.div
        className="divider-gold mx-auto mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
      <motion.p
        className="text-white/70 max-w-xl mx-auto mb-10 text-lg"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        En 2 minutes, découvrez combien vous pouvez économiser, ce que sera vraiment votre retraite et si votre famille est bien protégée. C'est gratuit, confidentiel et sans engagement.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Link to="/simulateur">
          <Button size="lg" className="bg-copper hover:bg-copper-light text-white text-base gap-2 font-medium px-10 border-0 group shadow-lg shadow-copper/30">
            Découvrir ce que je toucherai vraiment à la retraite
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        <motion.p
          className="mt-6 flex items-center justify-center gap-2 text-copper/90 text-sm font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Clock className="w-4 h-4" />
          Vos versements PER sont déductibles jusqu'au 31 décembre — chaque mois compte.
        </motion.p>
    </div>
  </section>
);

export default CTASection;
