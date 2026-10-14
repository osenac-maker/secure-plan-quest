import { AlertTriangle, TrendingDown, Clock, HelpCircle, Sparkles } from "lucide-react";
import SourceNote from "@/components/SourceNote";
import { motion } from "framer-motion";

const problems = [
  { icon: TrendingDown, title: "Quel revenu à la retraite ?", desc: "Vos droits dépendent de votre carrière, de votre régime et de l'âge de départ. Un relevé de carrière est nécessaire pour estimer l'écart avec le revenu souhaité.", source: "https://www.info-retraite.fr", hypotheses: "carrière individuelle, revenus cotisés et âge de départ à examiner ; aucun taux de remplacement universel." },
  { icon: AlertTriangle, title: "Quel plafond de déduction pour votre PER ?", desc: "Pour les indépendants éligibles : jusqu'à 10 % du bénéfice, plus 15 % de la part comprise entre 1 et 8 PASS (plafond des indépendants). La première part est plafonnée à 8 PASS ; le régime fiscal et les autres cotisations déductibles doivent être vérifiés.", source: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047288764", hypotheses: "bénéfice imposable au réel, PASS de l'année et cotisations déjà déduites ; la micro-entreprise relève de règles différentes." },
  { icon: Clock, title: "Quel horizon pour votre épargne ?", desc: "Commencer plus tôt allonge la durée des versements et de leur éventuelle capitalisation. Le capital final dépend des sommes versées, des frais, du rendement et des risques pris.", source: "https://www.service-public.fr/particuliers/vosdroits/F34982", hypotheses: "versements, durée et supports à définir ; aucun rendement garanti sur les unités de compte." },
  { icon: HelpCircle, title: "Quelle protection pour vos revenus et votre famille ?", desc: "Arrêt de travail, invalidité, décès : comparez vos droits obligatoires à vos charges personnelles et familiales avant d'étudier une couverture complémentaire.", source: "https://entreprendre.service-public.gouv.fr/vosdroits/F36238", hypotheses: "profession, régime obligatoire et garanties contractuelles propres à chaque situation." },
];

const ProblemSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.p
          className="text-copper font-medium text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Les points à examiner
        </motion.p>
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vous avez tout construit.{" "}
          <span className="text-gradient-gold">Mais qu'avez-vous prévu pour après ?</span>
        </motion.h2>
        <motion.div
          className="divider-gold mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <motion.p
          className="text-muted-foreground text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Moins d'impôts, une retraite à la hauteur de vos efforts, une famille protégée : ces trois objectifs sont atteignables avec la bonne stratégie.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            className="flex gap-5 p-6 rounded-lg bg-card border border-border hover:border-copper/30 shadow-card hover:shadow-card-hover transition-all duration-500"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-copper/15 to-mahogany/10 flex items-center justify-center shrink-0">
              <p.icon className="w-5 h-5 text-copper" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <SourceNote href={p.source} hypotheses={p.hypotheses} />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 flex items-center justify-center gap-3 text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Sparkles className="w-5 h-5 text-copper shrink-0" />
        <p className="text-lg font-heading font-semibold text-foreground">
          Une démarche structurée : <span className="text-gradient-gold">évaluer, comparer et décider selon vos besoins.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
