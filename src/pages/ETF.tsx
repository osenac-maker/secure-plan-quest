import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Globe, Percent, Layers, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const avantages = [
  {
    icon: Percent,
    titre: "Frais ultra-réduits",
    desc: "Frais de gestion généralement inférieurs à 0,3 % par an, contre 1,5 à 2,5 % pour un fonds actif. Sur 20 ans, l'écart de performance composée est considérable.",
  },
  {
    icon: Globe,
    titre: "Diversification mondiale",
    desc: "Un seul ETF World expose votre épargne à plus de 1 500 entreprises réparties sur 23 pays développés. Diversification instantanée, sans stock-picking hasardeux.",
  },
  {
    icon: Layers,
    titre: "Multi-enveloppes",
    desc: "Accessibles via PER, assurance vie, PEA ou compte-titres — chaque enveloppe ayant sa propre fiscalité. Nous choisissons la bonne combinaison selon vos objectifs.",
  },
  {
    icon: TrendingUp,
    titre: "Performance long terme",
    desc: "Sur 20 ans, un ETF MSCI World a délivré ~8 % par an en moyenne. La régularité (DCA) et la durée sont les deux clés d'une allocation ETF performante.",
  },
];

const enveloppes = [
  { nom: "Assurance Vie", avantage: "Fiscalité allégée après 8 ans, transmission optimisée", ideal: "Horizon 8 ans+" },
  { nom: "PER", avantage: "Versements déductibles du revenu imposable", ideal: "Préparation retraite" },
  { nom: "PEA", avantage: "Exonération d'impôt sur les plus-values après 5 ans", ideal: "Actions européennes" },
  { nom: "Compte-titres", avantage: "Liberté totale d'arbitrage et de retrait", ideal: "Court terme, ETF non éligibles ailleurs" },
];

const ETF = () => {
  useSEO({
    title: "Investir en ETF — Trackers indiciels | RETIRO Patrimoine",
    description: "Les ETF (trackers) répliquent les grands indices mondiaux à frais réduits. Stratégie d'investissement long terme via PER, assurance vie ou PEA — RETIRO vous accompagne.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-ivory to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.span {...fadeUp()} className="inline-block text-xs tracking-[0.25em] uppercase text-copper font-medium mb-6">
            Trackers indiciels · Long terme
          </motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            ETF :{" "}
            <span className="text-gradient-gold">la performance des marchés, sans les frais</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Un ETF (Exchange Traded Fund) réplique un indice boursier — MSCI World, S&P 500, CAC 40 — pour quelques dixièmes de pourcent de frais par an. C'est la brique de diversification la plus efficace pour construire un capital sur 10, 20 ou 30 ans.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-3">
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white">
                Construire mon allocation ETF
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {avantages.map((a, i) => (
              <motion.div
                key={a.titre}
                {...fadeUp(i * 0.08)}
                className="p-8 rounded-2xl bg-card border border-border hover:border-copper/30 shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center mb-5">
                  <a.icon className="w-5 h-5 text-copper" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{a.titre}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 {...fadeUp()} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Quelle enveloppe pour vos ETF ?
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Chaque enveloppe a sa propre fiscalité. Le bon mix dépend de votre horizon, de votre tranche marginale d'imposition et de vos objectifs de transmission.
          </motion.p>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <table className="w-full text-left">
              <thead className="bg-mahogany text-white">
                <tr>
                  <th className="px-6 py-4 font-heading font-semibold">Enveloppe</th>
                  <th className="px-6 py-4 font-heading font-semibold">Avantage clé</th>
                  <th className="px-6 py-4 font-heading font-semibold">Idéal pour</th>
                </tr>
              </thead>
              <tbody>
                {enveloppes.map((e, i) => (
                  <tr key={e.nom} className={i % 2 === 0 ? "bg-background" : "bg-card"}>
                    <td className="px-6 py-4 font-medium text-foreground">{e.nom}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{e.avantage}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{e.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-mahogany text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <LineChart className="w-10 h-10 text-copper mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Construisons votre portefeuille ETF
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Bilan offert pour définir l'allocation, les enveloppes et la stratégie de versement adaptés à votre situation.
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

export default ETF;