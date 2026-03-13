import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Heart, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Mutuelle = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Hero banner */}
    <div className="bg-hero pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mutuelle TNS : de meilleurs soins, moins d'impôts
        </motion.h1>
        <motion.div
          className="divider-gold mb-6"
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <motion.p
          className="text-muted-foreground text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          En tant que TNS, vos cotisations de mutuelle sont déductibles de votre revenu imposable grâce à la loi Madelin. Vous vous soignez mieux et vous payez moins d'impôts. Voici comment bien choisir.
        </motion.p>
      </div>
    </div>

    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-5">Pourquoi une mutuelle est indispensable pour un indépendant</h2>
          <div className="space-y-4">
            {[
              "Le régime obligatoire (SSI/CPAM) ne rembourse en moyenne que 65 à 70 % de vos frais de santé",
              "Sans mutuelle, vos restes à charge en dentaire, optique et hospitalisation peuvent atteindre plusieurs milliers d'euros",
              "Avec la loi Madelin, vos cotisations sont déductibles : moins d'impôts pour une meilleure couverture",
              "Couverture personnalisable : choisissez les garanties adaptées à votre âge, votre santé et votre famille",
              "Protégez aussi votre conjoint et vos enfants sous le même contrat",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-5">Les postes de santé à surveiller en priorité</h2>
          <div className="space-y-4">
            {[
              "Hospitalisation : vérifiez la prise en charge de la chambre particulière et des dépassements d'honoraires",
              "Optique : couverture des verres progressifs, lentilles et montures de qualité",
              "Dentaire : couronnes, implants et orthodontie adulte — les postes les plus coûteux",
              "Médecine douce : ostéopathie, acupuncture, psychologue — de plus en plus essentiels au quotidien",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">L'avantage fiscal Madelin : payez moins d'impôts en vous soignant mieux</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Vos cotisations de mutuelle Madelin sont déductibles de votre bénéfice imposable, dans la limite de 3,75 % du revenu + 7 % du PASS. Concrètement, l'État finance une partie de votre couverture santé via la réduction d'impôt.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary rounded-lg p-5 text-center">
              <div className="font-heading text-2xl font-bold text-copper">1 800 €</div>
              <div className="text-xs text-muted-foreground mt-1">Cotisation annuelle moyenne</div>
            </div>
            <div className="bg-secondary rounded-lg p-5 text-center">
              <div className="font-heading text-2xl font-bold text-teal">540 €</div>
              <div className="text-xs text-muted-foreground mt-1">Économie d'impôt (TMI 30%)</div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-card border border-border mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-copper" />
              <span className="text-sm text-foreground font-medium">Comparaison objective parmi 6 assureurs partenaires</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-copper" />
              <span className="text-sm text-foreground font-medium">98 % de clients satisfaits — accompagnement personnalisé</span>
            </div>
          </div>
        </div>

        <div className="bg-hero rounded-lg p-10 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">Comparez les mutuelles TNS</h3>
          <p className="text-muted-foreground text-sm mb-6">Notre audit inclut une analyse de votre couverture santé et des recommandations personnalisées.</p>
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

export default Mutuelle;
