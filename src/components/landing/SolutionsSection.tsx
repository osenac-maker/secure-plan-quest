import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PiggyBank, Shield, HeartPulse, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: PiggyBank,
    title: "PER — Réduire ses impôts en épargnant",
    desc: "Le Plan d'Épargne Retraite vous permet de déduire vos versements de votre revenu imposable — jusqu'à 10 % de vos revenus professionnels. Concrètement, vous payez moins d'impôts chaque année tout en vous constituant un capital disponible à la retraite, en rente ou en capital.",
    link: "/per-independants",
    cta: "Comprendre le PER en détail",
  },
  {
    icon: BarChart3,
    title: "Retraite — Combler l'écart avec les salariés",
    desc: "Les dirigeants et indépendants cotisent moins que les salariés. Résultat : une retraite souvent 2 à 3 fois inférieure. Les dispositifs Article 83, Madelin et PER Obligatoire permettent de rattraper cet écart, avec des cotisations déductibles en partie financées par votre entreprise.",
    link: "/retraite-dirigeants",
    cta: "Voir les solutions retraite",
  },
  {
    icon: Shield,
    title: "Prévoyance — Protéger sa famille et ses revenus",
    desc: "En cas d'arrêt de travail, d'invalidité ou de décès, le régime obligatoire ne couvre qu'une fraction de vos revenus. La prévoyance complémentaire maintient vos revenus, protège votre conjoint et vos enfants — avec des cotisations déductibles de votre BNC ou BIC.",
    link: "/prevoyance",
    cta: "Évaluer ma couverture",
  },
  {
    icon: HeartPulse,
    title: "Mutuelle — Se soigner sans se ruiner",
    desc: "Les remboursements du régime obligatoire laissent des restes à charge importants en dentaire, optique et hospitalisation. La mutuelle Madelin vous offre de meilleurs remboursements avec un avantage fiscal : vos cotisations sont déductibles de votre revenu imposable.",
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
          Vos leviers patrimoniaux
        </motion.p>
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Moins d'impôts, plus de retraite, <span className="text-gradient-gold">une famille protégée</span>
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
          Chaque dispositif répond à l'un de vos trois enjeux clés : réduire vos impôts, préparer votre retraite, protéger vos proches. Nous les combinons en une stratégie globale, adaptée à votre statut et vos revenus.
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
