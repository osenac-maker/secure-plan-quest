import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect } from "react";

const stats = [
  { value: 2500, suffix: "+", label: "Clients accompagnés" },
  { value: 8400, suffix: " €", label: "Économie fiscale moyenne" },
  { value: 98, suffix: "%", label: "Taux de satisfaction" },
  { value: 48, suffix: "h", label: "Délai de prise en charge" },
];

const testimonials = [
  {
    name: "Sophie M.",
    role: "Freelance développeuse",
    text: "Grâce à RETIRO Patrimoine, j'ai économisé 7 200 € d'impôts dès la première année avec un PER adapté à ma situation.",
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

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
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
    <span className="font-heading text-3xl md:text-4xl font-bold text-copper">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
};

const SocialProofSection = () => (
  <section className="py-24 bg-navy-deep relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <AnimatedNumber value={s.value} suffix={s.suffix} />
            <div className="text-sm text-white/50 mt-2">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="divider-gold mx-auto mb-12" />

      {/* Testimonials */}
      <div className="text-center mb-12">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ils nous font confiance
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-copper/30 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <Quote className="w-8 h-8 text-copper/30 mb-4" />
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-copper text-copper" />
              ))}
            </div>
            <p className="text-sm text-white/70 mb-5 leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-copper/20 flex items-center justify-center text-copper font-semibold text-sm">
                {t.avatar}
              </div>
              <div>
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-xs text-white/50">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
