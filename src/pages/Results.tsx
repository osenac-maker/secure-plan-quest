import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SimulatorData, SimulatorResult } from "@/lib/scoring";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Calendar, CheckCircle, ArrowRight, Shield, Phone, Clock, Users, Award } from "lucide-react";

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
                      ? "Votre préparation retraite nécessite une attention urgente. Sans action, vous risquez une baisse de revenus de 50 à 70 % le jour de votre départ."
                      : results.scoreRetraite < 60
                      ? "Vous avez posé les premières bases, mais des leviers fiscaux et patrimoniaux majeurs restent inexploités. Un accompagnement ciblé peut transformer votre situation."
                      : "Bonne préparation ! Quelques optimisations fiscales peuvent encore maximiser votre capital retraite et réduire votre imposition."}
                  </p>
                </div>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <motion.div
                className="bg-card rounded-xl p-6 shadow-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <span className="font-heading font-semibold text-foreground">Manque à gagner retraite</span>
                </div>
                <div className="font-heading text-3xl font-extrabold text-destructive">
                  {results.manqueAGagner.toLocaleString("fr-FR")} €
                </div>
                <p className="text-xs text-muted-foreground mt-1">par an — c'est le revenu que vous ne toucherez pas sans action</p>
              </motion.div>
              <motion.div
                className="bg-card rounded-xl p-6 shadow-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="font-heading font-semibold text-foreground">Économies fiscales possibles</span>
                </div>
                <div className="font-heading text-3xl font-extrabold text-accent">
                  {results.economiesFiscales.toLocaleString("fr-FR")} €
                </div>
                <p className="text-xs text-muted-foreground mt-1">par an — récupérables dès cette année via un PER optimisé</p>
              </motion.div>
            </div>

            {/* Recommendations */}
            <motion.div
              className="bg-card rounded-xl p-6 shadow-card mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-heading font-semibold text-foreground mb-4">Solutions recommandées pour vous</h3>
              <div className="space-y-3">
                {results.recommandations.map((r) => (
                  <div key={r} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{r}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Urgency / next step */}
            <motion.div
              className="bg-copper/5 border border-copper/20 rounded-xl p-5 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-copper mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Pourquoi agir maintenant ?</p>
                  <p className="text-xs text-muted-foreground">Chaque année d'attente, c'est <strong>en moyenne {Math.round(results.economiesFiscales * 0.08).toLocaleString("fr-FR")} € de rendements composés perdus</strong>. Plus vous commencez tôt, plus votre capital retraite sera conséquent — et plus vos économies d'impôts seront importantes.</p>
                </div>
              </div>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              className="bg-hero rounded-2xl p-8 text-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Calendar className="w-10 h-10 text-copper mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Passez à l'action : échangez avec un expert
              </h3>
              <p className="text-muted-foreground text-sm mb-4 max-w-md mx-auto">
                Un conseiller patrimonial dédié analysera votre situation en détail et construira avec vous un plan d'action sur-mesure pour réduire vos impôts et préparer sereinement votre retraite.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-copper" />
                  Gratuit et sans engagement
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-copper" />
                  30 min en visio ou téléphone
                </span>
              </div>
              <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 font-semibold bg-copper hover:bg-copper-light text-white border-0 shadow-md shadow-copper/20 px-10">
                  Réserver mon créneau gratuit
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-copper" />
                <span className="text-xs text-muted-foreground"><strong className="text-foreground">2 400+</strong> bilans réalisés</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-copper" />
                <span className="text-xs text-muted-foreground"><strong className="text-foreground">15 ans</strong> d'expertise</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-copper" />
                <span className="text-xs text-muted-foreground">Courtier <strong className="text-foreground">indépendant</strong></span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-copper text-xs">★</span>
                ))}
                <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
