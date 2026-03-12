import { Shield, TrendingUp, Heart, Calculator } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Calculator,
    title: "Optimisation fiscale",
    desc: "Réduisez votre impôt sur le revenu grâce au PER et aux dispositifs patrimoniaux adaptés aux indépendants.",
    color: "from-primary to-primary/70",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Préparation retraite",
    desc: "Anticipez votre retraite avec un plan sur mesure qui comble le manque à gagner des régimes obligatoires.",
    color: "from-accent to-accent/70",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Heart,
    title: "Protection famille",
    desc: "Sécurisez vos revenus et votre famille avec des solutions de prévoyance et mutuelle adaptées.",
    color: "from-destructive to-destructive/70",
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
  },
  {
    icon: Shield,
    title: "Conseil expert",
    desc: "Un conseiller patrimonial dédié vous accompagne dans chaque étape de votre stratégie financière.",
    color: "from-warning to-warning/70",
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
  },
];

const BenefitsSection = () => (
  <section className="py-20 bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-mesh opacity-50" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-14">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pourquoi nous faire{" "}
          <span className="text-gradient-vivid">confiance</span> ?
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Plus de 2 500 indépendants et dirigeants nous font confiance pour optimiser leur patrimoine et préparer leur retraite.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 relative overflow-hidden cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${b.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <motion.div
              className={`w-12 h-12 rounded-xl ${b.iconBg} flex items-center justify-center mb-4`}
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
            >
              <b.icon className={`w-6 h-6 ${b.iconColor}`} />
            </motion.div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
