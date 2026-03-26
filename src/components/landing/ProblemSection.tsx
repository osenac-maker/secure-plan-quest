import { AlertTriangle, TrendingDown, Clock, HelpCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: TrendingDown,
    title: "Votre retraite sera 2 à 3 fois plus faible que prévu",
    desc: "En tant que dirigeant ou indépendant, vos cotisations obligatoires ne financent qu'une fraction de votre retraite. Concrètement, si vous gagnez 80 000 € aujourd'hui, vous pourriez toucher moins de 30 000 € par an à la retraite — soit une baisse de 60 % de votre niveau de vie.",
  },
  {
    icon: AlertTriangle,
    title: "Vous laissez des milliers d'euros au fisc chaque année",
    desc: "Le PER permet de déduire jusqu'à 10 % de vos revenus de votre revenu imposable. Sur 80 000 € de revenus, cela représente jusqu'à 8 000 € de déduction, soit jusqu'à 3 200 € d'impôts en moins selon votre tranche — tout en constituant votre capital retraite.",
  },
  {
    icon: Clock,
    title: "Plus vous attendez, plus ça vous coûte cher",
    desc: "Un versement de 500 €/mois démarré à 40 ans génère en moyenne 2 fois plus de capital qu'un versement identique démarré à 50 ans. Chaque année sans stratégie, ce sont des milliers d'euros de capital retraite en moins.",
  },
  {
    icon: HelpCircle,
    title: "Votre famille n'est pas protégée en cas d'accident de vie",
    desc: "Arrêt de travail, invalidité, décès : les indemnités du régime obligatoire couvrent rarement plus de 50 % de vos revenus. Sans prévoyance complémentaire, vos charges continuent alors que vos revenus s'arrêtent.",
  },
];

const ProblemSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.p
          className="text-copper font-medium text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ce que personne ne vous dit
        </motion.p>
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vous avez tout construit.{" "}
          <span className="text-gradient-gold">Mais qu'avez-vous prévu pour après ?</span>
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
          Moins d'impôts, une retraite à la hauteur de vos efforts, une famille protégée : ces trois objectifs sont atteignables avec la bonne stratégie.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            className="flex gap-5 p-6 rounded-lg bg-card border border-border hover:border-copper/30 shadow-card hover:shadow-card-hover transition-all duration-500"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-copper/15 to-mahogany/10 flex items-center justify-center shrink-0">
              <p.icon className="w-5 h-5 text-copper" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 flex items-center justify-center gap-3 text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Sparkles className="w-5 h-5 text-copper shrink-0" />
        <p className="text-lg font-heading font-semibold text-foreground">
          La bonne nouvelle : <span className="text-gradient-gold">tout cela est évitable avec la bonne stratégie.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
