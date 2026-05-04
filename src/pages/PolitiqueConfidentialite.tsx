import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PolitiqueConfidentialite = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 py-24 max-w-3xl">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
        Politique de confidentialité
      </h1>
      <p className="text-sm text-muted-foreground mb-10">Dernière mise à jour : mai 2026</p>

      <div className="space-y-8 text-foreground/80 leading-relaxed">

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Responsable du traitement
          </h2>
          <p>
            <strong>MOPA</strong><br />
            15 rue Trèbois, 92300 Levallois-Perret<br />
            SIREN : 808 322 580<br />
            Email :{" "}
            <a href="mailto:retiropatrimoine@gmail.com" className="text-copper hover:underline">
              retiropatrimoine@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Données collectées
          </h2>
          <p>Dans le cadre de l'utilisation du site et du simulateur, nous collectons :</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Données d'identification : nom, email, téléphone</li>
            <li>Données professionnelles : statut, revenus annuels, régime fiscal estimé</li>
            <li>Données de simulation : âge, situation familiale, épargne, objectif patrimonial</li>
            <li>Données de navigation : adresse IP, pages consultées, cookies techniques</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Finalités du traitement
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Réaliser des simulations de retraite personnalisées</li>
            <li>Vous recontacter suite à une demande de bilan gratuit</li>
            <li>Qualifier votre profil pour vous proposer des solutions adaptées</li>
            <li>Améliorer nos services et l'expérience utilisateur</li>
            <li>Respecter nos obligations légales et réglementaires (DDA, RGPD)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Base légale
          </h2>
          <p>
            Le traitement de vos données repose sur :<br />
            — Votre <strong>consentement explicite</strong> lors de la soumission du formulaire simulateur<br />
            — L'<strong>exécution de mesures précontractuelles</strong> à votre demande (bilan retraite)<br />
            — Notre <strong>intérêt légitime</strong> à améliorer nos services
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Durée de conservation
          </h2>
          <p>
            Vos données personnelles sont conservées pendant une durée maximale de <strong>3 ans</strong> à
            compter du dernier contact actif, sauf obligation légale contraire.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Destinataires et sous-traitants
          </h2>
          <p>Vos données sont traitées par MOPA et les sous-traitants suivants :</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Airtable Inc.</strong> (États-Unis) — stockage des leads.
              Couvert par les clauses contractuelles types de la Commission européenne.
            </li>
            <li>
              <strong>Vercel Inc.</strong> (États-Unis) — hébergement du site.
              Couvert par les clauses contractuelles types de la Commission européenne.
            </li>
          </ul>
          <p className="mt-3">
            Aucune donnée n'est vendue ou transmise à des tiers à des fins commerciales.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Transferts hors UE
          </h2>
          <p>
            Airtable et Vercel sont des sociétés américaines. Les transferts sont encadrés par des
            clauses contractuelles types approuvées par la Commission européenne.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Vos droits
          </h2>
          <p>
            Conformément au RGPD, vous disposez des droits d'accès, rectification, effacement,
            portabilité, opposition, limitation et retrait du consentement.
          </p>
          <p className="mt-3">
            Pour exercer vos droits :{" "}
            <a href="mailto:retiropatrimoine@gmail.com" className="text-copper hover:underline">
              retiropatrimoine@gmail.com
            </a>. Réponse sous un mois.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Cookies
          </h2>
          <p>
            Ce site utilise uniquement des cookies techniques strictement nécessaires au
            fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est déposé sans
            votre consentement.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Réclamation
          </h2>
          <p>
            Vous pouvez introduire une réclamation auprès de la CNIL :{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline"
            >
              www.cnil.fr
            </a>
          </p>
        </section>

      </div>
    </main>
    <Footer />
  </div>
);

export default PolitiqueConfidentialite;
