import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const RetraiteDirigeants = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Retraite des dirigeants : anticiper pour mieux vivre
        </h1>
        <p className="text-muted-foreground mb-8">
          En tant que dirigeant de PME, votre retraite obligatoire ne couvrira qu'une fraction de vos revenus actuels. Découvrez les stratégies pour combler cet écart.
        </p>

        <div className="bg-card rounded-xl p-6 shadow-card mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Le problème des dirigeants</h2>
          <div className="space-y-3">
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

        <div className="bg-card rounded-xl p-6 shadow-card mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Les solutions</h2>
          <div className="space-y-3">
            {[
              "PER individuel avec déduction fiscale à l'entrée",
              "Contrat Madelin pour la prévoyance et la retraite complémentaire",
              "Assurance vie pour la constitution d'un capital retraite flexible",
              "Stratégie de rémunération mixte (salaire + dividendes) optimisée",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-hero rounded-2xl p-8 text-center">
          <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">Évaluez votre situation retraite</h3>
          <p className="text-primary-foreground/70 text-sm mb-6">Obtenez votre score retraite et un plan d'action personnalisé.</p>
          <Link to="/simulateur">
            <Button size="lg" variant="secondary" className="gap-2 font-semibold">
              Commencer l'audit gratuit <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default RetraiteDirigeants;
