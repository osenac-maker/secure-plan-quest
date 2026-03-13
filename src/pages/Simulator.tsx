import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, ArrowLeft, CheckCircle, Shield, Clock, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SimulatorData, calculateResults } from "@/lib/scoring";

const steps = [
  { title: "Votre profil", subtitle: "Quelques informations de base pour estimer votre retraite" },
  { title: "Votre situation", subtitle: "Ces données nous aident à affiner votre projection" },
  { title: "Votre épargne", subtitle: "Pour calculer vos économies fiscales potentielles" },
  { title: "Vos coordonnées", subtitle: "Pour recevoir votre bilan personnalisé par email" },
];

const statusOptions = [
  { value: "freelance", label: "Freelance / Micro-entrepreneur" },
  { value: "dirigeant", label: "Dirigeant de société" },
  { value: "liberal", label: "Profession libérale" },
  { value: "salarie", label: "Salarié cadre" },
];

const Simulator = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<SimulatorData>>({
    age: 42,
    status: "",
    revenu: 80000,
    situationFamiliale: "celibataire",
    enfants: 0,
    patrimoineExistant: 0,
    epargneRetraite: 0,
    capaciteEpargne: 500,
    interetFiscal: "moyen",
    email: "",
    nom: "",
    telephone: "",
  });

  const update = (field: keyof SimulatorData, value: string | number) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else submit();
  };

  const submit = () => {
    const results = calculateResults(data as SimulatorData);
    sessionStorage.setItem("simulatorData", JSON.stringify(data));
    sessionStorage.setItem("simulatorResults", JSON.stringify(results));
    navigate("/resultats");
  };

  const canNext = () => {
    if (step === 0) return data.status && data.age && data.revenu;
    if (step === 3) return data.email && data.nom;
    return true;
  };

  const progressPercent = ((step + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">

          {/* Introduction — visible only on step 0 */}
          <AnimatePresence>
            {step === 0 && (
              <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Votre bilan retraite <span className="text-gradient-gold">gratuit</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-6">
                  En 2 minutes, découvrez combien vous toucherez à la retraite, combien vous pouvez économiser en impôts et si votre famille est bien protégée.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-copper" />
                    2 minutes chrono
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-copper" />
                    Sans engagement
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-copper" />
                    Données confidentielles
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    i < step
                      ? "bg-accent text-accent-foreground"
                      : i === step
                      ? "bg-copper text-white shadow-md shadow-copper/30"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className={`hidden sm:inline text-xs font-medium transition-colors ${
                    i === step ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-copper to-gold rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-right">
              Étape {step + 1} sur {steps.length}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-1">{steps[step].title}</h2>
              <p className="text-muted-foreground text-sm mb-8">{steps[step].subtitle}</p>

              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-foreground">Quel est votre statut professionnel ?</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      {statusOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => update("status", opt.value)}
                          className={`p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                            data.status === opt.value
                              ? "border-copper bg-copper/5 text-foreground ring-1 ring-copper/30"
                              : "border-border text-muted-foreground hover:border-copper/50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-foreground">Votre âge</Label>
                    <Input
                      type="number"
                      value={data.age}
                      onChange={(e) => update("age", parseInt(e.target.value) || 0)}
                      className="mt-2"
                      min={18}
                      max={70}
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Revenus annuels bruts (€)</Label>
                    <Input
                      type="number"
                      value={data.revenu}
                      onChange={(e) => update("revenu", parseInt(e.target.value) || 0)}
                      className="mt-2"
                      min={0}
                      step={5000}
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-foreground">Situation familiale</Label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {["celibataire", "marie", "pacse", "divorce"].map((s) => (
                        <button
                          key={s}
                          onClick={() => update("situationFamiliale", s)}
                          className={`p-3 rounded-xl border text-sm font-medium capitalize transition-all ${
                            data.situationFamiliale === s
                              ? "border-copper bg-copper/5 text-foreground ring-1 ring-copper/30"
                              : "border-border text-muted-foreground hover:border-copper/50"
                          }`}
                        >
                          {s === "celibataire" ? "Célibataire" : s === "marie" ? "Marié(e)" : s === "pacse" ? "Pacsé(e)" : "Divorcé(e)"}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-foreground">Nombre d'enfants</Label>
                    <Input
                      type="number"
                      value={data.enfants}
                      onChange={(e) => update("enfants", parseInt(e.target.value) || 0)}
                      className="mt-2"
                      min={0}
                      max={10}
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Patrimoine existant estimé (€)</Label>
                    <Input
                      type="number"
                      value={data.patrimoineExistant}
                      onChange={(e) => update("patrimoineExistant", parseInt(e.target.value) || 0)}
                      className="mt-2"
                      min={0}
                      step={10000}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-foreground">Épargne retraite actuelle (€)</Label>
                    <Input
                      type="number"
                      value={data.epargneRetraite}
                      onChange={(e) => update("epargneRetraite", parseInt(e.target.value) || 0)}
                      className="mt-2"
                      min={0}
                      step={5000}
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Capacité d'épargne mensuelle (€)</Label>
                    <Input
                      type="number"
                      value={data.capaciteEpargne}
                      onChange={(e) => update("capaciteEpargne", parseInt(e.target.value) || 0)}
                      className="mt-2"
                      min={0}
                      step={100}
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Intérêt pour l'optimisation fiscale</Label>
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      {[
                        { value: "faible", label: "Faible" },
                        { value: "moyen", label: "Moyen" },
                        { value: "fort", label: "Fort" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => update("interetFiscal", opt.value)}
                          className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                            data.interetFiscal === opt.value
                              ? "border-copper bg-copper/5 text-foreground ring-1 ring-copper/30"
                              : "border-border text-muted-foreground hover:border-copper/50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-hero rounded-lg p-4 mb-2">
                    <p className="text-sm text-foreground font-medium mb-1">🎯 Vous y êtes presque !</p>
                    <p className="text-xs text-muted-foreground">Renseignez vos coordonnées pour recevoir votre bilan détaillé avec vos économies fiscales, votre projection retraite et nos recommandations personnalisées.</p>
                  </div>
                  <div>
                    <Label className="text-foreground">Nom complet</Label>
                    <Input
                      value={data.nom}
                      onChange={(e) => update("nom", e.target.value)}
                      className="mt-2"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Email professionnel</Label>
                    <Input
                      type="email"
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="mt-2"
                      placeholder="jean@example.com"
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Téléphone (optionnel)</Label>
                    <Input
                      type="tel"
                      value={data.telephone}
                      onChange={(e) => update("telephone", e.target.value)}
                      className="mt-2"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Lock className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>Vos données sont protégées et ne seront jamais partagées. Un conseiller dédié vous contactera uniquement si vous le souhaitez. Conforme RGPD.</span>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                {step > 0 ? (
                  <Button variant="ghost" onClick={() => setStep(step - 1)} className="gap-2 text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="w-4 h-4" />
                    Retour
                  </Button>
                ) : (
                  <div />
                )}
                <Button
                  onClick={next}
                  disabled={!canNext()}
                  className="gap-2 bg-copper hover:bg-copper-light text-white border-0 font-medium px-8 shadow-md shadow-copper/20"
                >
                  {step === steps.length - 1 ? "Voir mes résultats" : "Continuer"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Reassurance below form */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>✓ 100 % gratuit</span>
            <span>✓ Résultats immédiats</span>
            <span>✓ Sans engagement</span>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Simulator;
