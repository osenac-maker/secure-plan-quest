import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RemunerationSection } from "@/components/landing/TransparencySections";
import { useSEO } from "@/hooks/useSEO";

const Remuneration = () => {
  useSEO({ title: "Rémunération et transparence | RETIRO Patrimoine", description: "Modes de rémunération du courtier, commissions, honoraires et information préalable pour chaque produit étudié." });
  return <div className="min-h-screen bg-background"><Navbar /><main className="pt-32"><div className="container mx-auto px-4 max-w-3xl"><h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Rémunération et transparence</h1><p className="text-muted-foreground leading-relaxed">Les modalités ci-dessous restent à documenter par RETIRO. Les informations incomplètes ne constituent pas un barème ni une offre tarifaire.</p></div><RemunerationSection /><div className="container mx-auto px-4 max-w-3xl pb-16 space-y-6 text-sm text-muted-foreground leading-relaxed"><section><h2 className="font-heading text-xl text-foreground mb-3">Commissions des assureurs</h2><p>Partenaires concernés, commissions à la souscription et récurrentes, assiette, montant ou méthode de calcul : [À COMPLÉTER].</p></section><section><h2 className="font-heading text-xl text-foreground mb-3">Honoraires éventuels</h2><p>Prestations facturées, montant ou méthode de calcul, taxes applicables, fréquence et conditions d'accord préalable : [À COMPLÉTER].</p></section><section><h2 className="font-heading text-xl text-foreground mb-3">Information par recommandation</h2><p>Avant la souscription, la recommandation doit préciser la rémunération perçue, son payeur, les frais du produit et les conflits d'intérêts éventuels, avec les alternatives étudiées. Exemple de document de rémunération : [À COMPLÉTER].</p></section></div></main><Footer /></div>;
};

export default Remuneration;