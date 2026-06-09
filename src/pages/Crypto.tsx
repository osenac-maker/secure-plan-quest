import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bitcoin, ShieldCheck, AlertTriangle, TrendingUp, Lock, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const piliers = [
  {
    icon: Scale,
    titre: "Une allocation maîtrisée",
    desc: "5 à 10 % du patrimoine financier maximum, sur des actifs majeurs (Bitcoin, Ethereum). Objectif : améliorer le couple rendement/risque global, pas spéculer.",
  },
  {
    icon: Lock,
    titre: "Plateformes régulées (PSAN)",
    desc: "Nous travaillons exclusivement avec des prestataires enregistrés PSAN auprès de l'AMF, gages de conformité, de sécurité des fonds et de traçabilité fiscale.",
  },
  {
    icon: ShieldCheck,
    titre: "Sécurisation des actifs",
    desc: "Conservation hybride (custodial / self-custody), wallets matériels, plans de succession numérique : nous structurons la détention et la transmission de vos cryptos.",
  },
  {
    icon: TrendingUp,
    titre: "Fiscalité optimisée",
    desc: "Flat tax 30 %, suivi des plus-values, déclaration des comptes étrangers : nous orchestrons la stratégie de cession pour minimiser l'imposition.",
  },
];

const Crypto = () => {
  useSEO({
    title: "Investir en crypto — Allocation patrimoniale | RETIRO Patrimoine",
    description: "Intégrez Bitcoin et Ethereum à votre stratégie patrimoniale globale. Allocation maîtrisée, plateformes régulées PSAN, fiscalité optimisée — accompagnement RETIRO.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-ivory to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.span {...fadeUp()} className="inline-block text-xs tracking-[0.25em] uppercase text-copper font-medium mb-6">
            Actifs numériques · Diversification
          </motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Crypto-actifs :{" "}
            <span className="text-gradient-gold">diversifier sans s'exposer aveuglément</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Le Bitcoin et l'Ethereum sont devenus des classes d'actifs à part entière. Bien dosés dans une allocation globale (5 à 10 % maximum), ils peuvent renforcer la performance long terme d'un patrimoine — à condition d'être sélectionnés, sécurisés et déclarés correctement.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-3">
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white">
                Simuler mon allocation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {piliers.map((p, i) => (
              <motion.div
                key={p.titre}
                {...fadeUp(i * 0.08)}
                className="p-8 rounded-2xl bg-card border border-border hover:border-copper/30 shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5 text-copper" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{p.titre}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex gap-4 p-6 rounded-2xl bg-card border border-copper/20">
            <AlertTriangle className="w-6 h-6 text-copper flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg font-semibold mb-2">Avertissement risques</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Les crypto-actifs sont des placements volatils et risqués, susceptibles d'entraîner une perte partielle ou totale du capital investi. RETIRO Patrimoine ne conseille la crypto qu'en complément d'un patrimoine déjà structuré (épargne de précaution, immobilier, retraite) et limite systématiquement l'exposition recommandée.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-mahogany text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Bitcoin className="w-10 h-10 text-copper mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Définissons ensemble votre exposition cible
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Un bilan patrimonial offert pour positionner — ou non — une poche crypto adaptée à votre profil de risque et à votre horizon.
          </p>
          <Link to="/simulateur">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white">
              Demander mon bilan offert
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Crypto;