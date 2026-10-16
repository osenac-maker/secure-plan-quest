import { describe, it, expect } from "vitest";
import { getPlafondPER, getTMI, nombreDeParts } from "@/lib/scoring";

describe("Paramètres fiscaux 2026", () => {
  it("plafond salarié : plancher 10 % du PASS", () => {
    expect(getPlafondPER(20000, "salarie")).toBeCloseTo(4806);
  });
  it("plafond salarié : maximum 10 % de 8 PASS", () => {
    expect(getPlafondPER(1_000_000, "salarie")).toBeCloseTo(38448);
  });
  it("plafond indépendant à 100 000 €", () => {
    expect(getPlafondPER(100000, "freelance")).toBeCloseTo(10000 + 0.15 * (100000 - 48060));
  });
  it("plafond indépendant au-delà de 8 PASS", () => {
    expect(getPlafondPER(1_000_000, "dirigeant")).toBeCloseTo(38448 + 0.15 * 7 * 48060);
  });
  it("parts : marié avec 3 enfants = 4", () => {
    expect(nombreDeParts("marie", 3)).toBe(4);
  });
  it("TMI : 90 000 € pour 2 parts = 30 %", () => {
    expect(getTMI(90000, 2)).toBe(0.3);
  });
  it("TMI : 90 000 € pour 1 part = 41 %", () => {
    expect(getTMI(90000, 1)).toBe(0.41);
  });
});
