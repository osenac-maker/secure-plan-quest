import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Shield,
  Clock,
  Lock,
  Users,
  TrendingUp,
  Award,
  Sparkles,
  Briefcase,
  Building2,
  Stethoscope,
  UserCheck,
  Star,
  BadgeEuro,
  HeartHandshake,
  Landmark,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SimulatorData,
  calculateResults,
  sendLeadToAirtable,
} from "@/lib/scoring";

const steps = [
  {
    title: "Votre profil",
    subtitle: "Quelques informations de base pour estimer votre retraite",
    benefit:
      "Nous adaptons nos calculs à votre statut et votre tranche d'imposition",
  },
  {
    title: "Votre situation",
    subtitle: "Ces données nous aident à affiner votre projection",
    benefit:
      "Votre situation familiale impacte directement vos droits et avantages fiscaux",
  },
  {
    title: "Votre épargne",
    subtitle: "Pour calculer vos économies fiscales potentielles",
    benefit:
      "Nous identifions les leviers pour optimiser votre effort d'épargne",
  },
  {
    title: "Vos coordonnées",
    subtitle: "Recevez votre bilan personnalisé complet",
    benefit: "",
  },
];

const statusOptions = [
  {
    value: "freelance",
    label: "Freelance / Micro-entrepreneur",
    icon: Briefcase,
  },
  { value: "dirigeant", label: "Dirigeant de société", icon: Building2 },
  { value: "liberal", label: "Profession libérale", icon: Stethoscope },
  { value: "salarie", label: "Salarié cadre", icon: UserCheck },
];

const prioriteOptions = [
  { value: "impots", label: "Réduire mes impôts", icon: BadgeEuro },
  { value: "retraite", label: "Préparer ma retraite", icon: Landmark },
  { value: "protection", label: "Protéger ma famille", icon: HeartHandshake },
  { value: "transmission", label: "Transmettre mon patrimoine", icon: Award },
];

const situationOptions = [
  { value: "celibataire", label: "Célibataire" },
  { value: "marie", label: "Marié(e)" },
  { value: "pacse", label: "Pacsé(e)" },
  { value: "divorce", label: "Divorcé(e)" },
];

// Slider with live value display
const SliderField = ({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <Label className="text-foreground">{label}</Label>
      <span className="text-sm font-bold text-copper tabular-nums">
        {format(value)}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 rounded-full appearance-none cursor-pointer accent-copper bg-muted"
    />
    <div className="flex justify-between text-xs text-muted-foreground mt-1">
      <span>{format(min)}</span>
      <span>{format(max)}</span>
    </div>
  </div>
);

const formatEur = (v: number) =>
  v >= 1000 ? `${(v / 1000).toFixed(0)} k€` : `${v} €`;
const formatEurFull = (v: number) =>
  v.toLocaleString("fr-FR") + " €";

const Simulator = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [anticipatedSaving, setAnticipatedSaving] = useState(0);
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
    if (errors[field])
      setErrors((prev) => {
        const n = { ...prev };
        delete n[field];
        return n;
      });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  const validatePhone = (phone: string) =>
    !phone ||
    /^(?:(?:\+33|0)\s?[1-9])(?:[\s.-]?\d{2}){4}$/.test(
      phone.replace(/\s/g, "")
    );

  const next = () => {
    if (step === 3) {
      const newErrors: Record<string, string> = {};
      if (!data.nom?.trim()) newErrors.nom = "Le nom est requis";
      if (!data.email || !validateEmail(data.email))
        newErrors.email = "Veuillez saisir un email valide";
      if (data.telephone && !validatePhone(data.telephone))
        newErrors.telephone = "Format invalide (ex: 06 12 34 56 78)";
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }
    if (step < steps.length - 1) setStep(step + 1);
    else submit();
  };

  const submit = () => {
    setIsSubmitting(true);
    const results = calculateResults(data as SimulatorData);
    setAnticipatedSaving(results.economiesFiscales);
    sendLeadToAirtable(data as SimulatorData, results);
    sessionStorage.setItem("simulatorData", JSON.stringify(data));
    sessionStorage.setItem("simulatorResults", JSON.stringify(results));
    setTimeout(() => {
      navigate("/resultats");
    }, 2800);
  };

  const canNext = () => {
    if (step === 0) return data.status && data.age && data.revenu;
    if (step === 3) return data.email && data.nom;
    return true;
  };

  const progressPercent = ((step + 1) / steps.length) * 100;

  // ── Écran d'anticipation ──────────────────────────────────────────────────
  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
          <div className="container mx-auto px-4 max-w-lg text-center">
            <motion.div
              className="bg-card rounded-2xl p-12 shadow-card border border-border"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Spinner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-14 h-14 mx-auto mb-6 rounded-full border-4 border-muted border-t-copper"
              />

              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Analyse en cours…
              </h2>

              {/* Anticipation — économie estimée */}
              {anticipatedSaving > 0 && (
                <motion.div
                  className="my-5 py-4 px-6 rounded-xl bg-copper/5 border border-copper/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-widest">
                    Économie fiscale estimée
                  </p>
                  <p className="font-heading text-3xl font-bold text-copper">
                    {anticipatedSaving.toLocaleString("fr-FR")} €
                    <span className="text-base font-normal text-muted-foreground ml-1">
                      / an
                    </span>
                  </p>
                </motion.div>
              )}

              <div className="space-y-3 max-w-xs mx-auto mt-4">
                {[
                  { text: "Calcul de votre pension estimée", delay: 0 },
                  {
                    text: "Évaluation de vos économies fiscales",
                    delay: 0.6,
                  },
                  {
                    text: "Génération de vos recommandations",
                    delay: 1.2,
                  },
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
                      transition={{
                        delay: item.delay + 0.3,
                        duration: 0.3,
                      }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </motion.div>
                    <span className="text-muted-foreground text-left">
                      {item.text}
                    </span>
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

          {/* Intro — step 0 uniquement */}
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
                  Découvrez combien vous perdez{" "}
                  <br className="hidden md:block" />
                  <span className="text-gradient-gold">
                    chaque année en impôts
                  </span>
                </h1>
                <p className="text-muted-foreground text-base max-w-xl mx-auto mb-5">
                  En 2 minutes, obtenez votre projection retraite
                  personnalisée, vos économies fiscales potentielles et un plan
                  d'action concret.
                </p>
                <div className="bg-card border border-border rounded-xl p-4 max-w-lg mx-auto mb-5">
                  <p className="text-sm font-medium text-foreground mb-3">
                    Votre bilan gratuit comprend :
                  </p>
                  <div className="grid grid-cols-3 gap-3 text-xs text-muted-foreground">
                    <span className="flex flex-col items-center gap-1.5 text-center">
                      <TrendingUp className="w-4 h-4 text-copper" />
                      Économies fiscales
                    </span>
                    <span className="flex flex-col items-center gap-1.5 text-center">
                      <Award className="w-4 h-4 text-copper" />
                      Projection retraite
                    </span>
                    <span className="flex flex-col items-center gap-1.5 text-center">
                      <Shield className="w-4 h-4 text-copper" />
                      Protection famille
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-copper" />2 minutes chrono
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

          {/* Stepper */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      i < step
                        ? "bg-green-500 text-white"
                        : i === step
                        ? "bg-copper text-white shadow-md shadow-copper/30"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                  </div>
                  <span
                    className={`hidden sm:inline text-xs font-medium transition-colors ${
                      i === step ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-copper to-amber-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-right">
              Étape {step + 1} sur {steps.length}
            </p>
          </div>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <div className="mb-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-1">
                  {steps[step].title}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {steps[step].subtitle}
                </p>
              </div>

              {/* Hint discret */}
              {steps[step].benefit && (
                <p className="text-xs text-muted-foreground/80 italic mb-6 pl-3 border-l-2 border-copper/30">
                  {steps[step].benefit}
                </p>
              )}

              {/* ── Étape 0 : Profil ── */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-foreground mb-2 block">
                      Quel est votre statut professionnel ?
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {statusOptions.map((opt) => {
                        const Icon = opt.icon;
                        return (
                          <button
                            key={opt.value}
                            onClick={() => update("status", opt.value)}
                            className={`p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center gap-3 ${
                              data.status === opt.value
                                ? "border-copper bg-copper/5 text-foreground ring-1 ring-copper/30"
                                : "border-border text-muted-foreground hover:border-copper/40 hover:bg-muted/40"
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 flex-shrink-0 ${
                                data.status === opt.value
                                  ? "text-copper"
                                  : "text-muted-foreground"
                              }`}
                            />
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-foreground">Votre âge</Label>
                      <span className="text-sm font-bold text-copper">
                        {data.age} ans
                      </span>
                    </div>
                    <input
                      type="range"
                      min={25}
                      max={65}
                      step={1}
                      value={data.age}
                      onChange={(e) => update("age", Number(e.target.value))}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer accent-copper bg-muted"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>25 ans</span>
                      <span>65 ans</span>
                    </div>
                  </div>

                  <SliderField
                    label="Revenus annuels bruts"
                    value={data.revenu ?? 80000}
                    min={20000}
                    max={500000}
                    step={5000}
                    format={formatEur}
                    onChange={(v) => update("revenu", v)}
                  />
                </div>
              )}

              {/* ── Étape 1 : Situation ── */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-foreground mb-2 block">
                      Situation familiale
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {situationOptions.map((s) => (
                        <button
                          key={s.value}
                          onClick={() =>
                            update("situationFamiliale", s.value)
                          }
                          className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                            data.situationFamiliale === s.value
                              ? "border-copper bg-copper/5 text-foreground ring-1 ring-copper/30"
                              : "border-border text-muted-foreground hover:border-copper/40 hover:bg-muted/40"
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-foreground">
                        Nombre d'enfants
                      </Label>
                      <span className="text-sm font-bold text-copper">
                        {data.enfants}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={6}
                      step={1}
                      value={data.enfants}
                      onChange={(e) =>
                        update("enfants", Number(e.target.value))
                      }
                      className="w-full h-2 rounded-full appearance-none cursor-pointer accent-copper bg-muted"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0</span>
                      <span>6+</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-foreground">
                      Patrimoine existant estimé
                    </Label>
                    <Select
                      value={String(data.patrimoineExistant)}
                      onValueChange={(v) =>
                        update("patrimoineExistant", parseInt(v))
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Sélectionnez une fourchette" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25000">0 à 50 000 €</SelectItem>
                        <SelectItem value="75000">
                          50 000 à 100 000 €
                        </SelectItem>
                        <SelectItem value="150000">
                          100 000 à 200 000 €
                        </SelectItem>
                        <SelectItem value="350000">
                          200 000 à 500 000 €
                        </SelectItem>
                        <SelectItem value="500000">
                          Plus de 500 000 €
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* ── Étape 2 : Épargne ── */}
              {step === 2 && (
                <div className="space-y-6">
                  <SliderField
                    label="Épargne retraite déjà constituée"
                    value={data.epargneRetraite ?? 0}
                    min={0}
                    max={500000}
                    step={5000}
                    format={formatEur}
                    onChange={(v) => update("epargneRetraite", v)}
                  />

                  <SliderField
                    label="Capacité d'épargne mensuelle"
                    value={data.capaciteEpargne ?? 500}
                    min={0}
                    max={5000}
                    step={50}
                    format={(v) => `${v} €/mois`}
                    onChange={(v) => update("capaciteEpargne", v)}
                  />

                  <div>
                    <Label className="text-foreground mb-2 block">
                      Votre objectif prioritaire
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {prioriteOptions.map((opt) => {
                        const Icon = opt.icon;
                        return (
                          <button
                            key={opt.value}
                            onClick={() => update("priorite", opt.value)}
                            className={`p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center gap-3 ${
                              data.priorite === opt.value
                                ? "border-copper bg-copper/5 text-foreground ring-1 ring-copper/30"
                                : "border-border text-muted-foreground hover:border-copper/40 hover:bg-muted/40"
                            }`}
                          >
                            <Icon
                              className={`w-4 h-4 flex-shrink-0 ${
                                data.priorite === opt.value
                                  ? "text-copper"
                                  : "text-muted-foreground"
                              }`}
                            />
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Étape 3 : Coordonnées ── */}
              {step === 3 && (
                <div className="space-y-5">
                  {/* Récapitulatif */}
                  <div className="bg-muted/50 rounded-xl p-4 grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <span className="text-muted-foreground">Statut</span>
                      <p className="font-semibold text-foreground capitalize mt-0.5">
                        {
                          statusOptions.find((s) => s.value === data.status)
                            ?.label
                        }
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Âge</span>
                      <p className="font-semibold text-foreground mt-0.5">
                        {data.age} ans
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">
                        Revenus annuels
                      </span>
                      <p className="font-semibold text-foreground mt-0.5">
                        {formatEurFull(data.revenu ?? 0)}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">
                        Épargne mensuelle
                      </span>
                      <p className="font-semibold text-foreground mt-0.5">
                        {data.capaciteEpargne} €/mois
                      </p>
                    </div>
                  </div>

                  <div className="bg-copper/5 border border-copper/20 rounded-lg px-4 py-3 text-center">
                    <p className="text-sm font-semibold text-foreground">
                      Votre analyse personnalisée est prête.
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Indiquez vos coordonnées pour la recevoir.
                    </p>
                  </div>

                  <div>
                    <Label className="text-foreground">Nom complet</Label>
                    <Input
                      value={data.nom}
                      onChange={(e) => update("nom", e.target.value)}
                      className={`mt-2 ${errors.nom ? "border-destructive" : ""}`}
                      placeholder="Jean Dupont"
                    />
                    {errors.nom && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.nom}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label className="text-foreground">
                      Email professionnel
                    </Label>
                    <Input
                      type="email"
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={`mt-2 ${errors.email ? "border-destructive" : ""}`}
                      placeholder="jean@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label className="text-foreground">
                      Téléphone{" "}
                      <span className="text-muted-foreground font-normal">
                        (optionnel)
                      </span>
                    </Label>
                    <Input
                      type="tel"
                      value={data.telephone}
                      onChange={(e) => update("telephone", e.target.value)}
                      className={`mt-2 ${errors.telephone ? "border-destructive" : ""}`}
                      placeholder="06 12 34 56 78"
                    />
                    {errors.telephone && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.telephone}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start gap-2 text-xs text-muted-foreground pt-1">
                    <Lock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-copper" />
                    <span>
                      Vos données sont protégées et ne seront jamais partagées.
                      Aucun démarchage. Conforme RGPD.
                    </span>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                {step > 0 ? (
                  <Button
                    variant="ghost"
                    onClick={() => setStep(step - 1)}
                    className="gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Retour
                  </Button>
                ) : (
                  <div />
                )}
                <Button
                  onClick={next}
                  disabled={!canNext()}
                  className="gap-2 bg-copper hover:bg-copper-light text-white border-0 font-medium px-8 shadow-md shadow-copper/20 disabled:opacity-40"
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

          {/* Reassurance */}
          <motion.div
            className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>✓ 100 % gratuit</span>
            <span>✓ Résultats immédiats</span>
            <span>✓ Sans engagement</span>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="mt-6 bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-copper" />
              <span className="text-xs text-muted-foreground">
                <strong className="text-foreground">2 400+</strong> bilans
                réalisés
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-copper" />
              <span className="text-xs text-muted-foreground">
                <strong className="text-foreground">15 ans</strong>{" "}
                d'expertise retraite
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                />
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
