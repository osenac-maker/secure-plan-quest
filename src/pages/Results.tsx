import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
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

  // Derived values from existing data (no logic change)
  const anneeAvantRetraite = Math.max(1, 65 - data.age);
  const capitalRetraite = Math.round(
    results.economiesFiscales * anneeAvantRetraite * 1.04
  );
  const investissementMensuel = Math.round(
    (data.revenu * 0.1) / 12
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store lead data in session for potential future use
    sessionStorage.setItem(
      "leadData",
      JSON.stringify({ name: formName, email: formEmail, phone: formPhone })
    );
    setFormSubmitted(true);
  };

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
              Vous avez un{" "}
              <span className="text-gradient-gold">potentiel d'optimisation important</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              D'après vos informations, vous pourriez réduire significativement
              vos impôts chaque année tout en constituant un capital retraite
              conséquent.
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

          {/* ── Lead Capture ── */}
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
              <form
                onSubmit={handleFormSubmit}
                className="max-w-md mx-auto space-y-4"
              >
                <Input
                  placeholder="Votre nom"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                  className="h-12 bg-card border-border"
                />
                <Input
                  type="email"
                  placeholder="Votre email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  required
                  className="h-12 bg-card border-border"
                />
                <Input
                  type="tel"
                  placeholder="Votre téléphone"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  required
                  className="h-12 bg-card border-border"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-copper hover:bg-copper-light text-white border-0 gap-2 font-semibold shadow-lg shadow-copper/20 h-12"
                >
                  Recevoir ma stratégie personnalisée
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
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
