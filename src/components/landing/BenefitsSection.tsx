import { Compass, TrendingUp, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import sectionMeeting from "@/assets/section-meeting.jpg";

const benefits = [
  {
    icon: Compass,
    title: "Moins d'impôts, plus de patrimoine",
    desc: "PER, Madelin, article 83 : nous activons tous les dispositifs légaux pour réduire votre imposition de plusieurs milliers d'euros par an — et rediriger cet argent vers votre patrimoine.",
  },
  {
    icon: TrendingUp,
    title: "Une retraite à la hauteur de vos efforts",
    desc: "Nous calculons précisément votre future pension, identifions l'écart avec votre niveau de vie actuel et mettons en place les dispositifs pour le combler — année après année.",
  },
  {
    icon: Heart,
    title: "Votre famille protégée quoi qu'il arrive",
    desc: "Arrêt de travail, invalidité, décès : nous vérifions que vos revenus et vos proches sont couverts, et nous comblons les lacunes de votre régime obligatoire avec des garanties sur mesure.",
  },
  {
    icon: Shield,
    title: "Un conseiller dédié, pas un call center",
    desc: "Votre conseiller patrimonial connaît votre dossier, votre statut, vos objectifs. Il coordonne votre stratégie fiscale, retraite et protection — et vous tient informé à chaque étape.",
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
            Notre <span className="text-gradient-gold">engagement</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            Depuis plus de 15 ans, nous accompagnons exclusivement les dirigeants, indépendants et professions libérales. Cette spécialisation nous permet de maîtriser chaque dispositif fiscal et social adapté à votre statut.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Courtier indépendant, nous travaillons avec les plus grandes compagnies d'assurance européennes pour vous proposer des solutions objectivement sélectionnées — sans conflit d'intérêt.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Chaque recommandation est fondée sur une analyse rigoureuse de votre situation. Votre intérêt passe toujours en premier.
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
          Pourquoi nos clients nous <span className="text-gradient-gold">recommandent</span>
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
