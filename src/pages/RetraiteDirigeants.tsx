import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const RetraiteDirigeants = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="bg-hero pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Retraite des dirigeants : ne laissez pas votre niveau de vie chuter
        </motion.h1>
        <motion.div className="divider-gold mb-6" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 0.2, duration: 0.6 }} />
        <motion.p className="text-muted-foreground text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Sans action, votre retraite sera 2 à 3 fois inférieure à vos revenus actuels. Découvrez les dispositifs qui permettent de combler cet écart — tout en réduisant vos impôts.
        </motion.p>
      </div>
    </div>

    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-5">Pourquoi votre retraite sera bien inférieure à vos attentes</h2>
          <div className="space-y-4">
            {[
              "Taux de remplacement de 30 à 45 % seulement — contre 60 à 75 % pour un salarié cadre",
              "Les cotisations TNS sont plus faibles, donc vos droits à la retraite aussi",
              "Départ avant 67 ans ? Attention à la décote qui réduit encore votre pension",
              "Pas d'épargne salariale (PEE, intéressement) pour compenser comme les salariés",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-5">Les dispositifs pour rattraper l'écart et réduire vos impôts</h2>
          <div className="space-y-4">
            {[
              "PER individuel : déduisez vos versements de votre revenu imposable et constituez un capital retraite",
              "Contrat Madelin : une retraite complémentaire avec des cotisations 100 % déductibles",
              "Assurance vie : un complément de revenus flexible, avec une fiscalité avantageuse après 8 ans",
              "Stratégie de rémunération optimisée : le bon équilibre entre salaire, dividendes et épargne retraite",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-card border border-border mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-copper" />
              <span className="text-sm text-foreground font-medium">2 500+ dirigeants accompagnés dans leur stratégie retraite</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-copper" />
              <span className="text-sm text-foreground font-medium">Conseil personnalisé — un interlocuteur dédié à votre dossier</span>
            </div>
          </div>
        </div>

        <div className="bg-hero rounded-lg p-10 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">Évaluez votre situation retraite</h3>
          <p className="text-muted-foreground text-sm mb-6">Obtenez votre score retraite et un plan d'action personnalisé.</p>
          <Link to="/simulateur">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
              Découvrir ma stratégie retraite <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default RetraiteDirigeants;
