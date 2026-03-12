import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-lg text-foreground">PatrimoineDigital</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Accueil</Link>
          <Link to="/simulateur" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Simulateur</Link>
          <Link to="/per-independants" className="text-sm text-muted-foreground hover:text-foreground transition-colors">PER</Link>
          <Link to="/retraite-dirigeants" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Retraite</Link>
          <Link to="/prevoyance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prévoyance</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/conseiller">
            <Button variant="ghost" size="sm">Espace conseiller</Button>
          </Link>
          <Link to="/simulateur">
            <Button size="sm">Bilan gratuit</Button>
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-2">
          <Link to="/" className="block py-2 text-sm text-muted-foreground" onClick={() => setOpen(false)}>Accueil</Link>
          <Link to="/simulateur" className="block py-2 text-sm text-muted-foreground" onClick={() => setOpen(false)}>Simulateur</Link>
          <Link to="/per-independants" className="block py-2 text-sm text-muted-foreground" onClick={() => setOpen(false)}>PER</Link>
          <Link to="/conseiller" className="block py-2 text-sm text-muted-foreground" onClick={() => setOpen(false)}>Espace conseiller</Link>
          <Link to="/simulateur" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full">Bilan gratuit</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
