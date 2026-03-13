import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Prevoyance = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="bg-hero pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Prévoyance entrepreneur
        </motion.h1>
        <motion.div className="divider-gold mb-6" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 0.2, duration: 0.6 }} />
        <motion.p className="text-muted-foreground text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Protégez votre activité et votre famille en cas d'imprévu.
        </motion.p>
      </div>
    </div>

    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-5">Ce que couvre la prévoyance</h2>
          <div className="space-y-4">
            {[
              "Indemnités journalières en cas d'arrêt de travail ou maladie",
              "Capital décès pour protéger vos proches",
              "Rente d'invalidité pour maintenir vos revenus",
              "Garantie maintien de salaire complémentaire",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-5">Pourquoi c'est essentiel</h2>
          <div className="space-y-4">
            {[
              "Les indemnités RSI/SSI sont très limitées (souvent < 50% du revenu)",
              "Franchise de 3 à 90 jours selon le régime obligatoire",
              "Aucune protection en cas d'invalidité partielle pour les TNS",
              "Cotisations déductibles fiscalement via le dispositif Madelin",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-hero rounded-lg p-10 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">Faites le point sur votre protection</h3>
          <p className="text-muted-foreground text-sm mb-6">Notre audit inclut un bilan complet de votre couverture prévoyance.</p>
          <Link to="/simulateur">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
              Faire mon bilan retraite gratuit <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Prevoyance;
