import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const PERIndependants = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          PER pour les indépendants : le guide complet
        </h1>
        <p className="text-muted-foreground mb-8">
          Le Plan d'Épargne Retraite est l'outil incontournable pour les freelances, consultants et professions libérales qui souhaitent réduire leurs impôts tout en préparant leur retraite.
        </p>

        <div className="bg-card rounded-xl p-6 shadow-card mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Pourquoi le PER est idéal pour les indépendants ?</h2>
          <div className="space-y-3">
            {[
              "Déduction fiscale des versements de votre revenu imposable",
              "Jusqu'à 10% de vos revenus déductibles (plafond ~35 000 €)",
              "Cumul possible avec les plafonds non utilisés des 3 années précédentes",
              "Sortie en capital ou en rente au moment de la retraite",
              "Déblocage anticipé pour l'achat de la résidence principale",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-card mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Exemple concret</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Un consultant IT freelance avec 90 000 € de revenus annuels, dans la tranche à 30% :
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-heading text-2xl font-bold text-primary">9 000 €</div>
              <div className="text-xs text-muted-foreground">Versement PER annuel</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-heading text-2xl font-bold text-accent">2 700 €</div>
              <div className="text-xs text-muted-foreground">Économie d'impôt</div>
            </div>
          </div>
        </div>

        <div className="bg-hero rounded-2xl p-8 text-center">
          <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">Simulez votre économie fiscale</h3>
          <p className="text-primary-foreground/70 text-sm mb-6">Découvrez en 2 minutes combien vous pouvez économiser avec un PER.</p>
          <Link to="/simulateur">
            <Button size="lg" variant="secondary" className="gap-2 font-semibold">
              Faire mon bilan gratuit <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default PERIndependants;
