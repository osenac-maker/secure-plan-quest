import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SimulatorData, SimulatorResult } from "@/lib/scoring";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Calendar, CheckCircle, ArrowRight } from "lucide-react";

const Results = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<SimulatorData | null>(null);
  const [results, setResults] = useState<SimulatorResult | null>(null);

  useEffect(() => {
    const d = sessionStorage.getItem("simulatorData");
    const r = sessionStorage.getItem("simulatorResults");
    if (!d || !r) { navigate("/simulateur"); return; }
    setData(JSON.parse(d));
    setResults(JSON.parse(r));
  }, [navigate]);

  if (!results || !data) return null;

  const scoreColor = results.scoreRetraite < 30 ? "text-destructive" : results.scoreRetraite < 60 ? "text-warning" : "text-accent";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center mb-10">
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                Votre bilan retraite & fiscal
              </h1>
              <p className="text-muted-foreground">Résultats personnalisés pour {data.nom}</p>
            </div>

            {/* Score */}
            <div className="bg-card rounded-2xl p-8 shadow-card mb-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-36 h-36 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke={results.scoreRetraite < 30 ? "hsl(var(--destructive))" : results.scoreRetraite < 60 ? "hsl(var(--warning))" : "hsl(var(--accent))"}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${results.scoreRetraite * 2.64} 264`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`font-heading text-3xl font-extrabold ${scoreColor}`}>{results.scoreRetraite}</span>
                    <span className="text-xs text-muted-foreground">/100</span>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-2">Score préparation retraite</h2>
                  <p className="text-muted-foreground text-sm">
                    {results.scoreRetraite < 30
                      ? "Votre préparation retraite nécessite une attention urgente. Un accompagnement personnalisé peut transformer votre situation."
                      : results.scoreRetraite < 60
                      ? "Vous avez commencé à préparer votre retraite mais il reste des optimisations importantes à réaliser."
                      : "Bonne préparation ! Quelques ajustements peuvent encore améliorer votre situation."}
                  </p>
                </div>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-card rounded-xl p-6 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <span className="font-heading font-semibold text-foreground">Manque à gagner retraite</span>
                </div>
                <div className="font-heading text-3xl font-extrabold text-destructive">
                  {results.manqueAGagner.toLocaleString("fr-FR")} €
                </div>
                <p className="text-xs text-muted-foreground mt-1">par an, estimé sur la base de vos droits actuels</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="font-heading font-semibold text-foreground">Économies fiscales possibles</span>
                </div>
                <div className="font-heading text-3xl font-extrabold text-accent">
                  {results.economiesFiscales.toLocaleString("fr-FR")} €
                </div>
                <p className="text-xs text-muted-foreground mt-1">par an, via un Plan d'Épargne Retraite (PER)</p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-card rounded-xl p-6 shadow-card mb-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">Solutions recommandées</h3>
              <div className="space-y-3">
                {results.recommandations.map((r) => (
                  <div key={r} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-hero rounded-2xl p-8 text-center">
              <Calendar className="w-10 h-10 text-copper mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Prenez rendez-vous avec un conseiller
              </h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Un expert patrimonial dédié analysera votre situation en détail et vous proposera un plan d'action personnalisé. Gratuit et sans engagement.
              </p>
              <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 font-semibold">
                  Découvrir ma stratégie retraite
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
