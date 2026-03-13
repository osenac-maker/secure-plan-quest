import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const PERIndependants = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="bg-hero pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          PER pour les indépendants
        </motion.h1>
        <motion.div className="divider-gold mb-6" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 0.2, duration: 0.6 }} />
        <motion.p className="text-muted-foreground text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Le guide complet pour réduire vos impôts tout en préparant votre retraite.
        </motion.p>
      </div>
    </div>

    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-5">Pourquoi le PER est idéal pour les indépendants ?</h2>
          <div className="space-y-4">
            {[
              "Déduction fiscale des versements de votre revenu imposable",
              "Jusqu'à 10% de vos revenus déductibles (plafond ~35 000 €)",
              "Cumul possible avec les plafonds non utilisés des 3 années précédentes",
              "Sortie en capital ou en rente au moment de la retraite",
              "Déblocage anticipé pour l'achat de la résidence principale",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Exemple concret</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Un consultant IT freelance avec 90 000 € de revenus annuels, dans la tranche à 30% :
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary rounded-lg p-5 text-center">
              <div className="font-heading text-2xl font-bold text-copper">9 000 €</div>
              <div className="text-xs text-muted-foreground mt-1">Versement PER annuel</div>
            </div>
            <div className="bg-secondary rounded-lg p-5 text-center">
              <div className="font-heading text-2xl font-bold text-teal">2 700 €</div>
              <div className="text-xs text-muted-foreground mt-1">Économie d'impôt</div>
            </div>
          </div>
        </div>

        <div className="bg-hero rounded-lg p-10 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">Simulez votre économie fiscale</h3>
          <p className="text-muted-foreground text-sm mb-6">Découvrez en 2 minutes combien vous pouvez économiser avec un PER.</p>
          <Link to="/simulateur">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
              Estimer mes économies d'impôts <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default PERIndependants;
