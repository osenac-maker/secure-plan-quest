import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SimulatorData, SimulatorResult } from "@/lib/scoring";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Wallet,
  PiggyBank,
  ArrowRight,
  Shield,
  Phone,
  Lock,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

const Results = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<SimulatorData | null>(null);
  const [results, setResults] = useState<SimulatorResult | null>(null);

  // Lead form state
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const d = sessionStorage.getItem("simulatorData");
    const r = sessionStorage.getItem("simulatorResults");
    if (!d || !r) {
      navigate("/simulateur");
      return;
    }
    setData(JSON.parse(d));
    setResults(JSON.parse(r));
  }, [navigate]);

  if (!results || !data) return null;

  // Capitalisation composée : versement mensuel à 4%/an sur N années
  const anneeAvantRetraite = Math.max(1, 65 - data.age);
  const investissementMensuel = Math.round((data.revenu * 0.1) / 12);
  const tauxMensuel = 0.04 / 12;
  const nMois = anneeAvantRetraite * 12;
  const capitalRetraite = Math.round(
    investissementMensuel * ((Math.pow(1 + tauxMensuel, nMois) - 1) / tauxMensuel)
  );



  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-36 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* ── Headline ── */}
          <motion.div className="text-center mb-12" {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-5">
              <TrendingUp className="w-4 h-4" />
              Résultat de votre simulation
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              {data.nom.split(' ')[0]}, voici{" "}
              <span className="text-gradient-gold">votre bilan {data.status === "dirigeant" ? "de dirigeant" : data.status === "liberal" ? "de profession libérale" : data.status === "freelance" ? "d'indépendant" : "personnalisé"}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              D'après vos informations, vous pourriez réduire significativement
              vos impôts chaque année tout en constituant un capital retraite
              conséquent.
            </p>
          </motion.div>

          {/* ── Score Retraite Gauge ── */}
          <motion.div
            className="bg-card rounded-2xl p-8 shadow-card mb-10 flex flex-col items-center"
            {...fadeUp(0.1)}
          >
            <p className="text-sm text-muted-foreground mb-4 font-medium">Votre score de préparation retraite</p>
            <div className="relative w-40 h-40 mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="70" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                <motion.circle
                  cx="80" cy="80" r="70"
                  fill="none"
                  stroke={results.scoreRetraite < 30 ? "hsl(var(--destructive))" : results.scoreRetraite < 60 ? "hsl(var(--copper))" : "hsl(var(--accent))"}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 70}
                  initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 70 * (1 - results.scoreRetraite / 100) }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-heading text-4xl font-extrabold text-foreground">{results.scoreRetraite}</span>
                <span className="text-xs text-muted-foreground font-medium">/100</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-sm">
              {results.scoreRetraite < 30
                ? "Votre préparation retraite nécessite une action rapide. Un accompagnement adapté peut faire toute la différence."
                : results.scoreRetraite < 60
                ? "Vous avez posé quelques bases, mais il reste un potentiel d'optimisation significatif."
                : "Vous êtes sur la bonne voie. Quelques ajustements pourraient encore améliorer votre situation."}
            </p>
          </motion.div>

          {/* ── 3 Key Metrics ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {/* Tax savings */}
            <motion.div
              className="bg-card rounded-2xl p-6 shadow-card text-center"
              {...fadeUp(0.15)}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Économie d'impôts estimée
              </p>
              <p className="font-heading text-4xl font-extrabold text-accent">
                {results.economiesFiscales.toLocaleString("fr-FR")}&nbsp;€
              </p>
              <p className="text-xs text-muted-foreground mt-1">par an</p>
              <p className="text-[10px] text-muted-foreground/60 mt-0.5">Estimation basée sur le barème en vigueur</p>
            </motion.div>

            {/* Retirement capital */}
            <motion.div
              className="bg-card rounded-2xl p-6 shadow-card text-center"
              {...fadeUp(0.25)}
            >
              <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="w-6 h-6 text-copper" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Capital retraite potentiel
              </p>
              <p className="font-heading text-4xl font-extrabold text-copper">
                {capitalRetraite.toLocaleString("fr-FR")}&nbsp;€
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                sur {anneeAvantRetraite} ans
              </p>
            </motion.div>

            {/* Monthly investment */}
            <motion.div
              className="bg-card rounded-2xl p-6 shadow-card text-center"
              {...fadeUp(0.35)}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Investissement mensuel conseillé
              </p>
              <p className="font-heading text-4xl font-extrabold text-foreground">
                {investissementMensuel.toLocaleString("fr-FR")}&nbsp;€
              </p>
              <p className="text-xs text-muted-foreground mt-1">par mois</p>
            </motion.div>
          </div>

          {/* ── Interpretation ── */}
          <motion.div
            className="bg-card rounded-2xl p-8 shadow-card mb-10"
            {...fadeUp(0.45)}
          >
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              Ce que cela signifie concrètement
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                En investissant{" "}
                <strong className="text-foreground">
                  {investissementMensuel.toLocaleString("fr-FR")} € par mois
                </strong>{" "}
                dans un PER adapté à votre situation, vous pourriez récupérer{" "}
                <strong className="text-foreground">
                  {results.economiesFiscales.toLocaleString("fr-FR")} € d'impôts
                  chaque année
                </strong>{" "}
                tout en constituant un capital de{" "}
                <strong className="text-foreground">
                  {capitalRetraite.toLocaleString("fr-FR")} €
                </strong>{" "}
                pour votre retraite.
              </p>
              <p>
                La majorité des dirigeants et indépendants ne profitent pas
                pleinement des dispositifs existants. Il est très probable que
                votre situation actuelle laisse une marge d'optimisation
                significative, tant sur le plan fiscal que patrimonial.
              </p>
            </div>

            {/* Recommendations */}
            {results.recommandations.length > 0 && (
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Solutions recommandées :
                </p>
                <div className="space-y-2">
                  {results.recommandations.map((r) => (
                    <div key={r} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* ── Lead Confirmation ── */}
          <motion.div
            className="bg-hero rounded-2xl p-8 md:p-10 mb-10"
            {...fadeUp(0.55)}
          >
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                Recevez votre stratégie personnalisée
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Un expert analysera vos résultats et vous proposera un plan
                d'action sur-mesure, adapté à votre situation.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                className="text-center py-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Demande envoyée !
                </h3>
                <p className="text-muted-foreground text-sm">
                  Un conseiller vous contactera sous 24h pour échanger sur votre
                  stratégie.
                </p>
              </motion.div>
            ) : (
              <div className="max-w-md mx-auto text-center space-y-5">
                <div className="bg-card rounded-lg p-4 border border-border text-sm text-muted-foreground space-y-1">
                  <p><span className="text-foreground font-medium">{data.nom}</span></p>
                  <p>{data.email}{data.telephone ? ` · ${data.telephone}` : ''}</p>
                </div>
                <Button
                  size="lg"
                  onClick={() => {
                    sessionStorage.setItem(
                      "leadData",
                      JSON.stringify({ name: data.nom, email: data.email, phone: data.telephone })
                    );
                    setFormSubmitted(true);
                  }}
                  className="w-full bg-copper hover:bg-copper-light text-white border-0 gap-2 font-semibold shadow-lg shadow-copper/20 h-12"
                >
                  Être rappelé par un conseiller
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-muted-foreground">
                  Coordonnées incorrectes ? <button onClick={() => navigate("/simulateur")} className="text-copper underline underline-offset-2 hover:text-copper-light">Modifier</button>
                </p>
              </div>
            )}

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-border/50">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-copper" />
                Analyse 100 % gratuite
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Phone className="w-3.5 h-3.5 text-copper" />
                Sans engagement
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Lock className="w-3.5 h-3.5 text-copper" />
                Données confidentielles
              </span>
            </div>
          </motion.div>

          {/* ── Opportunity nudge ── */}
          <motion.div
            className="bg-copper/5 border border-copper/20 rounded-xl p-5 mb-10 flex items-start gap-3"
            {...fadeUp(0.65)}
          >
            <ChevronRight className="w-5 h-5 text-copper mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">
                Ne laissez pas ces économies vous échapper.
              </strong>{" "}
              Chaque année sans optimisation, c'est{" "}
              <strong className="text-foreground">
                {results.economiesFiscales.toLocaleString("fr-FR")} €
              </strong>{" "}
              de réductions d'impôts non utilisées et un capital retraite qui ne
              travaille pas pour vous.
            </p>
          </motion.div>

          {/* ── Trust bar ── */}
          <motion.div
            className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            {...fadeUp(0.75)}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                <strong className="text-foreground">2 400+</strong> bilans
                réalisés
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                <strong className="text-foreground">15 ans</strong> d'expertise
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                Courtier{" "}
                <strong className="text-foreground">indépendant</strong>
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-copper text-xs">
                  ★
                </span>
              ))}
              <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
