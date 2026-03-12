import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect } from "react";

const stats = [
  { value: 2500, suffix: "+", label: "Clients accompagnés", color: "text-primary" },
  { value: 8400, suffix: " €", label: "Économie fiscale moyenne", color: "text-accent" },
  { value: 98, suffix: "%", label: "Taux de satisfaction", color: "text-warning" },
  { value: 48, suffix: "h", label: "Délai de prise en charge", color: "text-primary" },
];

const testimonials = [
  {
    name: "Sophie M.",
    role: "Freelance développeuse",
    text: "Grâce à PatrimoineDigital, j'ai économisé 7 200 € d'impôts dès la première année avec un PER adapté à ma situation.",
    avatar: "S",
  },
  {
    name: "Thomas R.",
    role: "Dirigeant PME",
    text: "Le simulateur m'a ouvert les yeux sur le manque à gagner de ma retraite. Mon conseiller m'a proposé un plan clair et efficace.",
    avatar: "T",
  },
  {
    name: "Marie L.",
    role: "Consultante indépendante",
    text: "Un accompagnement professionnel et humain. Je recommande à tous les indépendants qui veulent optimiser leur situation.",
    avatar: "M",
  },
];

const AnimatedNumber = ({ value, suffix, color }: { value: number; suffix: string; color: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (value >= 1000) return Math.round(v).toLocaleString("fr-FR");
    return Math.round(v).toString();
  });

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return (
    <span className={`font-heading text-3xl md:text-4xl font-extrabold ${color}`}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
};

const SocialProofSection = () => (
  <section className="py-20 bg-card relative overflow-hidden">
    <div className="absolute inset-0 bg-mesh opacity-30" />
    <div className="container mx-auto px-4 relative z-10">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="text-center p-4 rounded-xl hover:bg-background/50 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
          >
            <AnimatedNumber value={s.value} suffix={s.suffix} color={s.color} />
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="text-center mb-10">
        <motion.h2
          className="font-heading text-3xl font-bold text-foreground mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ils nous font <span className="text-gradient-hero">confiance</span>
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="group bg-background rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}
                >
                  <Star className="w-4 h-4 fill-warning text-warning" />
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-foreground mb-5 leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.avatar}
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
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
