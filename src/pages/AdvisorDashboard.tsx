import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Users, Search, Phone, Mail, TrendingUp, Calendar,
  Lock, Eye, EyeOff, ChevronRight, X, RefreshCw,
  Euro, Star,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface Lead {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  statut: string;
  revenu: number;
  age: number;
  score: "A" | "B" | "C";
  economiesFiscales: number;
  retraiteEstimee: number;
  objectif: string;
  situationFamiliale: string;
  enfants: number;
  capaciteEpargne: number;
  date: string;
  etape: "nouveau" | "contacte" | "rdv_pris" | "en_cours" | "converti";
}

// ── Helpers ──────────────────────────────────────────────────────────────────

const ETAPE_LABELS: Record<string, string> = {
  nouveau: "Nouveau",
  contacte: "Contacté",
  rdv_pris: "RDV pris",
  en_cours: "En cours",
  converti: "Converti",
};

const ETAPE_COLORS: Record<string, string> = {
  nouveau: "bg-amber-50 text-amber-700 border border-amber-200",
  contacte: "bg-blue-50 text-blue-700 border border-blue-200",
  rdv_pris: "bg-purple-50 text-purple-700 border border-purple-200",
  en_cours: "bg-orange-50 text-orange-700 border border-orange-200",
  converti: "bg-green-50 text-green-700 border border-green-200",
};

const SCORE_COLORS: Record<string, string> = {
  A: "bg-green-50 text-green-700 border border-green-200",
  B: "bg-blue-50 text-blue-700 border border-blue-200",
  C: "bg-muted text-muted-foreground border border-border",
};

const ETAPE_ORDER = ["nouveau", "contacte", "rdv_pris", "en_cours", "converti"];

const AIRTABLE_BASE = "applfZMfulVhjtyay";
const AIRTABLE_TABLE = "Leads";
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_API_KEY;

// ── Password Gate ─────────────────────────────────────────────────────────────

const PASSWORD = "retiro2024";

const PasswordGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [pwd, setPwd] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const submit = () => {
    if (pwd === PASSWORD) { onUnlock(); }
    else { setError(true); setTimeout(() => setError(false), 1500); }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="bg-card rounded-2xl p-10 shadow-card border border-border w-full max-w-sm text-center">
        <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-5">
          <Lock className="w-6 h-6 text-copper" />
        </div>
        <h2 className="font-heading text-xl font-bold text-foreground mb-1">Espace Conseiller</h2>
        <p className="text-sm text-muted-foreground mb-6">Accès réservé à l'équipe RETIRO</p>
        <div className="relative mb-4">
          <Input
            type={show ? "text" : "password"}
            placeholder="Mot de passe"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            className={`pr-10 ${error ? "border-destructive" : ""}`}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            onClick={() => setShow(!show)}
          >
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {error && <p className="text-xs text-destructive mb-3">Mot de passe incorrect</p>}
        <Button
          onClick={submit}
          className="w-full bg-copper hover:bg-copper-light text-white border-0"
        >
          Accéder au dashboard
        </Button>
      </div>
    </div>
  );
};

// ── Lead Drawer ───────────────────────────────────────────────────────────────

const LeadDrawer = ({
  lead,
  onClose,
  onEtapeChange,
}: {
  lead: Lead;
  onClose: () => void;
  onEtapeChange: (id: string, etape: Lead["etape"]) => void;
}) => (
  <div className="fixed inset-0 z-50 flex">
    <div className="flex-1 bg-black/40" onClick={onClose} />
    <div className="w-full max-w-md bg-card shadow-2xl overflow-y-auto">
      <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card z-10">
        <div>
          <h3 className="font-heading font-bold text-foreground text-lg">{lead.nom}</h3>
          <p className="text-xs text-muted-foreground">{lead.statut} · {lead.age} ans</p>
        </div>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Contact */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Contact</p>
          <a href={`mailto:${lead.email}`} className="flex items-center gap-2 text-sm text-foreground hover:text-copper">
            <Mail className="w-4 h-4 text-copper" />{lead.email}
          </a>
          {lead.telephone && (
            <a href={`tel:${lead.telephone}`} className="flex items-center gap-2 text-sm text-foreground hover:text-copper">
              <Phone className="w-4 h-4 text-copper" />{lead.telephone}
            </a>
          )}
        </div>

        {/* Métriques */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Revenus annuels", value: `${lead.revenu.toLocaleString("fr-FR")} €` },
            { label: "Éco. fiscale", value: `${lead.economiesFiscales.toLocaleString("fr-FR")} €` },
            { label: "Retraite estimée", value: `${lead.retraiteEstimee.toLocaleString("fr-FR")} €/mois` },
            { label: "Épargne mensuelle", value: `${lead.capaciteEpargne} €/mois` },
            { label: "Situation familiale", value: lead.situationFamiliale },
            { label: "Enfants", value: String(lead.enfants) },
          ].map((m) => (
            <div key={m.label} className="bg-muted/40 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-0.5">{m.label}</p>
              <p className="font-semibold text-foreground text-sm">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Objectif */}
        <div className="bg-copper/5 border border-copper/20 rounded-lg p-3">
          <p className="text-xs text-muted-foreground mb-0.5">Objectif prioritaire</p>
          <p className="font-semibold text-foreground text-sm">{lead.objectif}</p>
        </div>

        {/* Score */}
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm font-bold border ${SCORE_COLORS[lead.score]}`}>
            Score {lead.score}
          </span>
          <span className="text-xs text-muted-foreground">
            {lead.score === "A" ? "Lead prioritaire — contact sous 24h" :
             lead.score === "B" ? "Lead qualifié — relance à planifier" :
             "Lead à nourrir — campagne email"}
          </span>
        </div>

        {/* Changer étape */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            Avancement du dossier
          </p>
          <div className="space-y-2">
            {ETAPE_ORDER.map((e) => (
              <button
                key={e}
                onClick={() => onEtapeChange(lead.id, e as Lead["etape"])}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all border ${
                  lead.etape === e
                    ? ETAPE_COLORS[e]
                    : "border-border text-muted-foreground hover:bg-muted/40"
                }`}
              >
                {ETAPE_LABELS[e]}
                {lead.etape === e && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>

        {/* Date */}
        <p className="text-xs text-muted-foreground text-center">
          Soumis le {new Date(lead.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
        </p>
      </div>
    </div>
  </div>
);

// ── Dashboard ─────────────────────────────────────────────────────────────────

const Dashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterScore, setFilterScore] = useState("all");
  const [filterEtape, setFilterEtape] = useState("all");
  const [selected, setSelected] = useState<Lead | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}?sort[0][field]=Date%20de%20soumission&sort[0][direction]=desc&maxRecords=100`,
        { headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` } }
      );
      const json = await res.json();
      const mapped: Lead[] = (json.records || []).map((r: any) => ({
        id: r.id,
        nom: r.fields["Nom"] ?? "—",
        email: r.fields["Email"] ?? "",
        telephone: r.fields["Téléphone"] ?? "",
        statut: r.fields["Statut professionnel"] ?? "—",
        revenu: r.fields["Revenus annuels"] ?? 0,
        age: r.fields["Âge"] ?? 0,
        score: r.fields["Score"] ?? "C",
        economiesFiscales: r.fields["Économie fiscale"] ?? 0,
        retraiteEstimee: r.fields["Retraite estimée"] ?? 0,
        objectif: r.fields["Objectif prioritaire"] ?? "—",
        situationFamiliale: r.fields["Situation familiale"] ?? "—",
        enfants: r.fields["Enfants"] ?? 0,
        capaciteEpargne: r.fields["Capacité épargne mensuelle"] ?? 0,
        date: r.fields["Date de soumission"] ?? r.createdTime,
        etape: r.fields["Étape"] ?? "nouveau",
      }));
      setLeads(mapped);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const updateEtape = async (id: string, etape: Lead["etape"]) => {
    setLeads((prev) => prev.map((l) => l.id === id ? { ...l, etape } : l));
    if (selected?.id === id) setSelected((prev) => prev ? { ...prev, etape } : prev);
    await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
      body: JSON.stringify({ fields: { "Étape": etape } }),
    }).catch(console.error);
  };

  useEffect(() => { fetchLeads(); }, []);

  const filtered = leads.filter((l) => {
    const matchSearch =
      l.nom.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase());
    const matchScore = filterScore === "all" || l.score === filterScore;
    const matchEtape = filterEtape === "all" || l.etape === filterEtape;
    return matchSearch && matchScore && matchEtape;
  });

  const statsData = [
    { icon: Users, label: "Total leads", value: leads.length, color: "text-foreground" },
    { icon: Star, label: "Score A", value: leads.filter((l) => l.score === "A").length, color: "text-green-600" },
    { icon: TrendingUp, label: "Score B", value: leads.filter((l) => l.score === "B").length, color: "text-blue-600" },
    {
      icon: Euro, label: "Éco. fiscales totales",
      value: `${leads.reduce((s, l) => s + l.economiesFiscales, 0).toLocaleString("fr-FR")} €`,
      color: "text-copper",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-heading text-2xl font-bold text-foreground">Espace Conseiller</h1>
              <p className="text-muted-foreground text-sm">{leads.length} leads · dernière synchro à l'instant</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchLeads}
              className="gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Actualiser
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {statsData.map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-5 shadow-card border border-border">
                <s.icon className={`w-5 h-5 ${s.color} mb-2`} />
                <div className={`font-heading text-2xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Filtres */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un lead..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {["all", "A", "B", "C"].map((s) => (
                <Button
                  key={s}
                  size="sm"
                  variant={filterScore === s ? "default" : "outline"}
                  onClick={() => setFilterScore(s)}
                  className={filterScore === s ? "bg-copper text-white border-0 hover:bg-copper-light" : ""}
                >
                  {s === "all" ? "Tous" : `Score ${s}`}
                </Button>
              ))}
              <div className="w-px bg-border mx-1" />
              {["all", ...ETAPE_ORDER].map((e) => (
                <Button
                  key={e}
                  size="sm"
                  variant={filterEtape === e ? "default" : "outline"}
                  onClick={() => setFilterEtape(e)}
                  className={filterEtape === e ? "bg-copper text-white border-0 hover:bg-copper-light" : ""}
                >
                  {e === "all" ? "Toutes étapes" : ETAPE_LABELS[e]}
                </Button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <RefreshCw className="w-6 h-6 text-copper animate-spin" />
                <span className="ml-3 text-muted-foreground text-sm">Chargement des leads...</span>
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground text-sm">
                Aucun lead trouvé
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Lead</th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">Statut</th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden lg:table-cell">Revenus</th>
                      <th className="text-center p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Score</th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">Éco. fiscale</th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Étape</th>
                      <th className="text-right p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((lead) => (
                      <tr
                        key={lead.id}
                        className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                        onClick={() => setSelected(lead)}
                      >
                        <td className="p-4">
                          <div className="font-medium text-foreground">{lead.nom}</div>
                          <div className="text-xs text-muted-foreground">{lead.email}</div>
                          <div className="text-xs text-muted-foreground/60">
                            {new Date(lead.date).toLocaleDateString("fr-FR")}
                          </div>
                        </td>
                        <td className="p-4 hidden md:table-cell">
                          <span className="text-xs text-muted-foreground capitalize">{lead.statut}</span>
                        </td>
                        <td className="p-4 hidden lg:table-cell text-foreground font-medium">
                          {lead.revenu.toLocaleString("fr-FR")} €
                        </td>
                        <td className="p-4 text-center">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${SCORE_COLORS[lead.score]}`}>
                            {lead.score}
                          </span>
                        </td>
                        <td className="p-4 hidden md:table-cell">
                          <span className="font-semibold text-green-600">
                            {lead.economiesFiscales.toLocaleString("fr-FR")} €
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${ETAPE_COLORS[lead.etape]}`}>
                            {ETAPE_LABELS[lead.etape]}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                            {lead.telephone && (
                              <a href={`tel:${lead.telephone}`}>
                                <Button variant="ghost" size="sm"><Phone className="w-4 h-4" /></Button>
                              </a>
                            )}
                            <a href={`mailto:${lead.email}`}>
                              <Button variant="ghost" size="sm"><Mail className="w-4 h-4" /></Button>
                            </a>
                            <Button variant="ghost" size="sm" onClick={() => setSelected(lead)}>
                              <ChevronRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            {filtered.length} lead{filtered.length > 1 ? "s" : ""} affiché{filtered.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Drawer détail */}
      {selected && (
        <LeadDrawer
          lead={selected}
          onClose={() => setSelected(null)}
          onEtapeChange={updateEtape}
        />
      )}
    </div>
  );
};

// ── Main export avec gate ─────────────────────────────────────────────────────

const AdvisorDashboard = () => {
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem("advisor_unlocked") === "true"
  );

  const unlock = () => {
    sessionStorage.setItem("advisor_unlocked", "true");
    setUnlocked(true);
  };

  return unlocked ? <Dashboard /> : <PasswordGate onUnlock={unlock} />;
};

export default AdvisorDashboard;
