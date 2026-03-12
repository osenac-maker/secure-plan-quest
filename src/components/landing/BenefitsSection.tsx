import { Shield, TrendingUp, Heart, Calculator } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Calculator,
    title: "Optimisation fiscale",
    desc: "Réduisez votre impôt sur le revenu grâce au PER et aux dispositifs patrimoniaux adaptés aux indépendants.",
  },
  {
    icon: TrendingUp,
    title: "Préparation retraite",
    desc: "Anticipez votre retraite avec un plan sur mesure qui comble le manque à gagner des régimes obligatoires.",
  },
  {
    icon: Heart,
    title: "Protection famille",
    desc: "Sécurisez vos revenus et votre famille avec des solutions de prévoyance et mutuelle adaptées.",
  },
  {
    icon: Shield,
    title: "Conseil expert",
    desc: "Un conseiller patrimonial dédié vous accompagne dans chaque étape de votre stratégie financière.",
  },
];

const BenefitsSection = () => (
  <section className="py-24 bg-background relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pourquoi choisir <span className="text-gradient-gold">RETIRO</span> ?
        </motion.h2>
        <motion.div
          className="divider-gold mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Plus de 2 500 indépendants et dirigeants nous font confiance pour optimiser leur patrimoine et préparer leur retraite.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="group text-center p-8 rounded-lg border border-border hover:border-copper/30 bg-card shadow-card hover:shadow-card-hover transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-14 h-14 rounded-full border border-copper/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-copper/5 transition-colors duration-300">
              <b.icon className="w-6 h-6 text-copper" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
