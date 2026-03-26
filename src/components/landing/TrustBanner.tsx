import { Award, Users, Handshake, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: Award,
    label: "15 ans d'expertise",
    detail: "en gestion de patrimoine",
  },
  {
    icon: Users,
    label: "Spécialiste indépendants",
    detail: "dirigeants & indépendants",
  },
  {
    icon: Handshake,
    label: "Partenaires de confiance",
    detail: "assureurs de premier plan",
  },
  {
    icon: UserCheck,
    label: "Conseil personnalisé",
    detail: "un interlocuteur unique",
  },
];

const TrustBanner = () => (
  <section className="py-12 bg-card border-y border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trustItems.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-copper/15 to-mahogany/10 flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-copper" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.detail}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBanner;
