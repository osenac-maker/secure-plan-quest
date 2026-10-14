import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Pourquoi un indépendant ou dirigeant a-t-il besoin d'un accompagnement patrimonial spécifique ?",
    a: "Contrairement aux salariés, les indépendants et dirigeants ne bénéficient ni d'un plan retraite d'entreprise, ni d'une prévoyance collective solide. Leur protection sociale de base est souvent insuffisante et leurs revenus fluctuent. Un accompagnement dédié permet de structurer l'épargne retraite, sécuriser la famille et l'activité, et optimiser la fiscalité — trois leviers qui ne sont pas traités par les banques classiques.",
  },
  {
    q: "Quelle différence entre assurance vie, PER et prévoyance — et ai-je besoin des trois ?",
    a: "Le PER prépare la retraite avec une déduction fiscale immédiate, mais bloque le capital. L'assurance vie est une enveloppe patrimoniale souple, disponible à tout moment, idéale pour l'épargne moyen/long terme et la transmission. La prévoyance protège vos revenus et votre famille en cas d'arrêt, d'invalidité ou de décès. Les trois sont complémentaires : la bonne combinaison dépend de votre situation, votre TMI et vos objectifs.",
  },
  {
    q: "À partir de quel niveau de revenus est-ce vraiment utile de s'en occuper ?",
    a: "Nous accompagnons principalement les profils dont les revenus d'activité dépassent 60 000 €/an, car c'est à ce niveau que les leviers fiscaux (PER, assurance vie, arbitrages) deviennent significatifs. Pour la prévoyance en revanche, tout indépendant est concerné dès le premier euro de revenu, quel que soit son niveau : la couverture Sécurité sociale est très faible.",
  },
  {
    q: "Mon capital est-il garanti ? Que se passe-t-il si les marchés baissent ?",
    a: "Cela dépend des supports choisis. Le fonds euros de l'assurance vie garantit le capital versé (hors frais). Les unités de compte (ETF, SCPI, OPCVM) offrent un potentiel de performance supérieur mais comportent un risque de perte en capital. Notre rôle est d'ajuster l'allocation à votre profil et votre horizon, pour lisser les fluctuations sans renoncer à la performance long terme.",
  },
  {
    q: "Puis-je récupérer mon argent en cas de coup dur ?",
    a: "L'assurance vie est disponible à tout moment via des rachats partiels ou totaux, sans pénalité sur la grande majorité des contrats. Certains supports spécifiques (immobilier, private equity) peuvent toutefois prévoir des conditions de sortie particulières — nous vous les précisons systématiquement avant souscription. Le PER est bloqué jusqu'à la retraite mais prévoit des cas de déblocage anticipé : achat de la résidence principale, invalidité, décès du conjoint, fin de droits chômage, surendettement, liquidation judiciaire. La prévoyance, elle, verse des indemnités en cas d'arrêt de travail, d'invalidité ou de décès.",
  },
  {
    q: "Combien ça coûte, et comment RETIRO est-il rémunéré ?",
    a: "Le bilan initial est offert. Modes de rémunération (commissions assureurs et/ou honoraires), montants et modalités : [À COMPLÉTER]. Nous nous engageons à afficher la rémunération perçue et les frais pour chaque produit recommandé ; le détail figure sur la page Rémunération.",
  },
  {
    q: "Comment se déroule un bilan patrimonial, et à quoi je m'engage ?",
    a: "Le questionnaire fournit une première estimation avant de demander votre email. Vous pouvez ensuite demander un rapport complet et, séparément, cocher la demande de rappel. Sans cette case cochée, aucun rappel n'est demandé. Une analyse individuelle avec un conseiller est nécessaire avant toute recommandation, sans engagement de souscription.",
  },
  {
    q: "En quoi RETIRO est-il différent de ma banque ou de mon expert-comptable ?",
    a: "Votre banque distribue les produits de son groupe ; votre expert-comptable optimise la fiscalité de votre entreprise. RETIRO est un cabinet indépendant enregistré ORIAS, spécialisé sur les problématiques patrimoniales des indépendants et dirigeants. Nous sélectionnons les contrats parmi plusieurs compagnies et construisons une stratégie sur mesure, articulée entre votre activité, votre patrimoine et votre foyer.",
  },
];

const FaqItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border border-border rounded-xl bg-card overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/30 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm md:text-base font-medium text-foreground">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-copper flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </motion.div>
  );
};

const FAQSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 text-copper font-semibold text-xs tracking-widest uppercase mb-3">
          <HelpCircle className="w-4 h-4" />
          Questions fréquentes
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Vos questions, nos réponses
        </h2>
        <div className="divider-gold mx-auto mb-4" style={{ width: 60 }} />
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
          Tout ce qu'un indépendant ou dirigeant doit comprendre avant de structurer son patrimoine.
        </p>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((f, i) => (
          <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
        ))}
      </div>

      <p className="mt-8 text-xs text-muted-foreground/80 italic text-center font-heading leading-relaxed max-w-2xl mx-auto">
        Ces informations sont données à titre général et pédagogique ; elles ne constituent pas un conseil personnalisé, lequel nécessite une analyse individuelle de votre situation.
      </p>
    </div>
  </section>
);

export default FAQSection;