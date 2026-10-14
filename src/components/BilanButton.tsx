import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BilanButton = ({ className }: { className?: string }) => (
  <Button asChild size="lg" className={cn("h-auto min-h-11 w-full sm:w-auto whitespace-normal bg-copper hover:bg-copper-light text-accent-foreground border-0 gap-2 px-5 py-3 font-medium group", className)}>
    <Link to="/simulateur">Faire mon bilan retraite gratuit<ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" /></Link>
  </Button>
);

export default BilanButton;