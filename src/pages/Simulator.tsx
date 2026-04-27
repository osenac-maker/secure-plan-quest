import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, ArrowLeft, CheckCircle, Shield, Clock, Lock, Users, TrendingUp, Award, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SimulatorData, calculateResults, sendLeadToAirtable } from "@/lib/scoring";

const steps = [
  { title: "Votre profil", subtitle: "Quelques informations de base pour estimer votre retraite", benefit: "Nous adaptons nos calculs à votre statut et votre tranche d'imposition" },
  { title: "Votre situation", subtitle: "Ces données nous aident à affiner votre projection", benefit: "Votre situation familiale impacte directement vos droits et avantages fiscaux" },
  { title: "Votre épargne", subtitle: "Pour calculer vos économies fiscales potentielles", benefit: "Nous identifions les leviers pour optimiser votre effort d'épargne" },
  { title: "Vos coordonnées", subtitle: "Recevez votre bilan personnalisé complet", benefit: "" },
];

const statusOptions = [
  { value: "freelance", label: "Freelance / Micro-entrepreneur", icon: "💻" },
  { value: "dirigeant", label: "Dirigeant de société", icon: "🏢" },
  { value: "liberal", label: "Profession libérale", icon: "⚕️" },
  { value: "salarie", label: "Salarié cadre", icon: "👔" },
];

const Simulator = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [data, setData] = useState<Partial<SimulatorData>>({
    age: 42,
    status: "",
    revenu: 80000,
    situationFamiliale: "celibataire",
    enfants: 0,
    patrimoineExistant: 0,
    epargneRetraite: 0,
    capaciteEpargne: 500,
    priorite: undefined as any,
    email: "",
    nom: "",
    telephone: "",
  });

  const update = (field: keyof SimulatorData, value: string | number) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  const validatePhone = (phone: string) => !phone || /^(?:(?:\+33|0)\s?[1-9])(?:[\s.-]?\d{2}){4}$/.test(phone.replace(/\s/g, ''));

  const next = () => {
    if (step === 3) {
      const newErrors: Record<string, string> = {};
      if (!data.nom?.trim()) newErrors.nom = "Le nom est requis";
      if (!data.email || !validateEmail(data.email)) newErrors.email = "Veuillez saisir un email valide";
      if (data.telephone && !validatePhone(data.telephone)) newErrors.telephone = "Format invalide (ex: 06 12 34 56 78)";
      if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    }
    if (step < steps.length - 1) setStep(step + 1);
    else submit();
  };

  const submit = () => {
    setIsSubmitting(true);
    const results = calculateResults(data as SimulatorData);
    sendLeadToAirtable(data as SimulatorData, results);
    sessionStorage.setItem("simulatorData", JSON.stringify(data));
    sessionStorage.setItem("simulatorResults", JSON.stringify(results));
    // Anticipation delay before showing results
    setTimeout(() => {
      navigate("/resultats");
    }, 2200);
  };

  const canNext = () => {
    if (step === 0) return data.status && data.age && data.revenu;
    if (step === 3) return data.email && data.nom;
    return true;
  };

  const progressPercent = ((step + 1) / steps.length) * 100;

  // Submitting / anticipation screen
  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              className="bg-card rounded-2xl p-12 shadow-card border border-border text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6 rounded-full border-4 border-muted border-t-copper"
              />
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Analyse en cours…
              </h2>
              <div className="space-y-3 max-w-sm mx-auto">
                {[
                  { text: "Calcul de votre pension estimée", delay: 0 },
                  { text: "Évaluation de vos économies fiscales", delay: 0.6 },
                  { text: "Génération de vos recommandations", delay: 1.2 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay, duration: 0.4 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: item.delay + 0.3, duration: 0.3 }}
                    >
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </motion.div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-16">
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
                  Découvrez combien vous perdez <br className="hidden md:block" />
                  <span className="text-gradient-gold">chaque année en impôts</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-4">
                  En 2 minutes, obtenez votre projection retraite personnalisée, vos économies fiscales potentielles et un plan d'action concret pour protéger votre famille.
                </p>
                <div className="bg-card border border-border rounded-xl p-4 max-w-lg mx-auto mb-6">
                  <p className="text-sm font-medium text-foreground mb-2">Votre bilan gratuit comprend :</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-accent" />
                      Économies fiscales
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-copper" />
                      Projection retraite
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-copper" />
                      Protection famille
                    </span>
                  </div>
                </div>
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
              <p className="text-muted-foreground text-sm mb-6">{steps[step].subtitle}</p>

              {/* Contextual benefit hint */}
              {steps[step].benefit && (
                <div className="flex items-start gap-2 bg-copper/5 border border-copper/15 rounded-lg p-3 mb-6">
                  <Sparkles className="w-4 h-4 text-copper mt-0.5 shrink-0" />
                  <p className="text-xs text-muted-foreground">{steps[step].benefit}</p>
                </div>
              )}

              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-foreground">Quel est votre statut professionnel ?</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      {statusOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => update("status", opt.value)}
                          className={`p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center gap-3 ${
                            data.status === opt.value
                              ? "border-copper bg-copper/5 text-foreground ring-1 ring-copper/30"
                              : "border-border text-muted-foreground hover:border-copper/50"
                          }`}
                        >
                          <span className="text-lg">{opt.icon}</span>
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
                    <Label className="text-foreground">Patrimoine existant estimé</Label>
                    <Select
                      value={String(data.patrimoineExistant)}
                      onValueChange={(v) => update("patrimoineExistant", parseInt(v))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Sélectionnez une fourchette" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25000">0 à 50 000 €</SelectItem>
                        <SelectItem value="75000">50 000 à 100 000 €</SelectItem>
                        <SelectItem value="150000">100 000 à 200 000 €</SelectItem>
                        <SelectItem value="350000">200 000 à 500 000 €</SelectItem>
                        <SelectItem value="500000">Plus de 500 000 €</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <Label className="text-foreground">Quel est votre objectif prioritaire ?</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      {[
                        { value: "impots", label: "Réduire mes impôts" },
                        { value: "retraite", label: "Préparer ma retraite" },
                        { value: "protection", label: "Protéger ma famille" },
                        { value: "transmission", label: "Transmettre mon patrimoine" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => update("priorite", opt.value)}
                          className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                            data.priorite === opt.value
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
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-5 mb-2 text-center">
                    <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="text-base text-foreground font-bold mb-1">Votre analyse personnalisée est prête.</p>
                    <p className="text-sm text-muted-foreground">Indiquez vos coordonnées pour la recevoir.</p>
                  </div>
                  <div>
                    <Label className="text-foreground">Nom complet</Label>
                    <Input
                      value={data.nom}
                      onChange={(e) => update("nom", e.target.value)}
                      className={`mt-2 ${errors.nom ? 'border-destructive' : ''}`}
                      placeholder="Jean Dupont"
                    />
                    {errors.nom && <p className="text-xs text-destructive mt-1">{errors.nom}</p>}
                  </div>
                  <div>
                    <Label className="text-foreground">Email professionnel</Label>
                    <Input
                      type="email"
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={`mt-2 ${errors.email ? 'border-destructive' : ''}`}
                      placeholder="jean@example.com"
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Label className="text-foreground">Téléphone (optionnel)</Label>
                    <Input
                      type="tel"
                      value={data.telephone}
                      onChange={(e) => update("telephone", e.target.value)}
                      className={`mt-2 ${errors.telephone ? 'border-destructive' : ''}`}
                      placeholder="06 12 34 56 78"
                    />
                    {errors.telephone && <p className="text-xs text-destructive mt-1">{errors.telephone}</p>}
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Lock className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>Vos données sont protégées et ne seront jamais partagées. Aucun démarchage commercial. Conforme RGPD.</span>
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
                  {step === steps.length - 1 ? (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Découvrir mes résultats
                    </>
                  ) : (
                    <>
                      Continuer
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
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

          {/* Social proof — always visible */}
          <motion.div
            className="mt-8 bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-copper" />
              <span className="text-xs text-muted-foreground"><strong className="text-foreground">2 400+</strong> bilans réalisés</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-copper" />
              <span className="text-xs text-muted-foreground"><strong className="text-foreground">15 ans</strong> d'expertise retraite</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-copper text-xs">★</span>
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

export default Simulator;
