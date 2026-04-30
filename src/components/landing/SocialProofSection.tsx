import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Star, Quote, TrendingDown, Wallet, ThumbsUp, Clock } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: 2500,
    suffix: "+",
    label: "Dirigeants accompagnés",
    icon: ThumbsUp,
  },
  {
    value: 8400,
    suffix: " €",
    label: "D'économies fiscales / an",
    icon: Wallet,
  },
  {
    value: 98,
    suffix: "%",
    label: "De clients satisfaits",
    icon: Star,
  },
  {
    value: 15,
    suffix: " min",
    label: "Pour votre bilan complet",
    icon: Clock,
  },
];

const testimonials = [
  {
    name: "Sophie M.",
    role: "Freelance développeuse",
    text: "Grâce à RETIRO, j'ai réduit mes impôts de 7 200 € dès la première année tout en me constituant un capital retraite. Je regrette de ne pas avoir commencé plus tôt.",
    avatar: "S",
    badge: "−7 200 € d'impôts / an",
    badgeColor: "text-emerald-600 bg-emerald-50",
  },
  {
    name: "Thomas R.",
    role: "Dirigeant PME",
    text: "Le simulateur m'a montré que ma retraite serait 60 % inférieure à mes revenus actuels. Mon conseiller a mis en place un plan clair en 3 semaines.",
    avatar: "T",
    badge: "Plan structuré en 3 semaines",
    badgeColor: "text-copper bg-copper/10",
  },
  {
    name: "Marie L.",
    role: "Consultante indépendante",
    text: "Enfin un accompagnement sérieux et humain. Pas de jargon, pas de pression. Mon conseiller m'a expliqué chaque option clairement. Je recommande les yeux fermés.",
    avatar: "M",
    badge: "Recommande à 100%",
    badgeColor: "text-teal-600 bg-teal-50",
  },
];

const AnimatedNumber = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (value >= 1000) return Math.round(v).toLocaleString("fr-FR");
    return Math.round(v).toString();
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return (
    <span className="font-heading text-4xl md:text-5xl font-bold text-copper">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const SocialProofSection = () => (
  <section className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 max-w-5xl mx-auto">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              className="relative text-center p-6 rounded-xl bg-white border border-border shadow-sm hover:shadow-md hover:border-copper/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-4 h-4 text-copper" />
              </div>
              <AnimatedNumber value={s.value} suffix={s.suffix} />
              <div className="text-xs text-muted-foreground mt-2 leading-snug uppercase tracking-wide">
                {s.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Séparateur */}
      <div className="flex items-center gap-4 max-w-3xl mx-auto mb-14">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground uppercase tracking-widest whitespace-nowrap">
          Témoignages clients
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Titre */}
      <div className="text-center mb-12">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ils ont repris le contrôle de{" "}
          <span className="text-gradient-gold">leur avenir</span>
        </motion.h2>
        <motion.div
          className="divider-gold mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
      </div>

      {/* Témoignages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md border border-border hover:border-copper/20 transition-all duration-500 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            {/* Étoiles */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Texte */}
            <Quote className="w-6 h-6 text-copper/20 mb-2 flex-shrink-0" />
            <p className="text-sm text-foreground/75 leading-relaxed flex-1">
              {t.text}
            </p>

            {/* Badge résultat */}
            <div className={`mt-4 mb-5 inline-flex self-start items-center text-xs font-semibold px-2.5 py-1 rounded-full ${t.badgeColor}`}>
              {t.badge}
            </div>

            {/* Auteur */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-copper/20 to-teal/20 flex items-center justify-center text-copper font-semibold text-sm flex-shrink-0">
                {t.avatar}
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
