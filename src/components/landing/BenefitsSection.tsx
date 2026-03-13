import { Compass, TrendingUp, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import sectionMeeting from "@/assets/section-meeting.jpg";

const benefits = [
  {
    icon: Compass,
    title: "Optimisation fiscale ciblée",
    desc: "Nous identifions chaque levier fiscal adapté à votre statut pour réduire votre imposition — légalement et durablement.",
  },
  {
    icon: TrendingUp,
    title: "Retraite anticipée et chiffrée",
    desc: "Vous savez exactement combien vous toucherez à la retraite et quels dispositifs activer pour combler l'écart.",
  },
  {
    icon: Heart,
    title: "Protection complète",
    desc: "Vos revenus, votre famille et votre entreprise sont protégés — même en cas d'imprévu. Zéro zone d'ombre.",
  },
  {
    icon: Shield,
    title: "Un interlocuteur unique",
    desc: "Un conseiller patrimonial dédié coordonne l'ensemble de votre stratégie. Pas de call center, pas de turnover.",
  },
];

const BenefitsSection = () => (
  <section className="py-24 bg-card">
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
            Comme un commandant de bord, nous vous aidons à garder le cap sur vos objectifs patrimoniaux. Notre expertise fiscale et sociale vous assure un vol sans turbulence vers la sérénité financière.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            À chaque étape de votre parcours, votre copilote dédié vous guide avec précision et bienveillance vers la réalisation de tous vos projets.
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
            alt="Conseil patrimonial premium"
            className="rounded-lg shadow-xl w-full object-cover h-80"
          />
          <div className="absolute -bottom-3 -left-3 w-20 h-20 border-2 border-copper/40 rounded-lg" />
          <div className="absolute -top-3 -right-3 w-14 h-14 bg-copper/15 rounded-lg" />
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
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-copper/15 to-mahogany/10 flex items-center justify-center mx-auto mb-5 group-hover:from-copper/25 group-hover:to-mahogany/15 transition-all duration-300">
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
