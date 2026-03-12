import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Mutuelle = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mutuelle freelance & indépendant :{" "}
          <span className="text-gradient-vivid">le guide pour bien choisir</span>
        </motion.h1>
        <motion.p
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          En tant que travailleur non salarié, vous ne bénéficiez pas d'une mutuelle d'entreprise. Choisir la bonne complémentaire santé est essentiel pour maîtriser vos frais médicaux.
        </motion.p>

        <motion.div
          className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          whileHover={{ y: -2 }}
        >
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Pourquoi souscrire une mutuelle TNS ?</h2>
          <div className="space-y-3">
            {[
              "Remboursements limités du régime obligatoire (SSI / CPAM)",
              "Restes à charge élevés en dentaire, optique et hospitalisation",
              "Cotisations déductibles du revenu imposable (loi Madelin)",
              "Couverture personnalisable selon votre profil et vos besoins",
              "Protection étendue à votre conjoint et vos enfants",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="flex items-start gap-3 group"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <Heart className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          whileHover={{ y: -2 }}
        >
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Les postes clés à vérifier</h2>
          <div className="space-y-3">
            {[
              "Hospitalisation : chambre particulière, dépassements d'honoraires",
              "Optique : montures + verres progressifs, lentilles",
              "Dentaire : couronnes, implants, orthodontie adulte",
              "Médecine douce : ostéopathie, acupuncture, psychologue",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="flex items-start gap-3 group"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          whileHover={{ y: -2 }}
        >
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Avantage fiscal Madelin</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Les cotisations de mutuelle Madelin sont déductibles de votre bénéfice imposable, dans la limite de 3,75 % du revenu + 7 % du PASS.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="bg-muted rounded-lg p-4 text-center group hover:bg-primary/5 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="font-heading text-2xl font-bold text-primary">1 800 €</div>
              <div className="text-xs text-muted-foreground">Cotisation annuelle moyenne</div>
            </motion.div>
            <motion.div
              className="bg-muted rounded-lg p-4 text-center group hover:bg-accent/5 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="font-heading text-2xl font-bold text-accent">540 €</div>
              <div className="text-xs text-muted-foreground">Économie d'impôt (TMI 30%)</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-hero animate-gradient rounded-2xl p-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/10 blur-2xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-3 animate-pulse-glow" />
          <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">Comparez les mutuelles TNS</h3>
          <p className="text-primary-foreground/70 text-sm mb-6">Notre audit inclut une analyse de votre couverture santé et des recommandations personnalisées.</p>
          <Link to="/simulateur">
            <Button size="lg" variant="secondary" className="gap-2 font-semibold group">
              Bilan gratuit <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Mutuelle;
