import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const MidCTASection = () => (
  <section className="py-16 bg-hero">
    <div className="container mx-auto px-4 text-center">
      <motion.h3
        className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Impôts, retraite, protection : <span className="text-gradient-gold">où en êtes-vous ?</span>
      </motion.h3>
      <motion.p
        className="text-muted-foreground mb-8 max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Notre simulateur gratuit estime votre retraite, calcule vos économies d'impôts possibles et évalue votre niveau de protection. Résultats immédiats, sans engagement.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Link to="/simulateur">
          <Button size="lg" className="bg-copper hover:bg-copper-light text-white text-base gap-2 font-medium px-10 border-0 group shadow-lg shadow-copper/30">
            Faire mon bilan retraite gratuit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default MidCTASection;
