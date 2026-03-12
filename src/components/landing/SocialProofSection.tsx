import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "2 500+", label: "Clients accompagnés" },
  { value: "8 400 €", label: "Économie fiscale moyenne" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "48h", label: "Délai de prise en charge" },
];

const testimonials = [
  {
    name: "Sophie M.",
    role: "Freelance développeuse",
    text: "Grâce à PatrimoineDigital, j'ai économisé 7 200 € d'impôts dès la première année avec un PER adapté à ma situation.",
  },
  {
    name: "Thomas R.",
    role: "Dirigeant PME",
    text: "Le simulateur m'a ouvert les yeux sur le manque à gagner de ma retraite. Mon conseiller m'a proposé un plan clair et efficace.",
  },
  {
    name: "Marie L.",
    role: "Consultante indépendante",
    text: "Un accompagnement professionnel et humain. Je recommande à tous les indépendants qui veulent optimiser leur situation.",
  },
];

const SocialProofSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="text-center mb-10">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Ils nous font confiance</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-background rounded-xl p-6 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-warning text-warning" />
              ))}
            </div>
            <p className="text-sm text-foreground mb-4 leading-relaxed">"{t.text}"</p>
            <div>
              <div className="font-semibold text-foreground text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
