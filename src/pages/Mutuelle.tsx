import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Heart, Award, ShieldCheck, AlertTriangle,
  Eye, Stethoscope, Smile, Brain, ChevronDown, Star, CheckCircle,
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

const postes = [
  {
    icon: Smile,
    titre: "Dentaire",
    desc: "Couronnes, implants, orthodontie adulte — les postes les plus coûteux et les moins bien remboursés par la Sécu.",
    remboSecu: "~70 % sur base SS",
    remboCompl: "Jusqu'à 400 %",
  },
  {
    icon: Eye,
    titre: "Optique",
    desc: "Verres progressifs, lentilles, montures — la réforme 100 % Santé couvre le bas de gamme uniquement.",
    remboSecu: "~60 % sur base SS",
    remboCompl: "Jusqu'à 300 %",
  },
  {
    icon: Stethoscope,
    titre: "Hospitalisation",
    desc: "Chambre particulière, dépassements d'honoraires, forfait journalier — les restes à charge peuvent être élevés.",
    remboSecu: "Base SS uniquement",
    remboCompl: "100 % des frais réels",
  },
  {
    icon: Brain,
    titre: "Médecines douces",
    desc: "Ostéopathie, acupuncture, psychologue, diététicien — non remboursés par la Sécu mais essentiels au quotidien.",
    remboSecu: "0 €",
    remboCompl: "Jusqu'à 500 €/an",
  },
];

const niveaux = [
  {
    nom: "Essentiel",
    prix: "~80 €/mois",
    pour: "Jeune indépendant en bonne santé",
    garanties: ["Hospitalisation 100 %", "Optique de base", "Dentaire courant"],
    color: "border-border",
    badge: "",
  },
  {
    nom: "Confort",
    prix: "~130 €/mois",
    pour: "Profil standard avec famille",
    garanties: ["Hospitalisation 150 %", "Optique renforcée", "Dentaire prothèses", "Médecines douces"],
    color: "border-copper",
    badge: "Le plus choisi",
  },
  {
    nom: "Premium",
    prix: "~200 €/mois",
    pour: "Revenus élevés, exigence maximale",
    garanties: ["Hospitalisation 200 %", "Optique premium", "Implants dentaires", "Chambre particulière garantie"],
    color: "border-border",
    badge: "",
  },
];

const faqs = [
  {
    q: "Mes cotisations de mutuelle sont-elles déductibles en tant qu'indépendant ?",
    a: "Oui, dans le cadre d'un contrat loi Madelin. Les cotisations sont déductibles de votre bénéfice imposable dans la limite de 3,75 % du revenu + 7 % du PASS (~3 000 € en 2024). Pour un BNC de 80 000 € et une TMI à 30 %, cela représente environ 900 € d'économie fiscale annuelle.",
  },
  {
    q: "Quelle différence entre un contrat Madelin et une mutuelle classique ?",
    a: "Un contrat Madelin est une mutuelle santé souscrite dans un cadre fiscal spécifique aux TNS. Les garanties sont identiques à une mutuelle classique, mais les cotisations sont déductibles du revenu imposable. La contrepartie : vous devez cotiser régulièrement (pas de suspension sans raison valable).",
  },
  {
    q: "Peut-on couvrir toute sa famille sous un contrat Madelin ?",
    a: "Oui. Le contrat Madelin peut couvrir votre conjoint et vos enfants à charge. Seule la cotisation correspondant à votre propre couverture est déductible — les parts famille ne bénéficient pas de la déductibilité Madelin, mais restent avantageuses par rapport au marché.",
  },
  {
    q: "Comment choisir le bon niveau de garanties ?",
    a: "Cela dépend de votre profil : âge, état de santé, situation familiale, consommation médicale habituelle. Un jeune indépendant en bonne santé peut se contenter d'un niveau essentiel. Un dirigeant de 45 ans avec des enfants aura intérêt à opter pour un niveau confort ou premium, notamment sur le dentaire et l'optique.",
  },
  {
    q: "Peut-on changer de mutuelle en cours d'année ?",
    a: "Oui, depuis la loi Châtel et la loi Hamon, vous pouvez résilier votre mutuelle à tout moment après 1 an d'engagement. La résiliation prend effet 1 mois après notification. Nous gérons les démarches de transfert pour vous.",
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

const Mutuelle = () => {
  useSEO({
    title: "Mutuelle indépendants : de meilleurs soins, moins d'impôts — RETIRO",
    description: "Mutuelle santé Madelin pour TNS et dirigeants. Cotisations déductibles, remboursements jusqu'à 400 % en dentaire. Comparaison gratuite parmi 6 assureurs.",
    canonical: "https://secure-plan-quest.vercel.app/mutuelle",
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
            Mutuelle santé · TNS &amp; Indépendants
          </motion.p>
          <motion.h1
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Mutuelle indépendants :{" "}
            <span className="text-gradient-gold">de meilleurs soins, moins d'impôts</span>
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
            Le régime obligatoire ne rembourse que 65 à 70 % de vos frais de santé.
            Grâce à la loi Madelin, vos cotisations de mutuelle sont déductibles de votre
            revenu imposable — vous vous soignez mieux et payez moins d'impôts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
                Comparer les offres mutuelle
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {["Cotisations déductibles (Madelin)", "Remboursement jusqu'à 400 % en dentaire", "Résiliation possible à tout moment"].map((b) => (
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

          {/* ── Alerte ── */}
          <motion.div
            className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-5"
            {...fadeUp(0)}
          >
            <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              <strong>Sans mutuelle, un implant dentaire vous coûte entre 1 500 et 3 000 €.</strong>{" "}
              Une hospitalisation avec chambre particulière peut dépasser{" "}
              <strong>200 €/nuit</strong> de reste à charge. Et contrairement aux salariés,
              vous n'avez aucune mutuelle d'entreprise obligatoire pour vous couvrir.
            </p>
          </motion.div>

          {/* ── 4 postes ── */}
          <motion.div {...fadeUp(0.05)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Les postes de santé à couvrir en priorité
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Ces 4 postes représentent l'essentiel des restes à charge non couverts par le régime obligatoire.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {postes.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.titre} className="bg-card rounded-xl p-5 border border-border shadow-sm">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-copper" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">{p.titre}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-red-500 font-medium">Sécu : {p.remboSecu}</span>
                      <span className="text-green-600 font-medium">Compl. : {p.remboCompl}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── 3 niveaux ── */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Quel niveau de garanties choisir ?
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Trois grandes familles de contrats selon votre profil et vos besoins.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {niveaux.map((n) => (
                <div key={n.nom} className={`bg-card rounded-xl p-5 border-2 ${n.color} shadow-sm relative`}>
                  {n.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-copper text-white whitespace-nowrap">
                      {n.badge}
                    </span>
                  )}
                  <h3 className="font-heading font-bold text-foreground text-base mb-1">{n.nom}</h3>
                  <p className="text-copper font-bold text-lg mb-1">{n.prix}</p>
                  <p className="text-xs text-muted-foreground mb-3 leading-tight">{n.pour}</p>
                  <div className="space-y-1.5">
                    {n.garanties.map((g) => (
                      <div key={g} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-foreground">{g}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Avantage fiscal ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.15)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              L'avantage fiscal Madelin : payez moins d'impôts en vous soignant mieux
            </h2>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Vos cotisations de mutuelle Madelin sont déductibles de votre bénéfice imposable,
              dans la limite de <strong className="text-foreground">3,75 % du revenu + 7 % du PASS</strong>.
              Concrètement, l'État finance une partie de votre couverture santé via la réduction d'impôt.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Cotisation annuelle moyenne", value: "1 800 €", sub: "Niveau Confort, célibataire", color: "text-foreground" },
                { label: "Économie fiscale (TMI 30 %)", value: "540 €", sub: "L'État finance 30 % de votre mutuelle", color: "text-green-600" },
                { label: "Coût réel après déduction", value: "1 260 €", sub: "Soit 105 €/mois net fiscal", color: "text-copper" },
              ].map((item) => (
                <div key={item.label} className="bg-muted/40 rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1 leading-tight">{item.label}</p>
                  <p className={`font-heading text-2xl font-bold ${item.color}`}>{item.value}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── FAQ ── */}
          <motion.div className="bg-card rounded-2xl p-7 shadow-card border border-border" {...fadeUp(0.2)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">Questions fréquentes</h2>
            <p className="text-sm text-muted-foreground mb-5">Tout ce que vous devez savoir avant de choisir votre mutuelle.</p>
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
              <span className="text-sm text-foreground font-medium">Comparaison objective — 6 assureurs partenaires</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-copper flex-shrink-0" />
              <span className="text-sm text-foreground font-medium">98 % de clients satisfaits</span>
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
              Trouvez la mutuelle qui vous fait payer moins d'impôts
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Notre bilan gratuit compare les offres de nos 6 partenaires assureurs et calcule
              votre économie fiscale Madelin. Sans engagement.
            </p>
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white gap-2 font-medium border-0 group">
                Comparer les mutuelles gratuitement
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

export default Mutuelle;
