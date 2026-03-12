import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Search, Phone, Mail, TrendingUp, Calendar } from "lucide-react";

interface Lead {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  status: string;
  revenu: number;
  age: number;
  score: "A" | "B" | "C";
  points: number;
  economiesFiscales: number;
  date: string;
  etape: "nouveau" | "contacte" | "rdv_pris" | "en_cours" | "converti";
}

const mockLeads: Lead[] = [
  { id: "1", nom: "Sophie Martin", email: "sophie@dev.fr", telephone: "06 12 34 56 78", status: "freelance", revenu: 95000, age: 38, score: "A", points: 85, economiesFiscales: 8500, date: "2026-03-12", etape: "nouveau" },
  { id: "2", nom: "Thomas Renard", email: "thomas@pme.fr", telephone: "06 98 76 54 32", status: "dirigeant", revenu: 120000, age: 47, score: "A", points: 92, economiesFiscales: 12400, date: "2026-03-11", etape: "contacte" },
  { id: "3", nom: "Marie Leroy", email: "marie@conseil.fr", telephone: "07 11 22 33 44", status: "liberal", revenu: 72000, age: 42, score: "B", points: 65, economiesFiscales: 5800, date: "2026-03-11", etape: "rdv_pris" },
  { id: "4", nom: "Pierre Duval", email: "pierre@auto.fr", telephone: "06 55 44 33 22", status: "freelance", revenu: 55000, age: 33, score: "C", points: 38, economiesFiscales: 3200, date: "2026-03-10", etape: "nouveau" },
  { id: "5", nom: "Claire Bernard", email: "claire@cabinet.fr", telephone: "07 66 77 88 99", status: "liberal", revenu: 140000, age: 52, score: "A", points: 95, economiesFiscales: 14100, date: "2026-03-09", etape: "en_cours" },
];

const scoreBadge = (score: "A" | "B" | "C") => {
  const styles = {
    A: "bg-accent/10 text-accent border-accent/20",
    B: "bg-primary/10 text-primary border-primary/20",
    C: "bg-muted text-muted-foreground border-border",
  };
  return <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${styles[score]}`}>{score}</span>;
};

const etapeLabel: Record<string, string> = {
  nouveau: "Nouveau",
  contacte: "Contacté",
  rdv_pris: "RDV pris",
  en_cours: "En cours",
  converti: "Converti",
};

const etapeColor: Record<string, string> = {
  nouveau: "bg-warning/10 text-warning",
  contacte: "bg-primary/10 text-primary",
  rdv_pris: "bg-accent/10 text-accent",
  en_cours: "bg-gold/10 text-gold",
  converti: "bg-accent/10 text-accent",
};

const AdvisorDashboard = () => {
  const [search, setSearch] = useState("");
  const [filterScore, setFilterScore] = useState<string>("all");

  const filtered = mockLeads.filter((l) => {
    const matchSearch = l.nom.toLowerCase().includes(search.toLowerCase()) || l.email.toLowerCase().includes(search.toLowerCase());
    const matchScore = filterScore === "all" || l.score === filterScore;
    return matchSearch && matchScore;
  });

  const totalA = mockLeads.filter((l) => l.score === "A").length;
  const totalB = mockLeads.filter((l) => l.score === "B").length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="font-heading text-2xl font-bold text-foreground">Espace Conseiller</h1>
              <p className="text-muted-foreground text-sm">Gestion des leads et suivi des dossiers</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Users, label: "Total leads", value: mockLeads.length, color: "text-primary" },
              { icon: TrendingUp, label: "Leads A", value: totalA, color: "text-accent" },
              { icon: Mail, label: "Leads B", value: totalB, color: "text-primary" },
              { icon: Calendar, label: "RDV cette semaine", value: 3, color: "text-warning" },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-4 shadow-card">
                <s.icon className={`w-5 h-5 ${s.color} mb-2`} />
                <div className="font-heading text-2xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
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
            <div className="flex gap-2">
              {["all", "A", "B", "C"].map((s) => (
                <Button
                  key={s}
                  size="sm"
                  variant={filterScore === s ? "default" : "outline"}
                  onClick={() => setFilterScore(s)}
                >
                  {s === "all" ? "Tous" : `Score ${s}`}
                </Button>
              ))}
            </div>
          </div>

          {/* Leads table */}
          <div className="bg-card rounded-xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">Lead</th>
                    <th className="text-left p-4 font-semibold text-foreground hidden md:table-cell">Statut pro</th>
                    <th className="text-left p-4 font-semibold text-foreground hidden lg:table-cell">Revenus</th>
                    <th className="text-center p-4 font-semibold text-foreground">Score</th>
                    <th className="text-left p-4 font-semibold text-foreground hidden md:table-cell">Éco. fiscales</th>
                    <th className="text-left p-4 font-semibold text-foreground">Étape</th>
                    <th className="text-right p-4 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead) => (
                    <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <div className="font-medium text-foreground">{lead.nom}</div>
                        <div className="text-xs text-muted-foreground">{lead.email}</div>
                      </td>
                      <td className="p-4 hidden md:table-cell capitalize text-muted-foreground">{lead.status}</td>
                      <td className="p-4 hidden lg:table-cell text-foreground">{lead.revenu.toLocaleString("fr-FR")} €</td>
                      <td className="p-4 text-center">{scoreBadge(lead.score)}</td>
                      <td className="p-4 hidden md:table-cell text-accent font-semibold">{lead.economiesFiscales.toLocaleString("fr-FR")} €</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${etapeColor[lead.etape]}`}>
                          {etapeLabel[lead.etape]}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="sm"><Phone className="w-4 h-4" /></Button>
                          <Button variant="ghost" size="sm"><Mail className="w-4 h-4" /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorDashboard;
