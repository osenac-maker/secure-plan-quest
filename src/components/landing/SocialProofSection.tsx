import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const stats = [
  { value: 2500, suffix: "+", label: "Dirigeants & indépendants accompagnés", prefix: "" },
  { value: 8400, suffix: "€", label: "D'économies fiscales en moyenne par an", prefix: "" },
  { value: 98, suffix: "%", label: "De clients satisfaits", prefix: "" },
  { value: 15, suffix: "min", label: "Pour obtenir votre bilan complet", prefix: "" },
];

const testimonials = [
  {
    name: "Sophie M.",
    role: "Freelance développeuse",
    text: "Grâce à RETIRO, j'ai réduit mes impôts de 7 200 € dès la première année tout en me constituant un capital retraite. Je regrette de ne pas avoir commencé plus tôt.",
    saving: "−7 200 € d'impôts / an",
  },
  {
    name: "Thomas R.",
    role: "Dirigeant PME",
    text: "Le simulateur m'a montré que ma retraite serait 60 % inférieure à mes revenus actuels. Mon conseiller a mis en place un plan clair en 3 semaines.",
    saving: "Plan en 3 semaines",
  },
  {
    name: "Marie L.",
    role: "Consultante indépendante",
    text: "Enfin un accompagnement sérieux et humain. Pas de jargon, pas de pression. Mon conseiller m'a expliqué chaque option clairement. Je recommande les yeux fermés.",
    saving: "Recommande à 100%",
  },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (value >= 1000) return Math.round(v).toLocaleString("fr-FR");
    return Math.round(v).toString();
  });

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.2, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return (
    <motion.span>{rounded}</motion.span>
  );
};

const SocialProofSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">

      {/* Stats — style cabinet conseil */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden shadow-card mb-24">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="bg-card flex flex-col items-center justify-center py-10 px-6 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="font-heading text-4xl md:text-5xl font-bold text-copper tracking-tight leading-none mb-1">
              <AnimatedNumber value={s.value} suffix="" />
              <span className="text-2xl md:text-3xl ml-0.5">{s.suffix}</span>
            </div>
            <div className="w-8 h-px bg-copper/40 my-3" />
            <p className="text-xs text-muted-foreground uppercase tracking-widest leading-relaxed max-w-[140px]">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="text-center mb-14">
        <motion.p
          className="text-copper font-medium text-xs tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Témoignages clients
        </motion.p>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="relative bg-card rounded-xl p-8 border border-border hover:border-copper/30 transition-all duration-500 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            {/* Trait décoratif */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />

            {/* Étoiles */}
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-3.5 h-3.5 fill-copper text-copper" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-sm text-foreground/75 leading-relaxed italic flex-1 mb-6">
              « {t.text} »
            </p>

            <div className="flex items-center justify-between pt-5 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-copper/10 flex items-center justify-center text-copper font-semibold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <span className="text-xs font-medium text-copper bg-copper/8 px-2.5 py-1 rounded-full whitespace-nowrap">
                {t.saving}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
