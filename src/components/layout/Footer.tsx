import { Link } from "react-router-dom";
import logoRetiro from "@/assets/logo-retiro-v2.png";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-foreground">RETIRO <span className="font-normal">Patrimoine</span></span>
          </div>
          <p className="text-sm text-muted-foreground">
            Cabinet de conseil en gestion de patrimoine digital. Optimisez votre retraite et votre fiscalité.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Solutions</h4>
          <div className="space-y-2">
            <Link to="/per-independants" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">PER Indépendants</Link>
            <Link to="/retraite-dirigeants" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Retraite Dirigeants</Link>
            <Link to="/prevoyance" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Prévoyance</Link>
            <Link to="/mutuelle" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Mutuelle TNS</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Outils</h4>
          <div className="space-y-2">
            <Link to="/simulateur" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Simulateur retraite</Link>
            <Link to="/simulateur" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Audit fiscal</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Légal</h4>
          <div className="space-y-2">
            <span className="block text-sm text-muted-foreground">Mentions légales</span>
            <span className="block text-sm text-muted-foreground">Politique de confidentialité</span>
            <span className="block text-sm text-muted-foreground">CGU</span>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} RETIRO Patrimoine. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
