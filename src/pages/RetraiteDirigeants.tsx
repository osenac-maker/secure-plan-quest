import ProductIntro from "@/components/ProductIntro";
import { useSEO } from "@/hooks/useSEO";

const RetraiteDirigeants = () => {
  useSEO({ title: "Assurance vie : épargne et transmission — RETIRO Patrimoine", description: "Faites le point sur votre épargne, vos projets et votre transmission avec le bilan gratuit RETIRO.", canonical: "https://secure-plan-quest.vercel.app/retraite-dirigeants" });
  return (
    <ProductIntro eyebrow="Assurance vie · Épargne & transmission" title={<>Assurance vie : <span className="text-gradient-gold">l'enveloppe patrimoniale la plus souple</span></>}>
      L'assurance vie permet de constituer une épargne, de financer des projets et d'organiser la transmission à vos proches, avec une fiscalité dépendant notamment de la durée du contrat et des versements. Les rachats sont possibles selon les délais et conditions des supports ; les unités de compte présentent un risque de perte en capital, à apprécier selon votre horizon et vos besoins.
    </ProductIntro>
  );
};

export default RetraiteDirigeants;
