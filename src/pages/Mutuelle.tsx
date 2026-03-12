import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Heart } from "lucide-react";

const Mutuelle = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Mutuelle freelance & indépendant : le guide pour bien choisir
        </h1>
        <p className="text-muted-foreground mb-8">
          En tant que travailleur non salarié, vous ne bénéficiez pas d'une mutuelle d'entreprise. Choisir la bonne complémentaire santé est essentiel pour maîtriser vos frais médicaux.
        </p>

        <div className="bg-card rounded-xl p-6 shadow-card mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Pourquoi souscrire une mutuelle TNS ?</h2>
          <div className="space-y-3">
            {[
              "Remboursements limités du régime obligatoire (SSI / CPAM)",
              "Restes à charge élevés en dentaire, optique et hospitalisation",
              "Cotisations déductibles du revenu imposable (loi Madelin)",
              "Couverture personnalisable selon votre profil et vos besoins",
              "Protection étendue à votre conjoint et vos enfants",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-card mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Les postes clés à vérifier</h2>
          <div className="space-y-3">
            {[
              "Hospitalisation : chambre particulière, dépassements d'honoraires",
              "Optique : montures + verres progressifs, lentilles",
              "Dentaire : couronnes, implants, orthodontie adulte",
              "Médecine douce : ostéopathie, acupuncture, psychologue",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-card mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Avantage fiscal Madelin</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Les cotisations de mutuelle Madelin sont déductibles de votre bénéfice imposable, dans la limite de 3,75 % du revenu + 7 % du PASS.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-heading text-2xl font-bold text-primary">1 800 €</div>
              <div className="text-xs text-muted-foreground">Cotisation annuelle moyenne</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-heading text-2xl font-bold text-accent">540 €</div>
              <div className="text-xs text-muted-foreground">Économie d'impôt (TMI 30%)</div>
            </div>
          </div>
        </div>

        <div className="bg-hero rounded-2xl p-8 text-center">
          <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">Comparez les mutuelles TNS</h3>
          <p className="text-primary-foreground/70 text-sm mb-6">Notre audit inclut une analyse de votre couverture santé et des recommandations personnalisées.</p>
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

export default Mutuelle;
