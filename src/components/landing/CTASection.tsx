import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-20 bg-hero">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Prêt à optimiser votre situation ?
      </h2>
      <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
        Faites votre audit retraite et fiscal gratuit en 2 minutes. Sans engagement, 100% confidentiel.
      </p>
      <Link to="/simulateur">
        <Button size="lg" variant="secondary" className="text-base gap-2 font-semibold px-8">
          Commencer mon bilan gratuit
          <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  </section>
);

export default CTASection;
