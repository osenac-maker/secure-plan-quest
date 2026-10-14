import { Link } from "react-router-dom";

const RegulatoryDetails = ({ compact = false }: { compact?: boolean }) => (
  <div className={compact ? "space-y-2 text-xs" : "space-y-4 text-sm text-muted-foreground leading-relaxed"}>
    <p>Statut : courtier en assurance (MOPA — RETIRO Patrimoine). N° ORIAS : [À COMPLÉTER]. RC Pro : [À COMPLÉTER].</p>
    <p>Réclamation : adressez votre demande à <a href="mailto:contact@retiro-patrimoine.fr" className="underline underline-offset-2">contact@retiro-patrimoine.fr</a> ou à MOPA, 15 rue Trèbois, 92300 Levallois-Perret, en précisant l'objet, les références utiles et les pièces justificatives. Modalités et délais de traitement : [À COMPLÉTER].</p>
    <p>Médiateur : [À COMPLÉTER] — coordonnées, site et conditions de saisine : [À COMPLÉTER].</p>
    {compact && <Link to="/informations-reglementaires" className="inline-block underline underline-offset-2">Informations réglementaires et réclamations</Link>}
  </div>
);

export default RegulatoryDetails;