import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CGU = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 py-24 max-w-3xl">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
        Conditions générales d'utilisation
      </h1>
      <p className="text-sm text-muted-foreground mb-10">Dernière mise à jour : mai 2026</p>

      <div className="space-y-8 text-foreground/80 leading-relaxed">

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Objet</h2>
          <p>
            Les présentes conditions générales d'utilisation (CGU) régissent l'accès et
            l'utilisation du site <strong>retiro-patrimoine.fr</strong>, édité par MOPA,
            15 rue Trèbois, 92300 Levallois-Perret (SIREN : 808 322 580).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Acceptation des CGU
          </h2>
          <p>
            L'utilisation du site implique l'acceptation pleine et entière des présentes CGU.
            Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Accès au site
          </h2>
          <p>
            Le site est accessible gratuitement à tout utilisateur disposant d'un accès à
            Internet. MOPA se réserve le droit de suspendre ou d'interrompre l'accès au site
            à tout moment, sans préavis, pour maintenance ou mise à jour.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Simulateur de retraite
          </h2>
          <p>
            Le simulateur proposé sur ce site fournit des <strong>estimations indicatives</strong> basées
            sur les paramètres renseignés par l'utilisateur, les barèmes fiscaux en vigueur et
            les taux de remplacement moyens par statut. Ces résultats :<br /><br />
            — Ne constituent <strong>pas un conseil personnalisé</strong> en investissement ou en assurance<br />
            — Ne représentent <strong>pas un engagement contractuel</strong> de MOPA<br />
            — Sont fournis à titre purement <strong>informatif et pédagogique</strong><br /><br />
            Pour une analyse personnalisée et des recommandations adaptées à votre situation,
            un entretien avec un conseiller MOPA est nécessaire.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Activité réglementée
          </h2>
          <p>
            MOPA est immatriculée à l'ORIAS en qualité de courtier en assurance (n° ORIAS : [À COMPLÉTER]).
            Les conseils en assurance fournis par MOPA sont soumis aux dispositions de la
            Directive sur la Distribution d'Assurances (DDA) et au Code des assurances.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Propriété intellectuelle
          </h2>
          <p>
            Tous les éléments du site (textes, visuels, logos, algorithmes de simulation) sont
            protégés par le droit de la propriété intellectuelle et sont la propriété exclusive
            de MOPA. Toute reproduction ou utilisation non autorisée est interdite et susceptible
            de constituer une contrefaçon.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Responsabilité
          </h2>
          <p>
            MOPA s'efforce de fournir des informations fiables et actualisées. Toutefois, elle
            ne garantit pas l'exactitude, la complétude ou l'actualité des informations diffusées.
            Les simulations sont basées sur les données déclarées par l'utilisateur — toute
            inexactitude dans les données saisies affecte la pertinence des résultats.
            L'utilisateur est seul responsable de l'utilisation qu'il fait des résultats obtenus.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Liens hypertextes
          </h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. MOPA n'exerce aucun contrôle
            sur ces sites et décline toute responsabilité quant à leur contenu ou leur
            disponibilité.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Données personnelles
          </h2>
          <p>
            La collecte et le traitement des données personnelles sont décrits dans notre{" "}
            <a href="/politique-de-confidentialite" className="text-copper hover:underline">
              politique de confidentialité
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Droit applicable et juridiction
          </h2>
          <p>
            Les présentes CGU sont soumises au droit français. Tout litige relatif à
            l'utilisation du site sera soumis, à défaut de résolution amiable, à la compétence
            exclusive des tribunaux de Nanterre.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Modification des CGU
          </h2>
          <p>
            MOPA se réserve le droit de modifier les présentes CGU à tout moment. Les
            modifications prennent effet dès leur publication sur le site. La date de dernière
            mise à jour est indiquée en haut de cette page.
          </p>
        </section>

      </div>
    </main>
    <Footer />
  </div>
);

export default CGU;
