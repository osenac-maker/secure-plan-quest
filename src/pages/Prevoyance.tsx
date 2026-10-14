import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Shield, Award, ShieldCheck, AlertTriangle,
  HeartHandshake, Stethoscope, Users, ChevronDown, CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import ProductExample from "@/components/ProductExample";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const garanties = [
  {
    icon: Stethoscope,
    titre: "Comment maintenir vos revenus pendant un arrêt de travail temporaire ?",
    desc: "Des indemnités peuvent compenser une perte de revenus après la franchise prévue, en cas de maladie, d'accident ou d'hospitalisation couverts.",
    detail: "Montant et durée selon le contrat",
    points: [
      "Le jour de départ de l'indemnité (16e, 31e, 91e…) et son effet sur la cotisation : une franchise plus courte peut augmenter son montant.",
      "La prise en charge du burn-out et des pathologies psychiques, avec leurs éventuelles exclusions et conditions spécifiques.",
      "L'exonération de cotisation pendant un arrêt long, selon les conditions et la durée prévues au contrat.",
    ],
    exemple: "Sophie, architecte indépendante de 42 ans, exerce à son compte. Une fracture l'oblige à interrompre son activité pendant deux mois. Selon son contrat et après la franchise applicable, des indemnités de [À COMPLÉTER] par jour peuvent compenser une partie de sa perte de revenus.",
  },
  {
    icon: Shield,
    titre: "Quelles ressources en cas d'invalidité ?",
    desc: "Rente mensuelle garantie si vous ne pouvez plus exercer votre activité — partiellement ou totalement.",
    detail: "Invalidité partielle à vérifier au contrat",
    points: [
      "Le taux minimal d'invalidité ouvrant droit à une indemnisation et le barème utilisé pour le déterminer.",
      "La rente proportionnelle au taux réel d'invalidité : nous vérifions son mode de calcul et les éventuels seuils contractuels.",
    ],
    exemple: "Marc, artisan électricien de 48 ans, dirige sa petite entreprise. Un accident entraîne une invalidité reconnue qui réduit durablement sa capacité à travailler. Sous réserve des critères du contrat, une rente de [À COMPLÉTER] par mois peut compléter ses ressources.",
  },
  {
    icon: HeartHandshake,
    titre: "Comment protéger vos proches en cas de décès ?",
    desc: "Somme versée à votre conjoint et vos enfants pour assurer leur sécurité financière immédiate.",
    detail: "Capital choisi selon les besoins des proches",
    points: [
      "Le capital prévu pour les proches et les bénéficiaires désignés.",
      "La rente éducation par enfant, son montant, son âge limite et les conditions de prolongation en cas d'études.",
    ],
    exemple: "Karim, gérant d'une PME de 45 ans, vit en couple avec deux enfants. Son décès laisse sa famille sans ses revenus professionnels. Si le décès est couvert, les bénéficiaires désignés reçoivent un capital de [À COMPLÉTER] pour faire face aux dépenses immédiates.",
    exempleEducation: "Claire, consultante indépendante de 39 ans, élève un enfant scolarisé. Son décès met en difficulté le financement des études de son enfant. Selon les conditions du contrat, une rente éducation de [À COMPLÉTER] par mois peut être versée pendant la durée prévue.",
  },
];

const comparatif = [
  { garantie: "Indemnités journalières", obligatoire: "Selon le régime et les revenus cotisés", complementaire: "Montant contractuel à déterminer" },
  { garantie: "Franchise", obligatoire: "Selon le régime obligatoire", complementaire: "Délai choisi au contrat" },
  { garantie: "Invalidité", obligatoire: "Selon le barème du régime", complementaire: "Seuil et barème à comparer" },
  { garantie: "Décès", obligatoire: "Prestations selon le régime", complementaire: "Capital et rente éducation en option" },
  { garantie: "Déductibilité fiscale", obligatoire: "Selon la nature des cotisations", complementaire: "Madelin : éligibilité et plafond à vérifier" },
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
    a: "Oui, dans la plupart des cas — avec d'éventuelles exclusions ou surprimes sur les pathologies existantes. Des formalités médicales peuvent être demandées selon le contrat. Certains contrats appliquent des exclusions temporaires plutôt que des refus définitifs. Nous accompagnons les profils à risque.",
  },
  {
    q: "Quelle est la différence entre prévoyance et assurance vie ?",
    a: "La prévoyance couvre les aléas de la vie active (arrêt de travail, invalidité, décès prématuré). L'assurance vie est un outil d'épargne et de transmission. Les deux sont complémentaires : la prévoyance protège vos revenus, l'assurance vie constitue et transmet votre patrimoine.",
  },
  {
    q: "Mon contrat collectif d'entreprise suffit-il ?",
    a: "Si vous êtes dirigeant assimilé salarié (SAS/SASU), vous pouvez avoir un contrat collectif — mais ses garanties sont souvent insuffisantes pour des revenus élevés. Pour les indépendants (gérant majoritaire de SARL, EI, libéral), il n'y a pas de contrat collectif obligatoire. Dans les deux cas, un complément individuel est généralement recommandé.",
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
    description: "Arrêt de travail, invalidité, décès : comprendre les garanties, franchises et limites de la prévoyance des indépendants.",
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
            Prévoyance · Dirigeants &amp; Indépendants
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
            En cas d'arrêt de travail, d'invalidité ou de décès, comparez vos droits obligatoires à vos besoins. Une prévoyance complémentaire peut réduire l'écart, selon les garanties souscrites et leurs conditions.
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
            {["Franchise à comparer", "Exclusions à examiner", "Déduction Madelin selon plafond"].map((b) => (
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
              <strong>Un arrêt de travail peut déséquilibrer vos finances personnelles.</strong>{" "}
              Les prestations obligatoires varient selon votre régime, vos revenus cotisés et votre situation.
              Nous les comparons à vos charges et à votre couverture complémentaire avant toute recommandation.
            </p>
          </motion.div>

          {/* ── 4 garanties ── */}
          <motion.div {...fadeUp(0.05)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Trois questions pour protéger vos revenus et vos proches
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Arrêt de travail temporaire, invalidité, décès : nous examinons les garanties et leurs conditions pour chaque situation.
            </p>
            <div className="grid grid-cols-1 gap-4">
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
                    <aside className="mt-4 border border-copper/20 border-l-2 border-l-copper px-3 py-3" aria-label="Les points que nous vérifions pour vous">
                      <h4 className="font-heading text-sm font-semibold text-copper mb-2">Les points que nous vérifions pour vous</h4>
                      <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground leading-relaxed">
                        {g.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                    </aside>
                    <ProductExample>{g.exemple}</ProductExample>
                    {g.exempleEducation && <ProductExample>{g.exempleEducation}</ProductExample>}
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
              Les droits dépendent de votre régime obligatoire. Le contrat complémentaire doit être comparé à vos besoins et aux prestations déjà acquises.
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
                { label: "Cotisations éligibles", value: "Selon contrat", sub: "Dispositif Madelin", color: "text-copper" },
                { label: "Coût après impôt", value: "[À COMPLÉTER]", sub: "Selon votre situation fiscale", color: "text-copper" },
                { label: "Plafond disponible", value: "[À COMPLÉTER]", sub: "Selon votre bénéfice et les autres cotisations", color: "text-copper" },
              ].map((item) => (
                <div key={item.label} className="bg-muted/40 rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className={`font-heading text-2xl font-bold ${item.color}`}>{item.value}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La déduction dépend de votre éligibilité au dispositif Madelin et de votre plafond disponible.
              Le coût après impôt doit être évalué à partir de votre situation fiscale personnelle, sans économie garantie.
            </p>
          </motion.div>

          <p className="text-xs text-muted-foreground">Sources : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F36238" target="_blank" rel="noopener noreferrer" className="text-copper underline">protection sociale des indépendants</a> et <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047288764" target="_blank" rel="noopener noreferrer" className="text-copper underline">CGI, article 154 bis</a>. Les garanties exactes figurent dans les conditions du contrat.</p>

          {/* ── FAQ ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.2)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">Questions fréquentes</h2>
            <p className="text-sm text-muted-foreground mb-5">Tout ce que vous devez savoir avant de souscrire.</p>
            <div>
              {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
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

          <p className="text-sm text-muted-foreground leading-relaxed">
            Vos cotisations Madelin sont déductibles de votre bénéfice, dans la limite de votre plafond. Nous affichons leur coût réel, après impôt.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prevoyance;
