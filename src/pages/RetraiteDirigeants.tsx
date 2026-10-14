import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Award, ShieldCheck, Info,
  Users, PiggyBank, Wallet, ChevronDown, Star, Clock, Layers,
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

const atouts = [
  {
    nom: "Disponibilité permanente",
    desc: "Contrairement au PER, votre capital reste accessible à tout moment via des rachats partiels ou totaux. Aucun blocage jusqu'à la retraite.",
    avantage: "Épargne 100 % liquide",
    icon: Wallet,
    tag: "Liberté",
    tagColor: "text-green-600 bg-green-50",
  },
  {
    nom: "Fiscalité allégée après 8 ans",
    desc: "Au-delà de 8 ans, abattement annuel de 4 600 € (9 200 € pour un couple) sur les gains rachetés, puis prélèvement forfaitaire réduit à 7,5 %.",
    avantage: "Abattement 4 600 € / 9 200 € par an",
    icon: Clock,
    tag: "Fiscalité",
    tagColor: "text-copper bg-copper/10",
  },
  {
    nom: "Transmission optimisée",
    desc: "Jusqu'à 152 500 € transmis hors succession par bénéficiaire désigné (versements avant 70 ans). Un outil patrimonial puissant pour protéger ses proches.",
    avantage: "152 500 € exonérés par bénéficiaire",
    icon: Users,
    tag: "Succession",
    tagColor: "text-blue-600 bg-blue-50",
  },
  {
    nom: "Diversification multi-supports",
    desc: "Fonds euros sécurisés, unités de compte (ETF, SCPI, actions, obligations) : une seule enveloppe pour piloter une allocation patrimoniale complète.",
    avantage: "Fonds euros + UC dans un même contrat",
    icon: Layers,
    tag: "Allocation",
    tagColor: "text-purple-600 bg-purple-50",
  },
];

const usages = [
  { titre: "Constituer une épargne de précaution rémunérée", desc: "Une alternative au livret A et au compte courant pour faire travailler sa trésorerie à moyen terme." },
  { titre: "Préparer un projet à 5-10 ans", desc: "Achat immobilier, études des enfants, complément de revenus : un horizon flexible, sans plafond de versement." },
  { titre: "Compléter le PER pour la retraite", desc: "Le PER déduit l'impôt aujourd'hui ; l'assurance vie reste mobilisable avant l'âge légal et offre une fiscalité douce après 8 ans." },
  { titre: "Organiser sa transmission", desc: "Désigner librement les bénéficiaires, en dehors du cadre successoral classique, avec une fiscalité très avantageuse." },
];

const faqs = [
  {
    q: "Quelle différence entre assurance vie et PER ?",
    a: "Le PER est un outil principalement dédié à la retraite : il offre une déduction fiscale à l'entrée mais bloque votre épargne jusqu'au départ en retraite (hors cas exceptionnels). L'assurance vie n'offre pas de déduction à l'entrée, mais votre capital reste disponible à tout moment et bénéficie d'une fiscalité allégée après 8 ans ainsi que d'un cadre successoral très favorable.",
  },
  {
    q: "Peut-on retirer son argent à tout moment ?",
    a: "Oui. L'assurance vie permet des rachats partiels ou totaux à tout moment, sans pénalité contractuelle. Seule la fiscalité sur les gains évolue : optimale après 8 ans de détention du contrat.",
  },
  {
    q: "Quelle fiscalité s'applique sur les gains ?",
    a: "Avant 8 ans : prélèvement forfaitaire unique (PFU) de 30 % sur les gains rachetés. Après 8 ans : abattement annuel de 4 600 € (9 200 € pour un couple), puis 7,5 % de prélèvement (jusqu'à 150 000 € de versements) + prélèvements sociaux de 17,2 %.",
  },
  {
    q: "Faut-il privilégier le fonds euros ou les unités de compte ?",
    a: "Cela dépend de votre horizon et de votre profil de risque. Le fonds euros garantit le capital mais offre un rendement modéré. Les unités de compte (ETF, SCPI, OPCVM) visent une performance supérieure sur le long terme, avec un risque de perte en capital. L'arbitrage entre les deux se travaille dans votre bilan patrimonial.",
  },
  {
    q: "Combien puis-je transmettre via l'assurance vie ?",
    a: "Pour les versements effectués avant 70 ans : 152 500 € par bénéficiaire désigné, exonérés de droits de succession. Au-delà, taxation forfaitaire de 20 % puis 31,25 %. Pour les versements après 70 ans : abattement global de 30 500 € (tous bénéficiaires confondus), les gains restent exonérés.",
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
    title: "Assurance vie : l'enveloppe patrimoniale la plus souple | RETIRO Patrimoine",
    description: "Disponibilité, fiscalité allégée après 8 ans, transmission jusqu'à 152 500 € par bénéficiaire : tout comprendre sur l'assurance vie avec RETIRO.",
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
            Assurance vie · Épargne &amp; Transmission
          </motion.p>
          <motion.h1
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Assurance vie :{" "}
            <span className="text-gradient-gold">l'enveloppe patrimoniale la plus souple</span>
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
            Épargne disponible à tout moment, fiscalité allégée après 8 ans, transmission optimisée
            jusqu'à 152 500 € par bénéficiaire : l'assurance vie est le couteau suisse patrimonial
            des indépendants et dirigeants. Comprenez son fonctionnement et ses leviers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
                Faire mon bilan patrimonial
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {["Capital disponible à tout moment", "Abattement 4 600 € / 9 200 € après 8 ans", "152 500 € transmis hors succession par bénéficiaire"].map((b) => (
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

          {/* ── Pitch principal ── */}
          <motion.div
            className="flex items-start gap-3 bg-copper/5 border border-copper/20 rounded-xl p-5"
            {...fadeUp(0)}
          >
            <Info className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
            <p className="text-sm text-foreground">
              <strong>L'assurance vie n'est pas un produit retraite.</strong>{" "}
              C'est une enveloppe patrimoniale polyvalente : épargne disponible, valorisation du capital,
              transmission. Elle complète idéalement le PER (dédié à la retraite avec déduction fiscale) en apportant
              de la liquidité et un cadre successoral très avantageux.
            </p>
          </motion.div>

          {/* ── 4 atouts ── */}
          <motion.div {...fadeUp(0.05)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Les 4 atouts clés de l'assurance vie
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Disponibilité, fiscalité, transmission, diversification : quatre raisons d'en faire le socle de votre patrimoine financier.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {atouts.map((d) => {
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

          {/* ── Fiscalité après 8 ans ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.1)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              La fiscalité de l'assurance vie selon la durée
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Seuls les <em>gains</em> rachetés sont fiscalisés, jamais le capital versé. La fiscalité s'allège fortement à partir de 8 ans.
            </p>
            <div className="space-y-3">
              {[
                { duree: "Avant 4 ans", regime: "PFU 30 % sur les gains (12,8 % IR + 17,2 % PS)", color: "text-amber-600" },
                { duree: "Entre 4 et 8 ans", regime: "PFU 30 % maintenu — pas d'abattement", color: "text-amber-600" },
                { duree: "Après 8 ans", regime: "Abattement 4 600 € / an (9 200 € en couple) puis 7,5 % + 17,2 % PS", color: "text-green-600" },
                { duree: "Transmission (versements < 70 ans)", regime: "152 500 € exonérés par bénéficiaire désigné", color: "text-copper" },
              ].map((r) => (
                <div key={r.duree} className="flex items-start justify-between gap-4 bg-muted/40 rounded-lg px-3 py-2.5">
                  <span className="text-sm text-foreground font-medium flex-shrink-0">{r.duree}</span>
                  <span className={`text-sm text-right ${r.color}`}>{r.regime}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/60 mt-4">
              * Régime applicable aux versements postérieurs au 27/09/2017. Source : BOFiP, Code général des impôts.
            </p>
          </motion.div>

          {/* ── Usages concrets ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.15)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-5">
              À quoi sert concrètement une assurance vie ?
            </h2>
            <div className="space-y-3">
              {usages.map((u) => (
                <div key={u.titre} className="flex items-start gap-3 bg-muted/40 rounded-lg px-3 py-3">
                  <CheckCircle className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">{u.titre}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── PER vs Assurance vie ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.2)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              PER ou assurance vie : deux logiques complémentaires
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Les deux enveloppes ne s'opposent pas — elles répondent à des besoins différents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/40 rounded-xl p-5 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Wallet className="w-4 h-4 text-copper" />
                  <h3 className="font-semibold text-foreground text-sm">PER — préparer la retraite</h3>
                </div>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li>✓ Versements déductibles du revenu imposable</li>
                  <li>✓ Idéal si TMI ≥ 30 %</li>
                  <li>✗ Capital bloqué jusqu'à la retraite</li>
                  <li>✗ Sortie fiscalisée (capital ou rente)</li>
                </ul>
              </div>
              <div className="bg-muted/40 rounded-xl p-5 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <PiggyBank className="w-4 h-4 text-copper" />
                  <h3 className="font-semibold text-foreground text-sm">Assurance vie — patrimoine global</h3>
                </div>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li>✓ Capital disponible à tout moment</li>
                  <li>✓ Fiscalité allégée après 8 ans</li>
                  <li>✓ Transmission hors succession</li>
                  <li>✗ Aucune déduction à l'entrée</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/70 mt-5">
              <strong>Notre approche RETIRO :</strong> nous combinons généralement les deux selon votre TMI, votre horizon et vos objectifs de transmission.
            </p>
          </motion.div>

          {/* ── Exemple chiffré ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.25)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Exemple pédagogique : 80 000 € placés sur 10 ans
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Hypothèse : versement initial 50 000 €, versements programmés 250 €/mois, allocation mixte fonds euros + unités de compte, performance brute 3,5 %/an. Hors frais et fiscalité. Performances passées non garanties, risque de perte en capital sur les UC.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Capital versé", value: "80 000 €", sub: "50 000 € + 30 000 € programmés", color: "text-foreground" },
                { label: "Valorisation à 10 ans", value: "~107 000 €", sub: "Hypothèse 3,5 % / an", color: "text-copper" },
                { label: "Abattement fiscal annuel", value: "4 600 €", sub: "9 200 € en couple, après 8 ans", color: "text-green-600" },
                { label: "Transmission exonérée", value: "152 500 €", sub: "Par bénéficiaire (versements < 70 ans)", color: "text-copper" },
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
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.3)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">Questions fréquentes</h2>
            <p className="text-sm text-muted-foreground mb-5">Tout ce que vous devez savoir sur l'assurance vie.</p>
            <div>
              {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </motion.div>

          {/* ── Trust ── */}
          <motion.div
            className="bg-card rounded-xl p-5 border border-border flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
            {...fadeUp(0.35)}
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-copper flex-shrink-0" />
              <span className="text-sm text-foreground font-medium">2 500+ clients accompagnés sur leur stratégie patrimoniale</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-copper flex-shrink-0" />
              <span className="text-sm text-foreground font-medium">Cabinet enregistré ORIAS — un interlocuteur dédié</span>
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
            {...fadeUp(0.4)}
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
              Quelle assurance vie pour votre situation ?
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Allocation, choix du contrat, articulation avec votre PER et votre prévoyance :
              notre bilan patrimonial vous donne une stratégie claire en 2 minutes.
            </p>
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
                Faire mon bilan patrimonial
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