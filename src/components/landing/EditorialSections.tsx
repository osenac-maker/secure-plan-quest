import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparison = [
  { label: "Analyse", classique: "manuelle", retiro: "IA + revue par un conseiller" },
  { label: "Justification", classique: "orale", retiro: "écrite et sourcée" },
  { label: "Rémunération", classique: "non détaillée", retiro: "affichée pour chaque produit" },
  { label: "Alternatives", classique: "rarement présentées", retiro: "listées et comparées" },
];

export const AdviceComparisonSection = () => (
  <section className="py-20 bg-background" aria-labelledby="comparison-title">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 id="comparison-title" className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
        Le conseil, en toute <span className="text-gradient-gold">transparence</span>
      </h2>
      <div className="divider-gold mx-auto mb-10" />
      <table className="w-full table-fixed text-sm border-collapse">
        <caption className="sr-only">Comparaison du conseil classique et de l'approche RETIRO</caption>
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="w-1/2 text-left font-heading text-lg text-foreground px-3 sm:px-6 py-4">Conseil classique</th>
            <th scope="col" className="w-1/2 text-left font-heading text-lg text-copper bg-copper/5 px-3 sm:px-6 py-4">RETIRO</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {comparison.map((row) => (
            <tr key={row.label}>
              <td className="px-3 sm:px-6 py-5 align-top break-words">
                <span className="block font-medium text-foreground mb-1">{row.label}</span>
                <span className="text-muted-foreground">{row.classique}</span>
              </td>
              <td className="px-3 sm:px-6 py-5 align-top bg-copper/5 break-words">
                <span className="block font-medium text-copper mb-1">{row.label}</span>
                <span className="text-foreground">{row.retiro}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-muted-foreground mt-4 italic">Les pratiques du conseil classique peuvent varier selon les professionnels.</p>
    </div>
  </section>
);

export const PersonalProtectionSection = () => (
  <section className="py-20 bg-card" aria-labelledby="protection-title">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 id="protection-title" className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
        Votre entreprise est assurée. <span className="text-gradient-gold">Et vous ?</span>
      </h2>
      <div className="divider-gold mb-6" />
      <p className="text-muted-foreground leading-relaxed mb-4">
        En tant que gérant majoritaire, votre mandat ne vous ouvre pas de droits à l'assurance chômage des salariés
        et ne vous fait pas bénéficier automatiquement d'une prévoyance collective d'entreprise.
        Assurer vos locaux ou votre responsabilité professionnelle ne protège pas vos revenus personnels.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Votre régime obligatoire prévoit une protection de base en cas d'arrêt de travail, d'invalidité ou de décès,
        mais celle-ci peut ne pas suffire à maintenir votre niveau de vie et celui de vos proches.
        Une prévoyance individuelle adaptée permet de compléter cette couverture, selon les garanties et conditions du contrat.
        En cas de cessation d'activité, une allocation spécifique peut exister sous conditions : elle ne se confond pas avec l'assurance chômage des salariés.
      </p>
      <Button asChild variant="outline" className="border-copper text-copper hover:bg-copper/10 gap-2 h-auto py-3 whitespace-normal text-left">
        <Link to="/prevoyance">Découvrir la prévoyance pour les dirigeants <ArrowRight className="w-4 h-4 shrink-0" /></Link>
      </Button>
    </div>
  </section>
);

export const AboutSection = () => (
  <section className="py-20 bg-background" aria-labelledby="about-title">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 id="about-title" className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Qui sommes-nous</h2>
      <div className="divider-gold mb-6" />
      <p className="text-muted-foreground text-lg leading-relaxed">
        RETIRO a été fondé par un dirigeant de PME depuis près de vingt ans. La retraite d'un TNS et la prévoyance d'un gérant, nous les avons d'abord vécues.
      </p>
      <p className="text-sm text-muted-foreground mt-6">[PHOTO ET BIO À COMPLÉTER]</p>
    </div>
  </section>
);