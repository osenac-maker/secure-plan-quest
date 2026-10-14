import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RegulatoryDetails from "@/components/RegulatoryDetails";
import { useSEO } from "@/hooks/useSEO";

const InformationsReglementaires = () => {
  useSEO({ title: "Informations réglementaires et réclamations | RETIRO Patrimoine", description: "Statut de courtier en assurance, ORIAS, assurance professionnelle, réclamations et médiation de RETIRO Patrimoine." });
  return <div className="min-h-screen bg-background"><Navbar /><main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl"><h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">Informations réglementaires</h1><RegulatoryDetails /><h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">Vérifier les informations</h2><p className="text-sm text-muted-foreground leading-relaxed">L'immatriculation se vérifie sur le registre public <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" className="text-copper underline">ORIAS</a>. Les éléments signalés [À COMPLÉTER] doivent être documentés par RETIRO avant toute souscription.</p><h2 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">Périmètre du conseil</h2><p className="text-sm text-muted-foreground leading-relaxed">L'activité présentée porte sur le courtage en assurance. Le statut CIF n'est pas acquis. Les pages ETF et cryptoactifs ont une vocation pédagogique ; aucun partenariat non documenté n'est revendiqué.</p></main><Footer /></div>;
};

export default InformationsReglementaires;