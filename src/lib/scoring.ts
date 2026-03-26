export interface SimulatorData {
  age: number;
  status: string;
  revenu: number;
  situationFamiliale: string;
  enfants: number;
  patrimoineExistant: number;
  epargneRetraite: number;
  capaciteEpargne: number;
  interetFiscal: string;
  dejaPER: string;
  objectifPrioritaire: string;
  email: string;
  nom: string;
  telephone: string;
}

export interface SimulatorResult {
  scoreRetraite: number; // 0-100
  manqueAGagner: number;
  economiesFiscales: number;
  leadScore: "A" | "B" | "C";
  leadPoints: number;
  recommandations: string[];
}

export function calculateResults(data: SimulatorData): SimulatorResult {
  // Simplified retirement gap calculation
  const revenuMensuel = data.revenu / 12;
  const tauxRemplacement = data.status === "freelance" ? 0.35 :
    data.status === "dirigeant" ? 0.40 :
    data.status === "liberal" ? 0.30 : 0.50;

  const retraiteEstimee = revenuMensuel * tauxRemplacement;
  const besoinRetraite = revenuMensuel * 0.75;
  const manqueAGagner = Math.max(0, Math.round((besoinRetraite - retraiteEstimee) * 12));

  // Score retraite (how prepared they are)
  const epargneRatio = data.epargneRetraite / (data.revenu * (65 - data.age));
  const scoreRetraite = Math.min(100, Math.max(5, Math.round(epargneRatio * 300)));

  // Tax savings estimate via PER
  const trancheMarginal = data.revenu > 177106 ? 0.45 :
    data.revenu > 82341 ? 0.41 :
    data.revenu > 28797 ? 0.30 :
    data.revenu > 11294 ? 0.11 : 0;

  const versementPEROptimal = Math.min(data.revenu * 0.10, 35194);
  const economiesFiscales = Math.round(versementPEROptimal * trancheMarginal);

  // Lead scoring
  let points = 0;
  if (data.revenu >= 100000) points += 30;
  else if (data.revenu >= 60000) points += 20;
  else points += 10;

  if (data.age >= 40 && data.age <= 55) points += 25;
  else if (data.age >= 35) points += 15;
  else points += 5;

  if (["freelance", "dirigeant", "liberal"].includes(data.status)) points += 20;
  else points += 10;

  if (data.capaciteEpargne >= 1000) points += 15;
  else if (data.capaciteEpargne >= 500) points += 10;
  else points += 5;

  if (data.dejaPER === "non") points += 10;
  else if (data.dejaPER === "ne_sais_pas") points += 7;
  else points += 3;

  const leadScore: "A" | "B" | "C" = points >= 75 ? "A" : points >= 50 ? "B" : "C";

  const recommandations: string[] = [];
  if (economiesFiscales > 3000) recommandations.push("Plan d'Épargne Retraite (PER) individuel");
  if (data.status === "freelance" || data.status === "liberal") recommandations.push("Contrat Madelin prévoyance");
  if (data.enfants > 0) recommandations.push("Assurance vie pour la transmission");
  if (data.revenu > 80000) recommandations.push("Stratégie de rémunération optimisée");
  if (recommandations.length === 0) recommandations.push("Bilan patrimonial complet");

  return { scoreRetraite, manqueAGagner, economiesFiscales, leadScore, leadPoints: points, recommandations };
}
