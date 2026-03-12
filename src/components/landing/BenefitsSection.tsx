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
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Pourquoi nous faire confiance ?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Plus de 2 500 indépendants et dirigeants nous font confiance pour optimiser leur patrimoine et préparer leur retraite.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
