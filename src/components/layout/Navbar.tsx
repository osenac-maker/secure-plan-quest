import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/simulateur", label: "Simulateur" },
  { to: "/per-independants", label: "PER" },
  { to: "/retraite-dirigeants", label: "Retraite" },
  { to: "/prevoyance", label: "Prévoyance" },
  { to: "/mutuelle", label: "Mutuelle" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/90 backdrop-blur-xl shadow-card border-b border-border" : "bg-transparent backdrop-blur-sm"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Shield className="w-5 h-5 text-primary-foreground" />
          </motion.div>
          <span className="font-heading font-bold text-lg text-foreground">PatrimoineDigital</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-sm px-3 py-2 rounded-lg transition-colors ${
                location.pathname === l.to
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {l.label}
              {location.pathname === l.to && (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary"
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/conseiller">
            <Button variant="ghost" size="sm">Espace conseiller</Button>
          </Link>
          <Link to="/simulateur">
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0">
              Bilan gratuit
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border px-4 pb-4 space-y-1"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`block py-2 px-3 text-sm rounded-lg transition-colors ${
                  location.pathname === l.to ? "text-primary bg-primary/5 font-medium" : "text-muted-foreground"
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/conseiller" className="block py-2 px-3 text-sm text-muted-foreground" onClick={() => setOpen(false)}>
              Espace conseiller
            </Link>
            <Link to="/simulateur" onClick={() => setOpen(false)}>
              <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
                Bilan gratuit
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
