import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-hero bg-mesh px-4 py-32">
        <div className="text-center max-w-xl">
          <p className="font-heading text-7xl md:text-8xl font-bold text-gradient-gold mb-4">404</p>
          <div className="divider-gold mx-auto mb-6" />
          <h1 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Cette page n'existe pas (ou plus)
          </h1>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Le lien que vous avez suivi est peut-être erroné ou la page a été déplacée.
            Pas d'inquiétude, on vous remet sur la bonne voie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" variant="outline" className="gap-2 w-full">
                <Home className="w-4 h-4" />
                Retour à l'accueil
              </Button>
            </Link>
            <Link to="/simulateur">
              <Button size="lg" className="gap-2 bg-copper hover:bg-copper-light text-white border-0 w-full">
                <Calculator className="w-4 h-4" />
                Faire mon bilan retraite gratuit
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
