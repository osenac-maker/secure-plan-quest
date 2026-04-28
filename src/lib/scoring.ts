// ─── Types ───────────────────────────────────────────────────────────────────

export interface SimulatorData {
  age: number;
  status: string;
  revenu: number;
  situationFamiliale: string;
  enfants: number;
  patrimoineExistant: number;
  epargneRetraite: number;
  capaciteEpargne: number;
  priorite: "impots" | "retraite" | "protection" | "transmission";
  email: string;
  nom: string;
  telephone: string;
}

export interface SimulatorResult {
  scoreRetraite: number;
  retraiteEstimee: number;
  manqueAGagner: number;
  economiesFiscales: number;
  versementPEROptimal: number;
  capitalRetraite: number;
  leadScore: "A" | "B" | "C";
  leadPoints: number;
  recommandations: string[];
}

// ─── Barème TMI 2024 ─────────────────────────────────────────────────────────

function getTMI(revenu: number): number {
  if (revenu > 177106) return 0.45;
  if (revenu > 82341) return 0.41;
  if (revenu > 28797) return 0.30;
  if (revenu > 11294) return 0.11;
  return 0;
}

// ─── Capitalisation mensuelle à taux fixe ────────────────────────────────────

function futureValue(mensuel: number, annees: number, tauxAnnuel = 0.04): number {
  const r = tauxAnnuel / 12;
  const n = annees * 12;
  if (r === 0) return mensuel * n;
  return mensuel * ((Math.pow(1 + r, n) - 1) / r);
}

// ─── Taux de remplacement par statut ─────────────────────────────────────────

const TAUX_REMPLACEMENT: Record<string, number> = {
  freelance: 0.35,
  dirigeant: 0.38,
  liberal: 0.30,
  salarie: 0.50,
};

// ─── Fonction principale ──────────────────────────────────────────────────────

export function calculateResults(data: SimulatorData): SimulatorResult {
  // 1. Retraite estimée
  const revenuMensuel = data.revenu / 12;
  const taux = TAUX_REMPLACEMENT[data.status] ?? 0.40;
  const retraiteEstimee = Math.round(revenuMensuel * taux);
  const besoinRetraite = Math.round(revenuMensuel * 0.75);
  const manqueAGagner = Math.max(0, (besoinRetraite - retraiteEstimee) * 12);

  // 2. Score retraite (préparation actuelle)
  const anneesRestantes = Math.max(1, 65 - data.age);
  const ciblePatrimoine = data.revenu * 10;
  const capitalProjecte =
    futureValue(data.capaciteEpargne, anneesRestantes) +
    data.epargneRetraite * Math.pow(1.04, anneesRestantes);
  const scoreRetraite = Math.min(
    100,
    Math.max(5, Math.round((capitalProjecte / ciblePatrimoine) * 100))
  );

  // 3. Optimisation PER (plafond 2024)
  const plafondPER = Math.min(data.revenu * 0.1, 35194);
  const tmi = getTMI(data.revenu);
  const versementPEROptimal = Math.round(plafondPER);
  const economiesFiscales = Math.round(versementPEROptimal * tmi);

  // 4. Capital retraite : capitalisation réelle des versements PER + épargne libre
  const mensuelPER = Math.round(versementPEROptimal / 12);
  const capitalRetraite = Math.round(
    futureValue(mensuelPER + data.capaciteEpargne, anneesRestantes) +
      data.epargneRetraite * Math.pow(1.04, anneesRestantes)
  );

  // 5. Lead scoring
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

  if (data.priorite === "impots") points += 10;
  else if (data.priorite === "retraite") points += 8;
  else if (data.priorite === "transmission") points += 6;
  else points += 4;

  const leadScore: "A" | "B" | "C" =
    points >= 75 ? "A" : points >= 50 ? "B" : "C";

  // 6. Recommandations contextuelles
  const recommandations: string[] = [];
  if (economiesFiscales > 1000)
    recommandations.push("Plan d'Épargne Retraite (PER) individuel");
  if (["freelance", "liberal"].includes(data.status))
    recommandations.push("Contrat Madelin prévoyance");
  if (data.status === "dirigeant")
    recommandations.push("PER d'entreprise (article 83 / PER collectif)");
  if (data.enfants > 0 || data.priorite === "transmission")
    recommandations.push("Assurance vie pour la transmission");
  if (data.revenu > 80000 && data.status === "dirigeant")
    recommandations.push("Optimisation de la rémunération dirigeant");
  if (manqueAGagner > 15000)
    recommandations.push("Prévoyance complémentaire");
  if (recommandations.length === 0)
    recommandations.push("Bilan patrimonial complet");

  return {
    scoreRetraite,
    retraiteEstimee,
    manqueAGagner,
    economiesFiscales,
    versementPEROptimal,
    capitalRetraite,
    leadScore,
    leadPoints: points,
    recommandations,
  };
}

// ─── Capture lead vers Airtable ───────────────────────────────────────────────

export function sendLeadToAirtable(data: SimulatorData, results: SimulatorResult): void {
  const STATUS_LABELS: Record<string, string> = {
    freelance: "Freelance",
    dirigeant: "Dirigeant",
    liberal: "Profession libérale",
    salarie: "Salarié",
  };

  fetch("https://api.airtable.com/v0/applfZMfulVhjtyay/Leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer patXBzdasi4RW9ELm.e6b8696c6cafc96209e1724860e8ff18fd2ce8fee438cc7d6b4edcfdd736ef55",
    },
    body: JSON.stringify({
      fields: {
        "Nom": data.nom,
        "Email": data.email,
        "Téléphone": data.telephone,
        "Statut professionnel": STATUS_LABELS[data.status] ?? data.status,
        "Âge": data.age,
        "Revenus annuels": data.revenu,
        "Situation familiale": data.situationFamiliale,
        "Enfants": data.enfants,
        "Capacité épargne mensuelle": data.capaciteEpargne,
        "Objectif prioritaire": data.priorite,
        "Retraite estimée": results.retraiteEstimee,
        "Économie fiscale": results.economiesFiscales,
        "Score": results.leadScore,
        "Date de soumission": new Date().toISOString(),
      }).catch((err) => console.error("Airtable error:", err));
}
