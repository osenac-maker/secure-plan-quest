import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SimulatorData, SimulatorResult, sendLeadToMake } from "@/lib/scoring";
import { Checkbox } from "@/components/ui/checkbox";
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
  AlertTriangle,
  Calendar,
} from "lucide-react";

const Results = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<SimulatorData | null>(null);
  const [results, setResults] = useState<SimulatorResult | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [callbackConsent, setCallbackConsent] = useState(false);
  const [requestPending, setRequestPending] = useState(false);
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    const d = sessionStorage.getItem("simulatorData");
    const r = sessionStorage.getItem("simulatorResults");
    if (!d || !r) { navigate("/simulateur"); return; }
    setData(JSON.parse(d));
    setResults(JSON.parse(r));
  }, [navigate]);

  if (!results || !data) return null;

  const anneesAvantRetraite = Math.max(1, 65 - data.age);
  const investissementMensuel = Math.round(results.versementPEROptimal / 12);

  // Prénom saisi par l'utilisateur, avec une majuscule initiale propre
  // (repli sur le premier mot du nom si le prénom est absent, par sécurité)
  const rawPrenom = ((data.prenom || data.nom || "").trim().split(/\s+/)[0]) || "";
  const prenomCapitalized = rawPrenom
    ? rawPrenom.charAt(0).toUpperCase() + rawPrenom.slice(1).toLowerCase()
    : "Bonjour";

  const scoreColor =
    results.scoreRetraite < 30
      ? { stroke: "hsl(var(--destructive))", text: "text-destructive", bg: "bg-destructive/10" }
      : results.scoreRetraite < 60
      ? { stroke: "hsl(var(--copper))", text: "text-copper", bg: "bg-copper/10" }
      : { stroke: "hsl(var(--accent))", text: "text-accent", bg: "bg-accent/10" };

  const scoreLabel =
    results.scoreRetraite < 30 ? "Critique" :
    results.scoreRetraite < 60 ? "À améliorer" : "Satisfaisant";

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
          <motion.div className="text-center mb-10" {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 bg-copper/10 text-copper rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
              <TrendingUp className="w-3.5 h-3.5" />
              Résultat de votre simulation
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              {prenomCapitalized}, voici{" "}
              <span className="text-gradient-gold">
                votre bilan{" "}
                {data.status === "dirigeant" ? "de dirigeant"
                  : data.status === "liberal" ? "de profession libérale"
                  : data.status === "freelance" ? "d'indépendant"
                  : "personnalisé"}
              </span>
            </h1>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Estimations pédagogiques à faire vérifier, et non une recommandation signée par un conseiller.
            </p>
          </motion.div>

          {/* ── Alerte retraite + Score ── */}
          <motion.div
            className="bg-card rounded-2xl p-7 shadow-card mb-6 border border-border"
            {...fadeUp(0.1)}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Gauge */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                    <circle cx="64" cy="64" r="54" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                    <motion.circle
                      cx="64" cy="64" r="54"
                      fill="none"
                      stroke={scoreColor.stroke}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 54}
                      initial={{ strokeDashoffset: 2 * Math.PI * 54 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 54 * (1 - results.scoreRetraite / 100) }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`font-heading text-3xl font-extrabold ${scoreColor.text}`}>
                      {results.scoreRetraite}
                    </span>
                    <span className="text-xs text-muted-foreground">/100</span>
                  </div>
                </div>
                <span className={`mt-2 text-xs font-semibold px-2.5 py-1 rounded-full ${scoreColor.bg} ${scoreColor.text}`}>
                  {scoreLabel}
                </span>
              </div>

              {/* Alerte retraite */}
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-medium">
                  Votre retraite estimée
                </p>
                <div className="flex items-end gap-3 mb-3">
                  <span className="font-heading text-4xl font-extrabold text-destructive">
                    {results.retraiteEstimee.toLocaleString("fr-FR")} €
                  </span>
                  <span className="text-sm text-muted-foreground mb-1">/mois</span>
                </div>
                <div className="flex items-center gap-2 bg-destructive/5 border border-destructive/20 rounded-lg px-3 py-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Soit{" "}
                    <strong className="text-destructive">
                      {Math.round((1 - results.retraiteEstimee / (data.revenu / 12)) * 100)}% de revenus en moins
                    </strong>{" "}
                    par rapport à votre situation actuelle
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {results.scoreRetraite < 30
                    ? "Votre préparation retraite nécessite une action rapide. Un accompagnement adapté peut faire toute la différence."
                    : results.scoreRetraite < 60
                    ? "Vous avez posé quelques bases, mais il reste un potentiel d'optimisation significatif."
                    : "Vous êtes sur la bonne voie. Quelques ajustements pourraient encore améliorer votre situation."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── 3 Key Metrics ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <motion.div className="bg-card rounded-2xl p-6 shadow-card text-center border border-border" {...fadeUp(0.15)}>
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3">
                <Wallet className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Économie fiscale</p>
              <p className="font-heading text-3xl font-extrabold text-green-600">
                {results.economiesFiscales.toLocaleString("fr-FR")} €
              </p>
              <p className="text-xs text-muted-foreground mt-1">par an</p>
              <p className="text-[10px] text-muted-foreground/50 mt-1">Basé sur le barème TMI 2024</p>
            </motion.div>

            <motion.div className="bg-card rounded-2xl p-6 shadow-card text-center border border-border" {...fadeUp(0.2)}>
              <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-3">
                <PiggyBank className="w-5 h-5 text-copper" />
              </div>
              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Capital retraite</p>
              <p className="font-heading text-3xl font-extrabold text-copper">
                {results.capitalRetraite.toLocaleString("fr-FR")} €
              </p>
              <p className="text-xs text-muted-foreground mt-1">dans {anneesAvantRetraite} ans</p>
            </motion.div>

            <motion.div className="bg-card rounded-2xl p-6 shadow-card text-center border border-border" {...fadeUp(0.25)}>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Effort mensuel</p>
              <p className="font-heading text-3xl font-extrabold text-foreground">
                {investissementMensuel.toLocaleString("fr-FR")} €
              </p>
              <p className="text-xs text-muted-foreground mt-1">par mois</p>
            </motion.div>
          </div>

          {/* ── Interprétation ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card mb-6 border border-border" {...fadeUp(0.3)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              Ce que cela signifie concrètement
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                En investissant{" "}
                <strong className="text-foreground">{investissementMensuel.toLocaleString("fr-FR")} €/mois</strong>{" "}
                dans un PER adapté à votre statut, vous récupérez{" "}
                <strong className="text-green-600">{results.economiesFiscales.toLocaleString("fr-FR")} € d'impôts chaque année</strong>{" "}
                tout en construisant un capital de{" "}
                <strong className="text-copper">{results.capitalRetraite.toLocaleString("fr-FR")} €</strong>{" "}
                pour votre retraite.
              </p>
              <p>
                Votre régime fiscal, vos droits acquis et vos besoins de liquidité doivent être vérifiés avant de décider si un dispositif est pertinent pour vous.
              </p>
            </div>

            <p className="text-xs text-muted-foreground mt-4">Hypothèses du simulateur existant : barème fiscal 2024, pension forfaitaire par statut, départ à 65 ans, rendement théorique de 4 % hors frais, fiscalité de sortie et inflation. Le plafond fiscal réel des indépendants doit être recalculé avec votre régime et vos données fiscales ; ces montants ne sont pas une estimation officielle.</p>

            {results.recommandations.length > 0 && (
              <div className="mt-5 pt-5 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-3">Pistes à examiner avec un conseiller, sans recommandation personnalisée à ce stade :</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {results.recommandations.map((r) => (
                    <div key={r} className="flex items-center gap-2.5 bg-muted/40 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-foreground">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* ── Urgence ── */}
          <motion.div
            className="rounded-xl p-4 mb-6 flex items-start gap-3 bg-amber-50 border border-amber-200"
            {...fadeUp(0.35)}
          >
            <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
            <p className="text-sm text-amber-800">
              Les versements PER sont déductibles des revenus de l'année où ils sont effectués, dans les limites applicables. La déduction et la fiscalité à la sortie doivent être étudiées ensemble.
            </p>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div
            className="bg-hero rounded-2xl p-8 md:p-10 mb-8 border border-border"
            {...fadeUp(0.4)}
          >
            <div className="text-center mb-6">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                Recevez votre stratégie personnalisée
              </h2>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Un expert analysera vos résultats et vous proposera un plan d'action
                sur-mesure, adapté à votre situation.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                className="text-center py-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Demande envoyée !</h3>
                <p className="text-muted-foreground text-sm">
                  Votre demande de rappel a été transmise. Aucun délai de prise de contact n'est garanti ici.
                </p>
              </motion.div>
            ) : (
              <div className="max-w-md mx-auto text-center space-y-4">
                <div className="bg-card rounded-lg p-4 border border-border text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{`${data.prenom ?? ""} ${data.nom ?? ""}`.trim()}</p>
                  <p className="mt-0.5">{data.email}{data.telephone ? ` · ${data.telephone}` : ""}</p>
                </div>
                <label className="flex items-start gap-3 text-left text-sm text-foreground cursor-pointer"><Checkbox checked={callbackConsent} onCheckedChange={(checked) => setCallbackConsent(checked === true)} className="mt-0.5" /><span>Je souhaite être rappelé par un conseiller</span></label>
                {!data.telephone && <p className="text-xs text-muted-foreground">Pour demander un rappel, renseignez votre téléphone dans le simulateur.</p>}
                {requestError && <p role="alert" className="text-sm text-destructive">{requestError}</p>}
                <Button
                  size="lg"
                  disabled={!callbackConsent || !data.telephone || requestPending}
                  onClick={async () => {
                    if (!callbackConsent || !data.telephone || requestPending) return;
                    setRequestPending(true);
                    setRequestError("");
                    const updated = { ...data, souhaiteRappel: true, consentementDate: new Date().toISOString() };
                    try {
                      await sendLeadToMake(updated, results);
                      sessionStorage.setItem("simulatorData", JSON.stringify(updated));
                      setData(updated);
                      setFormSubmitted(true);
                    } catch {
                      setRequestError("Votre demande n'a pas été transmise. Veuillez réessayer.");
                    } finally {
                      setRequestPending(false);
                    }
                  }}
                  className="w-full bg-copper hover:bg-copper-light text-white border-0 gap-2 font-semibold shadow-lg shadow-copper/20 h-13 text-base"
                >
                  <Phone className="w-4 h-4" />
                  Être rappelé par un conseiller
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-muted-foreground">
                  Coordonnées incorrectes ?{" "}
                  <Button variant="link" onClick={() => navigate("/simulateur")} className="text-copper h-auto p-0">Modifier</Button>
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-7 pt-6 border-t border-border/50">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-copper" />Analyse 100% gratuite
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Phone className="w-3.5 h-3.5 text-copper" />Sans engagement
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Lock className="w-3.5 h-3.5 text-copper" />Données confidentielles
              </span>
            </div>
          </motion.div>


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
