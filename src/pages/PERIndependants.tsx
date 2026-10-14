import ProductIntro from "@/components/ProductIntro";
import { useSEO } from "@/hooks/useSEO";

const PERIndependants = () => {
  useSEO({ title: "PER Indépendants : préparez votre retraite — RETIRO", description: "Estimez votre retraite et les économies fiscales possibles avec un PER grâce au bilan gratuit RETIRO.", canonical: "https://secure-plan-quest.vercel.app/per-independants" });
  return (
    <ProductIntro eyebrow="Plan d'Épargne Retraite · Dirigeants & indépendants" title={<>PER Indépendants : <span className="text-gradient-gold">réduisez vos impôts</span> en préparant votre retraite</>}>
      Le PER individuel permet de préparer un complément de retraite, avec des versements potentiellement déductibles dans les plafonds applicables à votre situation fiscale. L'épargne est normalement bloquée jusqu'à la retraite, sauf cas légaux de déblocage anticipé ; les frais, la fiscalité de sortie et le risque de perte en capital sur les unités de compte doivent être examinés avant toute décision.
    </ProductIntro>
  );
};

export default PERIndependants;
