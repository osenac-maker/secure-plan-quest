import { Link } from "react-router-dom";
import logoRetiro from "@/assets/logo-retiro-monogram.png";

const Footer = () => (
  <footer className="bg-mahogany border-t border-mahogany-light py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={logoRetiro} alt="RETIRO Patrimoine" className="h-24 w-auto mb-4" />
          <p className="text-sm text-white/50 leading-relaxed">
            Vous tenez le cap. Nous optimisons la trajectoire.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-lg">Solutions</h4>
          <div className="space-y-3">
            <Link to="/per-independants" className="block text-sm text-white/50 hover:text-copper transition-colors">PER Indépendants</Link>
            <Link to="/retraite-dirigeants" className="block text-sm text-white/50 hover:text-copper transition-colors">Assurance Vie</Link>
            <Link to="/prevoyance" className="block text-sm text-white/50 hover:text-copper transition-colors">Prévoyance</Link>
            <Link to="/crypto" className="block text-sm text-white/50 hover:text-copper transition-colors">Crypto</Link>
            <Link to="/etf" className="block text-sm text-white/50 hover:text-copper transition-colors">ETF</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-lg">Outils</h4>
          <div className="space-y-3">
            <Link to="/simulateur" className="block text-sm text-white/50 hover:text-copper transition-colors">Simulateur retraite</Link>
            <Link to="/simulateur" className="block text-sm text-white/50 hover:text-copper transition-colors">Audit fiscal</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-lg">Légal</h4>
          <div className="space-y-3">
            <Link to="/mentions-legales" className="block text-sm text-white/50 hover:text-copper transition-colors">Mentions légales</Link>
            <Link to="/politique-de-confidentialite" className="block text-sm text-white/50 hover:text-copper transition-colors">Politique de confidentialité</Link>
            <Link to="/cgu" className="block text-sm text-white/50 hover:text-copper transition-colors">CGU</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
        © {new Date().getFullYear()} RETIRO Patrimoine. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
