import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Award, ShieldCheck, AlertTriangle,
  TrendingDown, PiggyBank, Wallet, BarChart3, ChevronDown, Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const tauxRemplacement = [
  { statut: "Salarié cadre", taux: 62, color: "bg-green-400" },
  { statut: "Freelance / Micro", taux: 35, color: "bg-red-400" },
  { statut: "Dirigeant TNS", taux: 38, color: "bg-red-400" },
  { statut: "Profession libérale", taux: 30, color: "bg-red-500" },
];

const dispositifs = [
  {
    nom: "PER Individuel",
    desc: "Le plus puissant fiscalement. Versements déductibles du revenu imposable. Sortie en capital possible à la retraite.",
    avantage: "Jusqu'à 35 194 € déductibles / an",
    icon: Wallet,
    tag: "Recommandé",
    tagColor: "text-green-600 bg-green-50",
  },
  {
    nom: "Assurance vie",
    desc: "Complément de revenus flexible. Fiscalité avantageuse après 8 ans. Outil de transmission du patrimoine.",
    avantage: "Abattement 4 600 € / an après 8 ans",
    icon: PiggyBank,
    tag: "Complémentaire",
    tagColor: "text-copper bg-copper/10",
  },
  {
    nom: "PER d'entreprise",
    desc: "Remplace l'Article 83 et le PERCO depuis 2020. Cotisations déductibles des charges de l'entreprise. Abondement possible.",
    avantage: "Charges déductibles à l'IS",
    icon: BarChart3,
    tag: "PERO / PERECO",
    tagColor: "text-blue-600 bg-blue-50",
  },
  {
    nom: "Optimisation rémunération",
    desc: "Équilibre optimal entre salaire, dividendes et épargne retraite selon votre statut juridique.",
    avantage: "Réduction cotisations + impôts",
    icon: TrendingDown,
    tag: "Stratégie globale",
    tagColor: "text-purple-600 bg-purple-50",
  },
];

const faqs = [
  {
    q: "À quel âge faut-il commencer à préparer sa retraite ?",
    a: "Le plus tôt possible — mais il n'est jamais trop tard. À 40 ans, un versement mensuel de 500 € sur un PER peut générer un capital de 200 000 € à 65 ans (hypothèse 4 % / an). À 50 ans, le même effort produit ~90 000 €. L'effet des intérêts composés est décisif.",
  },
  {
    q: "Quelle est la différence entre la retraite d'un TNS et d'un salarié ?",
    a: "Un salarié cadre touchera environ 60-70 % de son dernier salaire. Un TNS (freelance, dirigeant, libéral) ne touchera que 30 à 38 % de ses revenus moyens. L'écart est structurel : les cotisations obligatoires des TNS sont plus faibles, donc les droits constitués aussi.",
  },
  {
    q: "Peut-on encore rattraper son retard à 50 ans ?",
    a: "Oui, grâce au report des plafonds PER non utilisés des 3 dernières années. Un dirigeant de 50 ans avec 200 000 € de revenus peut déduire jusqu'à 35 194 € par an — voire davantage avec le rattrapage. 15 ans de capitalisation à 4 % peuvent générer un capital significatif.",
  },
  {
    q: "Assurance vie ou PER : que choisir ?",
    a: "Les deux sont complémentaires. Le PER est optimal pour la déduction fiscale immédiate — idéal si vous êtes à 30 % ou plus de TMI. L'assurance vie est plus flexible (pas de blocage jusqu'à la retraite) et meilleure pour la transmission. Nous combinons généralement les deux selon votre situation.",
  },
  {
    q: "Mon régime obligatoire (CIPAV, SSI...) suffit-il ?",
    a: "Non. Les régimes obligatoires des indépendants (SSI pour les TNS, CIPAV pour les libéraux) offrent une couverture très partielle. Ils représentent en moyenne 30 à 40 % des revenus — très insuffisant pour maintenir votre niveau de vie. Un complément privé est indispensable.",
  },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-foreground">{q}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="text-sm text-muted-foreground pb-4 leading-relaxed">{a}</p>}
    </div>
  );
};

const RetraiteDirigeants = () => {
  useSEO({
    title: "Retraite des dirigeants et indépendants : ne laissez pas votre niveau de vie chuter — RETIRO",
    description: "Taux de remplacement de 30 à 38 % pour les TNS. Découvrez les dispositifs pour combler l'écart et réduire vos impôts : PER, assurance vie, optimisation rémunération.",
    canonical: "https://secure-plan-quest.vercel.app/retraite-dirigeants",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <div className="bg-hero pt-32 pb-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.p
            className="text-copper font-semibold text-xs tracking-widest uppercase mb-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            Retraite · Dirigeants &amp; Indépendants
          </motion.p>
          <motion.h1
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Retraite des dirigeants :{" "}
            <span className="text-gradient-gold">ne laissez pas votre niveau de vie chuter</span>
          </motion.h1>
          <motion.div
            className="divider-gold mb-6"
            initial={{ width: 0 }} animate={{ width: 60 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mb-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sans action, votre retraite sera 2 à 3 fois inférieure à vos revenus actuels.
            Découvrez les dispositifs qui permettent de combler cet écart — tout en réduisant vos impôts dès aujourd'hui.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
                Estimer ma retraite réelle
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {["Taux de remplacement 30-38 % seulement", "Régimes SSI / CIPAV insuffisants", "Rattrapage possible jusqu'à 65 ans"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">

          {/* ── Alerte choc ── */}
          <motion.div
            className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-5"
            {...fadeUp(0)}
          >
            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-800">
              <strong>En France, un dirigeant indépendant touche en moyenne 35 % de ses revenus à la retraite.</strong>{" "}
              Pour 8 000 € de revenus mensuels actuels, cela représente seulement{" "}
              <strong>2 800 € de pension</strong> — soit une chute de 5 200 € par mois. Sans préparation, cet écart est irréversible.
            </p>
          </motion.div>

          {/* ── Comparatif taux de remplacement ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.05)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Votre taux de remplacement selon votre statut
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Le taux de remplacement mesure le % de vos revenus que vous toucherez à la retraite. Pour les indépendants, il est dramatiquement bas.
            </p>
            <div className="space-y-4">
              {tauxRemplacement.map((t) => (
                <div key={t.statut}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-foreground font-medium">{t.statut}</span>
                    <span className={`text-sm font-bold ${t.taux >= 55 ? "text-green-600" : "text-red-500"}`}>
                      {t.taux} %
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${t.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.taux}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/60 mt-4">
              * Estimations moyennes. Source : DREES, rapports SSI / CIPAV 2023.
            </p>
          </motion.div>

          {/* ── Pourquoi l'écart ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.1)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-5">
              Pourquoi votre retraite sera bien inférieure à vos attentes
            </h2>
            <div className="space-y-3">
              {[
                "Les cotisations retraite des TNS sont structurellement plus faibles que celles des salariés",
                "Départ avant 67 ans : décote qui réduit encore la pension de base",
                "Pas de retraite complémentaire obligatoire AGIRC-ARRCO comme les salariés cadres",
                "Régimes CIPAV et SSI : droits constitués faibles, malgré des années de cotisation",
                "Revenus variables : les années creuses impactent directement les droits futurs",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-muted/40 rounded-lg px-3 py-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── 4 dispositifs ── */}
          <motion.div {...fadeUp(0.15)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Les dispositifs pour combler l'écart — et réduire vos impôts
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Il existe plusieurs leviers complémentaires. Leur combinaison optimale dépend de votre statut, vos revenus et votre horizon de retraite.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dispositifs.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.nom} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-copper" />
                        </div>
                        <h3 className="font-semibold text-foreground text-sm">{d.nom}</h3>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${d.tagColor}`}>
                        {d.tag}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{d.desc}</p>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      <span className="text-xs font-medium text-green-600">{d.avantage}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Exemple chiffré ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.2)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Exemple concret : dirigeant, 45 ans, 120 000 € de revenus
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Voici ce qu'un plan d'action complet peut générer sur 20 ans.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Retraite sans action", value: "3 800 €/mois", sub: "Taux de remplacement 38 %", color: "text-red-500" },
                { label: "Versement PER annuel", value: "12 000 €", sub: "Plafond 10 % des revenus", color: "text-copper" },
                { label: "Économie fiscale", value: "4 920 €/an", sub: "TMI à 41 %", color: "text-green-600" },
                { label: "Capital à 65 ans", value: "~380 000 €", sub: "Hypothèse 4 % / an", color: "text-copper" },
              ].map((item) => (
                <div key={item.label} className="bg-muted/40 rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-2 leading-tight">{item.label}</p>
                  <p className={`font-heading text-xl font-bold ${item.color}`}>{item.value}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── FAQ ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.25)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">Questions fréquentes</h2>
            <p className="text-sm text-muted-foreground mb-5">Tout ce que vous devez savoir sur la retraite des indépendants.</p>
            <div>
              {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </motion.div>

          {/* ── Trust ── */}
          <motion.div
            className="bg-card rounded-xl p-5 border border-border flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
            {...fadeUp(0.3)}
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-copper flex-shrink-0" />
              <span className="text-sm text-foreground font-medium">2 500+ dirigeants accompagnés dans leur stratégie retraite</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-copper flex-shrink-0" />
              <span className="text-sm text-foreground font-medium">Conseil personnalisé — un interlocuteur dédié</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs text-muted-foreground ml-1.5">4.9/5</span>
            </div>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div
            className="bg-hero rounded-2xl p-10 text-center border border-border"
            {...fadeUp(0.35)}
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
              Quel sera vraiment le montant de votre retraite ?
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Notre simulateur calcule votre pension prévisionnelle en 2 minutes et vous montre
              combien vous pouvez gagner en activant les bons dispositifs.
            </p>
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
                Découvrir ma stratégie retraite
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground mt-4">Gratuit · Sans engagement · Résultat en 2 minutes</p>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RetraiteDirigeants;
