import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bitcoin, ShieldCheck, AlertTriangle, TrendingUp, Lock, Scale, Info } from "lucide-react";
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
    titre: "Une allocation raisonnée",
    desc: "Dans la littérature patrimoniale, une exposition aux crypto-actifs est généralement envisagée à hauteur de quelques pourcents du patrimoine financier, sur des actifs majeurs (Bitcoin, Ethereum). L'objectif évoqué est d'améliorer le couple rendement/risque global — en aucun cas de spéculer.",
  },
  {
    icon: Lock,
    titre: "Plateformes régulées (PSAN)",
    desc: "Seuls les Prestataires de Services sur Actifs Numériques (PSAN) enregistrés auprès de l'AMF offrent un cadre conforme : sécurité des fonds, lutte anti-blanchiment, traçabilité fiscale. La liste officielle est publiée sur le site de l'AMF.",
  },
  {
    icon: ShieldCheck,
    titre: "Sécurisation des actifs",
    desc: "Modes de conservation (custodial / self-custody), wallets matériels, transmission successorale des actifs numériques : autant de sujets techniques à anticiper avant toute détention significative.",
  },
  {
    icon: TrendingUp,
    titre: "Cadre fiscal français",
    desc: "Plus-values des particuliers imposées au PFU (30 %) lors des cessions contre monnaie fiat, déclaration obligatoire des comptes détenus à l'étranger (formulaire 3916-bis). Le cadre évolue régulièrement.",
  },
];

const Crypto = () => {
  useSEO({
    title: "Comprendre les cryptoactifs | RETIRO Patrimoine",
    description: "Page pédagogique sur les cryptoactifs : cadre réglementaire PSAN, fiscalité française, principes d'allocation. Contenu informatif, ne constitue pas un conseil en investissement.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-ivory to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.span {...fadeUp()} className="inline-block text-xs tracking-[0.25em] uppercase text-copper font-medium mb-6">
            Cryptoactifs · Page pédagogique
          </motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Cryptoactifs :{" "}
            <span className="text-gradient-gold">comprendre avant d'envisager</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Bitcoin, Ethereum et autres cryptoactifs sont désormais encadrés en France (loi PACTE, règlement européen MiCA). Cette page propose un éclairage pédagogique sur le cadre réglementaire, les risques et les principes d'allocation — elle ne constitue ni une recommandation d'investissement, ni une sollicitation à acheter ou vendre des cryptoactifs.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-3">
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white">
                Faire mon bilan patrimonial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
          <motion.div {...fadeUp(0.4)} className="mt-6 flex gap-3 p-4 rounded-lg bg-copper/5 border border-copper/20 max-w-3xl">
            <Info className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              RETIRO Patrimoine est immatriculée à l'ORIAS en qualité de courtier en assurance (IAS). Le conseil en investissement financier (statut CIF) est en cours d'agrément. Pour toute opération sur cryptoactifs, nous orientons vers des partenaires PSAN enregistrés auprès de l'AMF.
            </p>
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
              <h3 className="font-heading text-lg font-semibold mb-2">Avertissement sur les risques</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Les cryptoactifs sont des instruments hautement volatils, non garantis, susceptibles d'entraîner une perte partielle ou totale du capital investi. Les performances passées ne préjugent pas des performances futures. Avant toute décision, il est indispensable de disposer d'une épargne de précaution, d'un patrimoine structuré, et de ne mobiliser qu'une somme dont la perte serait supportable. Les informations présentées sur cette page sont purement pédagogiques et ne constituent pas un conseil en investissement au sens de l'article L.321-1 du Code monétaire et financier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-mahogany text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Bitcoin className="w-10 h-10 text-copper mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Structurer d'abord votre patrimoine
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Avant d'envisager toute exposition aux cryptoactifs, un bilan patrimonial permet de vérifier les fondations : épargne de précaution, protection famille, retraite, fiscalité. RETIRO vous accompagne sur ces leviers cœur de métier (assurance vie, PER, prévoyance). Pour la mise en œuvre crypto, nous vous orientons vers des partenaires PSAN agréés AMF.
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