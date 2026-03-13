import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PiggyBank, Shield, HeartPulse, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: PiggyBank,
    title: "PER — Plan d'Épargne Retraite",
    desc: "Déduisez jusqu'à 10 % de vos revenus professionnels de votre assiette fiscale. Le PER est le levier n°1 d'optimisation pour les indépendants et dirigeants.",
    link: "/per-independants",
    cta: "Découvrir le PER",
  },
  {
    icon: BarChart3,
    title: "Stratégie Retraite Dirigeants",
    desc: "Article 83, contrat Madelin, PER Obligatoire : maximisez les dispositifs dédiés aux dirigeants pour vous constituer un capital retraite solide.",
    link: "/retraite-dirigeants",
    cta: "Voir les solutions",
  },
  {
    icon: Shield,
    title: "Prévoyance TNS",
    desc: "Protégez vos revenus et votre famille en cas d'arrêt de travail, d'invalidité ou de décès. Des garanties sur mesure déductibles de votre BNC/BIC.",
    link: "/prevoyance",
    cta: "Se protéger",
  },
  {
    icon: HeartPulse,
    title: "Mutuelle Santé TNS",
    desc: "Une complémentaire santé performante avec les avantages fiscaux de la Loi Madelin. Vos cotisations sont déductibles de vos revenus imposables.",
    link: "/mutuelle",
    cta: "Comparer les mutuelles",
  },
];

const SolutionsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.p
          className="text-copper font-medium text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nos expertises
        </motion.p>
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Des solutions <span className="text-gradient-gold">sur mesure</span> pour votre patrimoine
        </motion.h2>
        <motion.div
          className="divider-gold mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <motion.p
          className="text-muted-foreground text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Chaque situation est unique. Nous assemblons les meilleurs dispositifs pour construire votre stratégie patrimoniale globale.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            className="group p-8 rounded-lg bg-card border border-border hover:border-copper/30 shadow-card hover:shadow-card-hover transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-copper/15 to-mahogany/10 flex items-center justify-center mb-5 group-hover:from-copper/25 group-hover:to-mahogany/15 transition-all duration-300">
              <s.icon className="w-6 h-6 text-copper" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
            <Link to={s.link}>
              <Button variant="ghost" size="sm" className="text-copper hover:text-copper-light hover:bg-copper/5 gap-1.5 px-0 group/btn">
                {s.cta}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
