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
          Prévoyance indépendants : protégez vos revenus et votre famille
        </motion.h1>
        <motion.div className="divider-gold mb-6" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 0.2, duration: 0.6 }} />
        <motion.p className="text-muted-foreground text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          En cas d'arrêt de travail, d'invalidité ou de décès, le régime obligatoire couvre rarement plus de 50 % de vos revenus. La prévoyance complémentaire comble cette lacune — avec des cotisations déductibles de votre revenu imposable.
        </motion.p>
      </div>
    </div>

    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-5">Ce que la prévoyance vous garantit concrètement</h2>
          <div className="space-y-4">
            {[
              "Indemnités journalières : maintien de vos revenus pendant un arrêt maladie ou accident",
              "Capital décès : une somme versée à votre conjoint et vos enfants pour assurer leur sécurité financière",
              "Rente d'invalidité : un revenu garanti si vous ne pouvez plus exercer votre activité",
              "Maintien de salaire complémentaire : couverture des franchises du régime obligatoire",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-5">Pourquoi le régime obligatoire ne suffit pas</h2>
          <div className="space-y-4">
            {[
              "Indemnités RSI/SSI très limitées : souvent moins de 50 % de vos revenus réels",
              "Franchise de 3 à 90 jours sans aucun revenu — un gouffre financier pour un indépendant",
              "Aucune couverture en cas d'invalidité partielle dans la plupart des régimes obligatoires",
              "Bonne nouvelle : les cotisations prévoyance Madelin sont 100 % déductibles de votre revenu imposable",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-card border border-border mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-copper" />
              <span className="text-sm text-foreground font-medium">Spécialiste prévoyance depuis 15 ans</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-copper" />
              <span className="text-sm text-foreground font-medium">Partenaires assureurs de premier plan</span>
            </div>
          </div>
        </div>

        <div className="bg-hero rounded-lg p-10 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">Votre famille est-elle vraiment protégée ?</h3>
          <p className="text-muted-foreground text-sm mb-6">Notre bilan gratuit évalue vos lacunes de couverture et vous recommande les garanties adaptées à votre situation familiale et professionnelle.</p>
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
