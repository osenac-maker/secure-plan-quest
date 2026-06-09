import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Globe, Percent, Layers, TrendingUp, Info } from "lucide-react";
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
    titre: "Frais réduits",
    desc: "Les ETF affichent généralement des frais courants inférieurs à 0,3 % par an, contre 1,5 à 2,5 % pour de nombreux fonds actifs. Sur un horizon long, cet écart pèse mécaniquement sur la performance nette.",
  },
  {
    icon: Globe,
    titre: "Diversification large",
    desc: "Un ETF répliquant un indice mondial expose à plusieurs centaines voire milliers de sociétés sur de nombreux pays. La diversification est l'un des piliers reconnus de la gestion de portefeuille.",
  },
  {
    icon: Layers,
    titre: "Accessibles via assurance vie et PER",
    desc: "De nombreux contrats d'assurance vie et de PER proposent des unités de compte de type ETF. C'est le canal sur lequel RETIRO, en qualité de courtier IAS, peut vous accompagner.",
  },
  {
    icon: TrendingUp,
    titre: "Approche long terme",
    desc: "Les ETF actions s'inscrivent dans une logique de placement long terme. Les performances passées ne préjugent pas des performances futures et le capital investi est soumis aux fluctuations des marchés (risque de perte en capital).",
  },
];

const enveloppes = [
  { nom: "Assurance Vie (UC ETF)", avantage: "Fiscalité allégée après 8 ans, transmission optimisée", ideal: "Horizon 8 ans et plus — distribué par RETIRO" },
  { nom: "PER (UC ETF)", avantage: "Versements déductibles du revenu imposable (dans les plafonds en vigueur)", ideal: "Préparation retraite — distribué par RETIRO" },
  { nom: "PEA", avantage: "Exonération d'impôt sur les plus-values après 5 ans (hors prélèvements sociaux)", ideal: "Compte-titres bancaire — hors périmètre RETIRO" },
  { nom: "Compte-titres", avantage: "Liberté d'arbitrage, pas d'avantage fiscal spécifique", ideal: "Compte-titres bancaire — hors périmètre RETIRO" },
];

const ETF = () => {
  useSEO({
    title: "Comprendre les ETF en assurance vie et PER | RETIRO Patrimoine",
    description: "Page pédagogique sur les ETF accessibles en unités de compte au sein de votre assurance vie ou PER. Contenu informatif, ne constitue pas un conseil en investissement.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-ivory to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.span {...fadeUp()} className="inline-block text-xs tracking-[0.25em] uppercase text-copper font-medium mb-6">
            ETF en unités de compte · Page pédagogique
          </motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            ETF :{" "}
            <span className="text-gradient-gold">une brique de diversification long terme</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Un ETF (Exchange Traded Fund) est un fonds indiciel coté qui réplique un indice boursier. En tant que courtier en assurance, RETIRO peut vous accompagner sur l'intégration d'ETF en unités de compte au sein de votre assurance vie ou de votre PER. Cette page est purement informative et ne constitue pas un conseil en investissement.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-3">
            <Link to="/simulateur">
              <Button size="lg" className="bg-copper hover:bg-copper-light text-white">
                Mon bilan patrimonial offert
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
          <motion.div {...fadeUp(0.4)} className="mt-6 flex gap-3 p-4 rounded-lg bg-copper/5 border border-copper/20 max-w-3xl">
            <Info className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              RETIRO Patrimoine est immatriculée à l'ORIAS en qualité de courtier en assurance (IAS). Le statut de Conseiller en Investissements Financiers (CIF) est en cours d'agrément. À ce titre, nous intervenons sur les ETF accessibles en unités de compte dans le cadre de l'assurance vie ou du PER. Les ETF sont des supports en unités de compte non garantis en capital : risque de perte, performances passées non garanties.
            </p>
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
            Dans quelle enveloppe loger des ETF ?
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Chaque enveloppe a sa propre fiscalité. RETIRO intervient sur les unités de compte ETF en assurance vie et PER. Le PEA et le compte-titres relèvent d'établissements bancaires et ne font pas partie de notre périmètre actuel.
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
            Structurer votre épargne long terme
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Un bilan patrimonial offert pour évaluer la place que peuvent occuper des unités de compte ETF au sein de votre assurance vie ou de votre PER, dans le cadre d'une stratégie globale adaptée à votre situation et à votre horizon.
          </p>
          <Link to="/simulateur">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white">
              Mon bilan patrimonial offert
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