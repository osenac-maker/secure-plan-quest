import ProductIntro from "@/components/ProductIntro";
import { useSEO } from "@/hooks/useSEO";

const Prevoyance = () => {
  useSEO({ title: "Prévoyance indépendants : protégez vos revenus et votre famille — RETIRO", description: "Faites le point sur votre protection en cas d'arrêt de travail, d'invalidité ou de décès avec le bilan gratuit RETIRO.", canonical: "https://secure-plan-quest.vercel.app/prevoyance" });
  return (
    <ProductIntro eyebrow="Prévoyance · Dirigeants & indépendants" title={<>Prévoyance indépendants : <span className="text-gradient-gold">protégez vos revenus et votre famille</span></>}>
      En cas d'arrêt de travail, d'invalidité ou de décès, une prévoyance complémentaire peut protéger vos revenus et vos proches, selon les garanties, franchises et exclusions du contrat. Nous examinons vos droits obligatoires et vos besoins pour identifier les protections à étudier, sans engagement.
    </ProductIntro>
  );
};

export default Prevoyance;
