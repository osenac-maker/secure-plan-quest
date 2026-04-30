import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Award, ShieldCheck, TrendingDown,
  Wallet, PiggyBank, AlertTriangle, ChevronDown, Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Puis-je verser sur un PER si j'ai déjà un contrat Madelin ?",
    a: "Oui. Le PER individuel remplace le Madelin depuis 2019, mais les anciens contrats Madelin restent valides. Vous pouvez transférer votre Madelin vers un PER pour bénéficier de la sortie en capital — avantage que le Madelin n'offre pas.",
  },
  {
    q: "Que se passe-t-il si je cesse mon activité ?",
    a: "Le PER reste actif même si vous changez de statut. Les fonds sont bloqués jusqu'à la retraite sauf cas de déblocage anticipé (achat résidence principale, invalidité, fin de droits au chômage, décès du conjoint).",
  },
  {
    q: "Comment récupérer mon épargne à la retraite ?",
    a: "Vous pouvez sortir en capital (en une fois ou fractionné), en rente viagère, ou en mix des deux. La sortie en capital est fiscalisée à l'IR sur les versements déductibles, mais les plus-values bénéficient du PFU de 30%.",
  },
  {
    q: "Quel est le meilleur PER pour un indépendant ?",
    a: "Cela dépend de votre profil : horizon de placement, appétit au risque, besoin de flexibilité. En tant que courtier indépendant, nous comparons les PER de Swiss Life, Generali, Spirica, Apicil et Cardif pour vous proposer le contrat le plus adapté.",
  },
  {
    q: "Peut-on dépasser le plafond de déduction ?",
    a: "Non, mais vous pouvez utiliser les plafonds non utilisés des 3 années précédentes (report du disponible fiscal). Pour les couples mariés ou pacsés, les plafonds des deux conjoints sont mutualisables.",
  },
];

const exemples = [
  { revenu: 60000, tmi: 30, versement: 6000, economie: 1800 },
  { revenu: 100000, tmi: 41, versement: 10000, economie: 4100 },
  { revenu: 150000, tmi: 41, versement: 15000, economie: 6150 },
  { revenu: 250000, tmi: 45, versement: 25000, economie: 11250 },
];

const avantages = [
  {
    titre: "Déduction immédiate",
    detail: "Chaque euro versé réduit votre revenu imposable — l'économie fiscale est effective dès l'année du versement.",
    icon: Wallet,
  },
  {
    titre: "Plafond généreux",
    detail: "Jusqu'à 10 % de vos revenus professionnels nets, dans la limite de 35 194 € en 2024 (ou 8 × PASS pour les indépendants).",
    icon: TrendingDown,
  },
  {
    titre: "Rattrapage sur 3 ans",
    detail: "Les plafonds non utilisés des 3 dernières années sont reportables. Un versement exceptionnel peut effacer des années d'impôts non optimisés.",
    icon: PiggyBank,
  },
  {
    titre: "Sortie flexible",
    detail: "Contrairement au Madelin, le PER permet une sortie en capital à la retraite. Vous récupérez votre épargne en une fois ou progressivement.",
    icon: CheckCircle,
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
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-sm text-muted-foreground pb-4 leading-relaxed">{a}</p>
      )}
    </div>
  );
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const PERIndependants = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* ── Hero ── */}
    <div className="bg-hero pt-32 pb-16 border-b border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.p
          className="text-copper font-semibold text-xs tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
          Plan d'Épargne Retraite · TNS &amp; Indépendants
        </motion.p>
        <motion.h1
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        >
          PER Indépendants :{" "}
          <span className="text-gradient-gold">réduisez vos impôts</span>{" "}
          en préparant votre retraite
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
          Le PER individuel est le dispositif fiscal le plus puissant pour les freelances,
          dirigeants et professions libérales. Chaque euro versé réduit immédiatement votre
          impôt tout en constituant un capital retraite.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/simulateur">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
              Calculer mon économie fiscale
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap gap-4 mt-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {["Déduction fiscale immédiate", "Sortie en capital possible", "Plafond jusqu'à 35 194 €"].map((b) => (
            <span key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <CheckCircle className="w-3.5 h-3.5 text-copper" />
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </div>

    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl space-y-10">

        {/* ── Alerte opportunité ── */}
        <motion.div
          className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-5"
          {...fadeUp(0)}
        >
          <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-amber-800">
            <strong>75 % des indépendants n'utilisent pas leur plafond PER.</strong>{" "}
            Résultat : des milliers d'euros d'impôts payés inutilement chaque année, et une retraite
            sous-capitalisée. Le plafond non utilisé des 3 dernières années est encore récupérable.
          </p>
        </motion.div>

        {/* ── 4 avantages ── */}
        <motion.div {...fadeUp(0.05)}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Pourquoi le PER est indispensable pour votre statut
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {avantages.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.titre} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-copper" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{a.titre}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{a.detail}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Tableau exemples ── */}
        <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.1)}>
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            Combien économisez-vous concrètement ?
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Exemples calculés sur la base du barème TMI 2024 pour différents niveaux de revenus.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs text-muted-foreground font-medium pb-3 pr-4">Revenus nets</th>
                  <th className="text-left text-xs text-muted-foreground font-medium pb-3 pr-4">TMI</th>
                  <th className="text-left text-xs text-muted-foreground font-medium pb-3 pr-4">Versement PER</th>
                  <th className="text-left text-xs text-muted-foreground font-medium pb-3">Économie fiscale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {exemples.map((e) => (
                  <tr key={e.revenu} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3 pr-4 font-medium text-foreground">
                      {e.revenu.toLocaleString("fr-FR")} €
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground">{e.tmi} %</td>
                    <td className="py-3 pr-4 text-foreground">
                      {e.versement.toLocaleString("fr-FR")} €
                    </td>
                    <td className="py-3">
                      <span className="font-bold text-green-600">
                        {e.economie.toLocaleString("fr-FR")} €
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-4">
            * Estimations indicatives. Votre situation réelle peut différer selon les revenus du foyer et les charges déductibles.
          </p>
        </motion.div>

        {/* ── PER vs Madelin ── */}
        <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.15)}>
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            PER vs Madelin : quelle différence ?
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Si vous avez un ancien contrat Madelin, voici pourquoi le PER est généralement plus avantageux.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs text-muted-foreground font-medium pb-3 pr-4">Critère</th>
                  <th className="text-left text-xs text-muted-foreground font-medium pb-3 pr-4">Madelin</th>
                  <th className="text-left text-xs text-muted-foreground font-medium pb-3">PER Individuel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Déduction fiscale", "✓ Oui", "✓ Oui"],
                  ["Sortie en capital", "✗ Non", "✓ Oui"],
                  ["Déblocage résidence principale", "✗ Non", "✓ Oui"],
                  ["Cotisations obligatoires", "✓ Plancher obligatoire", "✗ Libre"],
                  ["Transfert possible vers PER", "✓ Oui", "—"],
                ].map(([crit, mad, per]) => (
                  <tr key={crit} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3 pr-4 text-muted-foreground">{crit}</td>
                    <td className="py-3 pr-4 text-foreground">{mad}</td>
                    <td className={`py-3 font-medium ${per.startsWith("✓") ? "text-green-600" : "text-foreground"}`}>{per}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.2)}>
          <h2 className="font-heading text-xl font-bold text-foreground mb-1">Questions fréquentes</h2>
          <p className="text-sm text-muted-foreground mb-5">Tout ce que vous devez savoir avant d'ouvrir un PER.</p>
          <div>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </motion.div>

        {/* ── Trust ── */}
        <motion.div
          className="bg-card rounded-xl p-5 border border-border flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
          {...fadeUp(0.25)}
        >
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-copper flex-shrink-0" />
            <span className="text-sm text-foreground font-medium">15 ans d'expertise en gestion de patrimoine</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border" />
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-copper flex-shrink-0" />
            <span className="text-sm text-foreground font-medium">Courtier indépendant — sélection parmi AXA, Swiss Life, Generali, Spirica</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border" />
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs text-muted-foreground ml-1.5">4.9/5</span>
          </div>
        </motion.div>

        {/* ── CTA final ── */}
        <motion.div
          className="bg-hero rounded-2xl p-10 text-center border border-border"
          {...fadeUp(0.3)}
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            Combien pouvez-vous économiser avec un PER ?
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Notre simulateur calcule votre économie fiscale exacte en fonction de vos revenus
            et votre tranche d'imposition. Résultats immédiats, sans engagement.
          </p>
          <Link to="/simulateur">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
              Estimer mes économies d'impôts
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

export default PERIndependants;
