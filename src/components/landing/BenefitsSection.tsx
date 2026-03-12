import { Shield, TrendingUp, Heart, Calculator } from "lucide-react";
import { motion } from "framer-motion";
import sectionMeeting from "@/assets/section-meeting.jpg";

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
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      {/* Mission section with image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Notre <span className="text-gradient-gold">mission</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nos experts en gestion de patrimoine ont pour mission de vous accompagner tout au long de votre vie. Grâce à notre expertise sociale, fiscale et patrimoniale, nous vous proposons les solutions les plus adaptées à vos projets.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            À vos côtés à chaque étape, vos conseillers dédiés vous guident dans la réalisation de tous vos objectifs financiers.
          </p>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={sectionMeeting}
            alt="Conseil patrimonial personnalisé"
            className="rounded-lg shadow-xl w-full object-cover h-80"
          />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-copper/30 rounded-lg" />
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-copper/10 rounded-lg" />
        </motion.div>
      </div>

      {/* Benefits cards */}
      <div className="text-center mb-14">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="group text-center p-8 rounded-lg bg-background border border-border hover:border-copper/30 shadow-card hover:shadow-card-hover transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-14 h-14 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-copper/20 transition-colors duration-300">
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
