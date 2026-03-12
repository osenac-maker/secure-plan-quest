import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const RetraiteDirigeants = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="bg-hero pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          className="font-heading text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Retraite des dirigeants
        </motion.h1>
        <motion.div className="divider-gold mb-6" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 0.2, duration: 0.6 }} />
        <motion.p className="text-white/60 text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Anticiper pour mieux vivre : les stratégies pour combler l'écart de retraite.
        </motion.p>
      </div>
    </div>

    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-5">Le problème des dirigeants</h2>
          <div className="space-y-4">
            {[
              "Taux de remplacement de seulement 30 à 45% du dernier revenu",
              "Cotisations TNS souvent insuffisantes pour une retraite confortable",
              "Décote importante si départ anticipé avant 67 ans",
              "Absence de dispositifs d'entreprise (intéressement, PEE) pour les TNS",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-5">Les solutions</h2>
          <div className="space-y-4">
            {[
              "PER individuel avec déduction fiscale à l'entrée",
              "Contrat Madelin pour la prévoyance et la retraite complémentaire",
              "Assurance vie pour la constitution d'un capital retraite flexible",
              "Stratégie de rémunération mixte (salaire + dividendes) optimisée",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-hero rounded-lg p-10 text-center">
          <h3 className="font-heading text-xl font-bold text-white mb-2">Évaluez votre situation retraite</h3>
          <p className="text-white/60 text-sm mb-6">Obtenez votre score retraite et un plan d'action personnalisé.</p>
          <Link to="/simulateur">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
              Commencer l'audit gratuit <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default RetraiteDirigeants;
