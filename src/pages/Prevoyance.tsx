import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Shield, Award, ShieldCheck, AlertTriangle,
  HeartHandshake, Stethoscope, Users, ChevronDown, Star, CheckCircle,
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

const garanties = [
  {
    icon: Stethoscope,
    titre: "Indemnités journalières",
    desc: "Maintien de vos revenus dès le 1er jour d'arrêt (ou après une franchise courte). Couvre maladie, accident, hospitalisation.",
    detail: "Jusqu'à 100 % du revenu net",
  },
  {
    icon: Shield,
    titre: "Invalidité",
    desc: "Rente mensuelle garantie si vous ne pouvez plus exercer votre activité — partiellement ou totalement.",
    detail: "Invalidité partielle incluse",
  },
  {
    icon: HeartHandshake,
    titre: "Capital décès",
    desc: "Somme versée à votre conjoint et vos enfants pour assurer leur sécurité financière immédiate.",
    detail: "De 100 k€ à 1 M€ selon contrat",
  },
  {
    icon: Users,
    titre: "Rente éducation",
    desc: "Rente versée à vos enfants jusqu'à leur majorité (ou fin d'études) en cas de décès ou d'invalidité totale.",
    detail: "Protection de toute la famille",
  },
];

const comparatif = [
  { garantie: "Indemnités journalières", obligatoire: "~22 €/jour (SSI)", complementaire: "Jusqu'à 300 €/jour" },
  { garantie: "Franchise", obligatoire: "3 à 90 jours", complementaire: "Dès le 1er jour possible" },
  { garantie: "Invalidité partielle", obligatoire: "Non couverte", complementaire: "✓ Couverte" },
  { garantie: "Capital décès", obligatoire: "Forfait ~8 500 €", complementaire: "100 000 € à 1 M€" },
  { garantie: "Déductibilité fiscale", obligatoire: "—", complementaire: "✓ 100 % déductible (Madelin)" },
];

const faqs = [
  {
    q: "Mes cotisations de prévoyance sont-elles déductibles ?",
    a: "Oui, dans le cadre d'un contrat loi Madelin. Les cotisations sont déductibles de votre revenu imposable dans la limite d'un plafond calculé sur votre bénéfice. Pour un BNC de 80 000 €, cela peut représenter plusieurs milliers d'euros de déduction annuelle.",
  },
  {
    q: "Quelle franchise choisir pour mes indemnités journalières ?",
    a: "Cela dépend de votre trésorerie personnelle. Si vous avez 3 mois de charges en réserve, une franchise de 90 jours réduit significativement la prime. Si vos finances sont plus serrées, optez pour 30 ou 15 jours. Nous vous aidons à trouver l'équilibre optimal.",
  },
  {
    q: "Peut-on souscrire une prévoyance en cas de problème de santé ?",
    a: "Oui, dans la plupart des cas — avec d'éventuelles exclusions ou surprimes sur les pathologies existantes. Un questionnaire médical est obligatoire. Certains contrats appliquent des exclusions temporaires plutôt que des refus définitifs. Nous accompagnons les profils à risque.",
  },
  {
    q: "Quelle est la différence entre prévoyance et assurance vie ?",
    a: "La prévoyance couvre les aléas de la vie active (arrêt de travail, invalidité, décès prématuré). L'assurance vie est un outil d'épargne et de transmission. Les deux sont complémentaires : la prévoyance protège vos revenus, l'assurance vie constitue et transmet votre patrimoine.",
  },
  {
    q: "Mon contrat collectif d'entreprise suffit-il ?",
    a: "Si vous êtes dirigeant assimilé salarié (SAS/SASU), vous pouvez avoir un contrat collectif — mais ses garanties sont souvent insuffisantes pour des revenus élevés. Pour les TNS (gérant SARL, EI, libéral), il n'y a pas de contrat collectif obligatoire. Dans les deux cas, un complément individuel est généralement recommandé.",
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

const Prevoyance = () => {
  useSEO({
    title: "Prévoyance indépendants : protégez vos revenus et votre famille — RETIRO",
    description: "Le régime SSI verse 22 €/jour en cas d'arrêt. La prévoyance complémentaire Madelin protège vos revenus avec des cotisations 100 % déductibles.",
    canonical: "https://secure-plan-quest.vercel.app/prevoyance",
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
            Prévoyance · TNS &amp; Indépendants
          </motion.p>
          <motion.h1
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Prévoyance indépendants :{" "}
            <span className="text-gradient-gold">protégez vos revenus et votre famille</span>
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
            En cas d'arrêt de travail, d'invalidité ou de décès, le régime obligatoire
            couvre rarement plus de 50 % de vos revenus. La prévoyance complémentaire
            comble cette lacune — avec des cotisations 100 % déductibles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
                Évaluer mes lacunes de couverture
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {["22 €/jour seulement avec le SSI", "Franchise jusqu'à 90 jours sans revenus", "Cotisations 100 % déductibles (Madelin)"].map((b) => (
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
              <strong>Un indépendant qui s'arrête 3 mois peut perdre 100 % de ses revenus.</strong>{" "}
              Le SSI verse environ 22 €/jour — soit 660 €/mois — après une franchise de 3 jours.
              Pour un revenu habituel de 6 000 €/mois, c'est une perte de{" "}
              <strong>5 340 € par mois</strong>. Sans prévoyance complémentaire, cela peut être dévastateur.
            </p>
          </motion.div>

          {/* ── 4 garanties ── */}
          <motion.div {...fadeUp(0.05)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Ce que la prévoyance complémentaire vous garantit
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Un contrat bien calibré couvre l'ensemble des risques liés à votre activité et à votre vie personnelle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {garanties.map((g) => {
                const Icon = g.icon;
                return (
                  <div key={g.titre} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-copper" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">{g.titre}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{g.desc}</p>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      <span className="text-xs font-medium text-green-600">{g.detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Comparatif ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.1)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Régime obligatoire vs prévoyance complémentaire
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              L'écart est considérable. Voici ce que couvre réellement le SSI — et ce qu'un bon contrat ajoute.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-xs text-muted-foreground font-medium pb-3 pr-4">Garantie</th>
                    <th className="text-left text-xs text-muted-foreground font-medium pb-3 pr-4">Régime obligatoire</th>
                    <th className="text-left text-xs text-muted-foreground font-medium pb-3">Prévoyance complémentaire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparatif.map((row) => (
                    <tr key={row.garantie} className="hover:bg-muted/30 transition-colors">
                      <td className="py-3 pr-4 text-muted-foreground text-xs">{row.garantie}</td>
                      <td className="py-3 pr-4 text-red-500 text-xs font-medium">{row.obligatoire}</td>
                      <td className="py-3 text-green-600 text-xs font-medium">{row.complementaire}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* ── Avantage fiscal ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.15)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              Un avantage fiscal souvent ignoré
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              {[
                { label: "Cotisations déductibles", value: "100 %", sub: "Du revenu imposable (Madelin)", color: "text-green-600" },
                { label: "Économie fiscale estimée", value: "30–45 %", sub: "Selon votre TMI", color: "text-copper" },
                { label: "Plafond de déduction", value: "~7 000 €", sub: "Pour un BNC de 60 000 €", color: "text-blue-600" },
              ].map((item) => (
                <div key={item.label} className="bg-muted/40 rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className={`font-heading text-2xl font-bold ${item.color}`}>{item.value}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dans le cadre d'un contrat loi Madelin, vos cotisations de prévoyance sont
              intégralement déductibles de votre revenu imposable. Concrètement, pour
              1 000 € de cotisation annuelle et une TMI à 30 %, votre coût réel n'est que
              de <strong className="text-foreground">700 €</strong> — l'État finance le reste.
            </p>
          </motion.div>

          {/* ── FAQ ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.2)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">Questions fréquentes</h2>
            <p className="text-sm text-muted-foreground mb-5">Tout ce que vous devez savoir avant de souscrire.</p>
            <div>
              {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </motion.div>

          {/* ── Trust ── */}
          <motion.div
            className="bg-card rounded-xl p-5 border border-border flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
            {...fadeUp(0.25)}
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-copper flex-shrink-0" />
              <span className="text-sm text-foreground font-medium">Spécialiste prévoyance TNS depuis 15 ans</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-copper flex-shrink-0" />
              <span className="text-sm text-foreground font-medium">Partenaires : AXA, Generali, Swiss Life, Apicil</span>
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
            {...fadeUp(0.3)}
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
              Votre famille est-elle vraiment protégée ?
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Notre bilan gratuit évalue vos lacunes de couverture et vous recommande
              les garanties adaptées à votre situation familiale et professionnelle.
            </p>
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
                Faire mon bilan retraite gratuit
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

export default Prevoyance;
