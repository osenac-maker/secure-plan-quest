import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ExplainableAnalysisSection = () => (
  <section className="py-24 bg-card" aria-labelledby="explainable-title">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 id="explainable-title" className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Une IA qui <span className="text-gradient-gold">s'explique</span></h2>
      <div className="divider-gold mx-auto mb-6" />
      <p className="text-sm text-muted-foreground text-center mb-8">Exemple fictif à visée pédagogique : étudier un PER pour un indépendant qui prépare sa retraite, sans recommander de contrat particulier.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { titre: "Pourquoi ce produit", texte: "Un PER peut être étudié pour préparer un complément de retraite si l'épargne de précaution est suffisante et si le blocage de l'épargne est compatible avec les projets." },
          { titre: "Critères pris en compte", texte: "Horizon avant la retraite, statut fiscal, plafond disponible, capacité d'épargne, besoins de liquidité, situation familiale et tolérance au risque." },
          { titre: "Alternatives écartées et pourquoi", texte: "Dans cet exemple, une épargne bancaire disponible ne répond pas seule à l'objectif de retraite ; elle reste nécessaire pour les imprévus. L'assurance vie n'est pas écartée par principe : sa souplesse doit être comparée à la déduction et au blocage du PER." },
          { titre: "Sources documentaires", texte: "Service-Public : fonctionnement du PER ; impots.gouv.fr : déduction des versements ; document d'informations clés et conditions du contrat : [À COMPLÉTER]." },
          { titre: "Avantages et limites", texte: "Déduction éventuelle à l'entrée et complément de retraite, mais épargne normalement bloquée, fiscalité à la sortie, frais et risque de perte sur les unités de compte. La rémunération du distributeur doit être présentée avant toute décision." },
        ].map((bloc, i) => (
          <motion.div key={bloc.titre} className="p-6 rounded-lg bg-background border border-border shadow-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{bloc.titre}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{bloc.texte}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-6">Cette analyse est produite avec l'aide d'une intelligence artificielle et validée par un conseiller.</p>
      <p className="text-xs text-muted-foreground mt-2">Illustration de la méthode ; ce contenu n'est pas une recommandation personnalisée ni un rapport déjà signé.</p>
      <div className="flex flex-wrap gap-4 mt-4 text-xs text-copper">
        <a href="https://www.service-public.fr/particuliers/vosdroits/F34982" target="_blank" rel="noopener noreferrer" className="underline">Service-Public — PER</a>
        <a href="https://www.impots.gouv.fr/particulier/epargne-retraite" target="_blank" rel="noopener noreferrer" className="underline">Impôts — épargne retraite</a>
      </div>
    </div>
  </section>
);

export const IllustrativeProfilesSection = () => (
  <section className="py-24 bg-background" aria-labelledby="profiles-title">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 id="profiles-title" className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Des situations, des questions à étudier</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { profil: "Médecin libéral, 45 ans", situation: "Exerce en cabinet et prépare sa retraite.", probleme: "Écart entre les droits de retraite acquis et le revenu souhaité, protection en cas d'arrêt à examiner.", leviers: "Relevé de carrière, PER selon le plafond disponible, prévoyance adaptée à l'exercice médical." },
          { profil: "Gérant majoritaire de SARL, 52 ans", situation: "Dirige son entreprise et prépare la suite de son activité.", probleme: "Dépendance aux revenus de l'entreprise et articulation entre retraite, protection familiale et patrimoine personnel.", leviers: "Droits obligatoires, PER, assurance vie et garanties d'invalidité ou de décès selon les besoins." },
          { profil: "Consultant indépendant, 38 ans", situation: "Revenus variables et projets personnels à moyen terme.", probleme: "Concilier liquidité, protection des revenus et épargne longue.", leviers: "Épargne de précaution, prévoyance, comparaison de l'assurance vie et du PER selon le régime fiscal." },
        ].map((profil, i) => (
          <motion.div key={profil.profil} className="p-6 rounded-lg bg-card border border-border shadow-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
            <p className="text-xs text-copper font-medium mb-2">Exemple illustratif</p>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{profil.profil}</h3>
            <dl className="text-sm text-muted-foreground leading-relaxed space-y-3">
              <div><dt className="font-semibold text-foreground">Situation</dt><dd>{profil.situation}</dd></div>
              <div><dt className="font-semibold text-foreground">Problème identifié</dt><dd>{profil.probleme}</dd></div>
              <div><dt className="font-semibold text-foreground">Leviers étudiés</dt><dd>{profil.leviers}</dd></div>
            </dl>
            <p className="text-xs text-muted-foreground mt-5 italic">Exemple fictif à visée pédagogique</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const RemunerationSection = () => (
  <section className="py-20 bg-card" aria-labelledby="remuneration-title">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 id="remuneration-title" className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-10">Comment nous sommes rémunérés</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { titre: "Qui nous paie", texte: "Commissions versées par les assureurs et/ou honoraires à votre charge : [À COMPLÉTER]. Le mode retenu vous est communiqué avant tout engagement." },
          { titre: "Quel montant", texte: "Ordres de grandeur, assiettes de calcul et fréquence des versements : [À COMPLÉTER]. Aucun montant standard n'est présenté sans vérification." },
          { titre: "Pour chaque produit", texte: "Nous nous engageons à afficher la rémunération perçue pour chaque produit recommandé, en distinguant les commissions, les honoraires éventuels et les frais du contrat." },
        ].map((point) => <div key={point.titre} className="border-t border-border pt-5"><h3 className="font-heading text-lg font-semibold text-foreground mb-3">{point.titre}</h3><p className="text-sm text-muted-foreground leading-relaxed">{point.texte}</p></div>)}
      </div>
      <div className="text-center mt-8"><Button asChild variant="outline" className="gap-2 border-copper text-copper hover:bg-copper/10"><Link to="/remuneration">Consulter le détail <ArrowRight className="w-4 h-4" /></Link></Button></div>
    </div>
  </section>
);