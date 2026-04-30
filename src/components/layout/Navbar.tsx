import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">

        {/* Logo texte */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-copper flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-copper-light transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-bold text-lg text-foreground tracking-wide">RETIRO</span>
            <span className="text-xs text-muted-foreground font-normal tracking-widest uppercase" style={{ fontSize: "9px" }}>Patrimoine</span>
          </div>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-sm px-4 py-2 transition-colors font-medium tracking-wide ${
                location.pathname === l.to
                  ? "text-copper"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {l.label}
              {location.pathname === l.to && (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-copper"
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/conseiller">
            <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground">
              Espace conseiller
            </Button>
          </Link>
          <Link to="/simulateur">
            <Button size="sm" className="bg-copper hover:bg-copper-light text-white border-0 font-medium">
              Faire mon bilan retraite gratuit
            </Button>
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white border-b border-border px-4 pb-4 space-y-1"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`block py-2 px-3 text-sm transition-colors ${
                  location.pathname === l.to ? "text-copper font-medium" : "text-muted-foreground"
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
              <Button size="sm" className="w-full bg-copper hover:bg-copper-light text-white border-0">
                Faire mon bilan retraite gratuit
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
