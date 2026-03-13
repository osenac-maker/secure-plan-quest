import { AlertTriangle, TrendingDown, Clock, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: TrendingDown,
    title: "Votre retraite pourrait chuter de 50 à 70 %",
    desc: "Les régimes obligatoires des TNS et dirigeants sont parmi les moins généreux. Sans anticipation, c'est votre niveau de vie qui est en jeu.",
  },
  {
    icon: AlertTriangle,
    title: "Vous payez trop d'impôts — inutilement",
    desc: "PER, Madelin, article 83 : des dispositifs légaux permettent de réduire votre imposition de plusieurs milliers d'euros par an. Encore faut-il les activer.",
  },
  {
    icon: Clock,
    title: "Pas le temps de s'en occuper seul",
    desc: "Entre votre activité et la complexité des dispositifs, il est normal de repousser. C'est exactement pour cela que nous existons.",
  },
  {
    icon: HelpCircle,
    title: "Zéro filet de sécurité en cas d'imprévu",
    desc: "Arrêt de travail, invalidité, décès : sans prévoyance adaptée, vos revenus s'arrêtent mais vos charges continuent.",
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
          Dirigeants, indépendants :{" "}
          <span className="text-gradient-gold">votre patrimoine mérite mieux</span>
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
          Vous avez construit votre réussite. Mais avez-vous sécurisé votre avenir ?
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
    </div>
  </section>
);

export default ProblemSection;
