import { describe, expect, it, vi, afterEach } from "vitest";
import { buildContactPreferences, calculateResults, sendLeadToMake, type SimulatorData } from "./scoring";

const data: SimulatorData = { age: 42, status: "liberal", revenu: 80000, situationFamiliale: "celibataire", enfants: 0, patrimoineExistant: 0, epargneRetraite: 0, capaciteEpargne: 500, priorite: ["retraite"], prenom: "Test", nom: "Exemple", email: "test@example.com", telephone: "0612345678" };

afterEach(() => vi.unstubAllGlobals());

describe("Choix de rappel", () => {
  it("ne demande aucun rappel par défaut", () => expect(buildContactPreferences(data).demandeRappel).toBe(false));
  it("ne transmet pas le téléphone sans case cochée", () => expect(buildContactPreferences({ ...data, souhaiteRappel: false }).telephone).toBe(""));
  it("transmet le rappel et le téléphone uniquement sur accord explicite", () => {
    expect(buildContactPreferences({ ...data, souhaiteRappel: true })).toMatchObject({ demandeRappel: true, telephone: "+33612345678", finalite: "rapport_et_rappel" });
  });
  it("conserve le consentement et son horodatage dans le message", () => {
    expect(buildContactPreferences({ ...data, consentement: true, consentementDate: "2026-10-14T16:17:00.000Z" })).toMatchObject({ consentement: true, consentementDate: "2026-10-14T16:17:00.000Z" });
  });
  it("signale un refus réseau au formulaire", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 503 }));
    await expect(sendLeadToMake(data, calculateResults(data))).rejects.toThrow();
  });
  it("sépare la demande de rapport sans rappel", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    await sendLeadToMake({ ...data, souhaiteRappel: false }, calculateResults(data));
    const payload = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(payload).toMatchObject({ demandeRappel: false, telephone: "", etape: "rapport_uniquement" });
  });
});