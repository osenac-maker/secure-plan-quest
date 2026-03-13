import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, UserCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Complétez votre bilan en 2 min",
    desc: "5 questions simples sur votre situation. Pas besoin de documents : notre simulateur calcule instantanément votre retraite prévisionnelle et vos leviers fiscaux.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Recevez votre stratégie personnalisée",
    desc: "Un conseiller patrimonial analyse vos résultats et vous présente un plan d'action clair : combien économiser, comment, et avec quels dispositifs.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Passez à l'action, on s'occupe du reste",
    desc: "Mise en place, suivi, ajustements : votre conseiller dédié pilote votre stratégie et vous tient informé à chaque étape.",
  },
];

const HowItWorksSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.p
          className="text-copper font-medium text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          3 étapes, zéro paperasse
        </motion.p>
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Comment ça <span className="text-gradient-gold">marche ?</span>
        </motion.h2>
        <motion.div
          className="divider-gold mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            className="relative text-center p-8 rounded-lg bg-background border border-border shadow-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            {/* Step number */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-copper text-white text-xs font-bold flex items-center justify-center shadow-md">
              {s.step}
            </div>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-copper/15 to-mahogany/10 flex items-center justify-center mx-auto mb-5 mt-2">
              <s.icon className="w-6 h-6 text-copper" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-copper/40 to-copper/10" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/simulateur">
          <Button size="lg" className="bg-copper hover:bg-copper-light text-white text-base gap-2 font-medium px-10 border-0 group shadow-lg shadow-copper/30">
            Découvrir ma stratégie retraite →
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;
