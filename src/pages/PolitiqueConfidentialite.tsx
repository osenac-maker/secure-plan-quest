import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PolitiqueConfidentialite = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 py-24 max-w-3xl">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">Politique de confidentialité</h1>

      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Responsable du traitement</h2>
          <p>
            <strong>MOPA</strong><br />
            15 rue Trèbois, 92300 Levallois-Perret<br />
            Email : <a href="mailto:retiropatrimoine@gmail.com" className="text-copper hover:underline">retiropatrimoine@gmail.com</a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Données collectées</h2>
          <p>Dans le cadre de l'utilisation du site et du simulateur, nous pouvons collecter :</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Données d'identification : nom, prénom, email, téléphone</li>
            <li>Données professionnelles : statut, revenus, régime fiscal</li>
            <li>Données de simulation : paramètres saisis dans le simulateur retraite</li>
            <li>Données de navigation : cookies, adresse IP, pages consultées</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Finalités du traitement</h2>
          <p>Vos données sont collectées pour :</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Réaliser des simulations de retraite personnalisées</li>
            <li>Vous recontacter suite à une demande de bilan</li>
            <li>Améliorer nos services et l'expérience utilisateur</li>
            <li>Respecter nos obligations légales et réglementaires</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Base légale</h2>
          <p>
            Le traitement de vos données repose sur votre consentement (formulaires, simulateur) et sur notre intérêt légitime (amélioration des services).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Durée de conservation</h2>
          <p>
            Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter du dernier contact, sauf obligation légale contraire.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Destinataires</h2>
          <p>
            Vos données sont destinées uniquement à MOPA et ne sont transmises à aucun tiers, sauf obligation légale ou sous-traitants nécessaires au fonctionnement du service (hébergement, outils d'analyse).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Droit d'accès, de rectification et de suppression</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d'opposition et de limitation du traitement</li>
            <li>Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p className="mt-3">
            Pour exercer vos droits, contactez-nous à : <strong><a href="mailto:retiropatrimoine@gmail.com" className="text-copper hover:underline">retiropatrimoine@gmail.com</a></strong>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Cookies</h2>
          <p>
            Ce site utilise des cookies techniques nécessaires au bon fonctionnement et des cookies d'analyse pour mesurer l'audience. Vous pouvez paramétrer vos préférences via le bandeau cookies affiché lors de votre première visite.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Réclamation</h2>
          <p>
            Vous pouvez introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-copper hover:underline">www.cnil.fr</a>
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default PolitiqueConfidentialite;
