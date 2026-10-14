import BilanButton from "@/components/BilanButton";

const figures = [
  { value: "8 ans", label: "Assurance vie : abattement annuel sur les gains retirés après cette durée", source: "Service Public — fiscalité", href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35006/0_4" },
  { value: "4 600 €", label: "Abattement annuel pour une personne seule, après huit ans, hors prélèvements sociaux", source: "Service Public — fiscalité", href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35006/0_4" },
  { value: "152 500 €", label: "Abattement par bénéficiaire pour les capitaux décès éligibles, versements avant soixante-dix ans", source: "Service Public — transmission", href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F22414" },
];

const TrustBanner = () => (
  <section aria-label="Trois repères chiffrés" className="py-8 md:py-12 bg-card border-y border-border">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
        {figures.map((figure) => (
          <div key={figure.value} className="text-center">
            <p className="font-heading text-3xl font-bold text-copper">{figure.value}</p>
            <a href={figure.href} target="_blank" rel="noopener noreferrer" className="block mt-1 text-xs text-muted-foreground underline underline-offset-2">Source : {figure.source}</a>
            <p className="mt-2 text-sm text-foreground leading-snug">{figure.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center"><BilanButton /></div>
    </div>
  </section>
);

export default TrustBanner;
