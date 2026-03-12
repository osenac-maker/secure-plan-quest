import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";

const Prevoyance = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Prévoyance entrepreneur : protégez votre activité et votre famille
        </h1>
        <p className="text-muted-foreground mb-8">
          En tant qu'indépendant, un arrêt de travail peut avoir des conséquences financières dramatiques. La prévoyance est votre filet de sécurité.
        </p>

        <div className="bg-card rounded-xl p-6 shadow-card mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Ce que couvre la prévoyance</h2>
          <div className="space-y-3">
            {[
              "Indemnités journalières en cas d'arrêt de travail ou maladie",
              "Capital décès pour protéger vos proches",
              "Rente d'invalidité pour maintenir vos revenus",
              "Garantie maintien de salaire complémentaire",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-card mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Pourquoi c'est essentiel</h2>
          <div className="space-y-3">
            {[
              "Les indemnités RSI/SSI sont très limitées (souvent < 50% du revenu)",
              "Franchise de 3 à 90 jours selon le régime obligatoire",
              "Aucune protection en cas d'invalidité partielle pour les TNS",
              "Cotisations déductibles fiscalement via le dispositif Madelin",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-hero rounded-2xl p-8 text-center">
          <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">Faites le point sur votre protection</h3>
          <p className="text-primary-foreground/70 text-sm mb-6">Notre audit inclut un bilan complet de votre couverture prévoyance.</p>
          <Link to="/simulateur">
            <Button size="lg" variant="secondary" className="gap-2 font-semibold">
              Bilan gratuit <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Prevoyance;
