// Fonction serverless Vercel : relaie les leads vers le webhook Make protégé par clé.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  let body: Record<string, unknown> = {};
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body ?? {};
  } catch {
    return res.status(400).json({ ok: false, error: "Invalid JSON" });
  }

  const { website, ...lead } = body;
  if (typeof website === "string" ? website.trim() !== "" : website != null && website !== "") {
    return res.status(200).json({ ok: true });
  }

  const isEmpty = (v: unknown) => v == null || String(v).trim() === "";
  if (isEmpty(lead.nom) || isEmpty(lead.telephone)) {
    return res.status(400).json({ ok: false, error: "nom et telephone requis" });
  }

  const url = process.env.MAKE_WEBHOOK_URL;
  const key = process.env.MAKE_WEBHOOK_KEY;
  if (!url || !key) {
    console.error("[api/lead] MAKE_WEBHOOK_URL ou MAKE_WEBHOOK_KEY manquante");
    return res.status(500).json({ ok: false, error: "Server misconfigured" });
  }

  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-make-apikey": key },
      body: JSON.stringify(lead),
    });
    if (r.ok) return res.status(200).json({ ok: true });
    console.error("[api/lead] Make a répondu", r.status);
    return res.status(502).json({ ok: false });
  } catch (err) {
    console.error("[api/lead] erreur réseau", err);
    return res.status(502).json({ ok: false });
  }
}
