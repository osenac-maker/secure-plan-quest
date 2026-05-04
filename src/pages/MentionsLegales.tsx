import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MentionsLegales = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 py-24 max-w-3xl">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
        Mentions légales
      </h1>
      <p className="text-sm text-muted-foreground mb-10">Dernière mise à jour : mai 2026</p>

      <div className="space-y-8 text-foreground/80 leading-relaxed">

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Éditeur du site
          </h2>
          <p>
            Le site <strong>retiro-patrimoine.fr</strong> est édité par :<br />
            <strong>MOPA</strong><br />
            Siège social : 15 rue Trèbois, 92300 Levallois-Perret<br />
            Forme juridique : EURL (Entreprise Unipersonnelle à Responsabilité Limitée)<br />
            SIREN : 808 322 580<br />
            RCS Nanterre : 808 322 580
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Directeur de la publication
          </h2>
          <p>Olivier Senac</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Contact
          </h2>
          <p>
            Email :{" "}
            <a href="mailto:retiropatrimoine@gmail.com" className="text-copper hover:underline">
              retiropatrimoine@gmail.com
            </a>
            <br />
            Téléphone : 06 22 82 88 44
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            Site :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline"
            >
              vercel.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Activité réglementée
          </h2>
          <p>
            MOPA exerce une activité de courtage en assurance et de conseil en gestion de patrimoine.<br />
            Immatriculation ORIAS : <em>en cours d'obtention</em> — vérifiable sur{" "}
            <a
              href="https://www.orias.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline"
            >
              www.orias.fr
            </a>
            <br />
            Autorité de contrôle : Autorité de Contrôle Prudentiel et de Résolution (ACPR),
            4 place de Budapest, CS 92459, 75436 Paris Cedex 09<br />
            Assurance Responsabilité Civile Professionnelle : <em>en cours de souscription</em>
          </p>
          <p className="mt-3 text-sm bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-amber-800">
            <strong>Note :</strong> Ce site est actuellement en phase MVP. MOPA est en cours
            d'immatriculation ORIAS. Aucun contrat d'assurance ne sera souscrit avant
            l'obtention définitive de cette immatriculation.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes,
            algorithmes de simulation) est la propriété exclusive de MOPA ou de ses partenaires.
            Toute reproduction, représentation ou diffusion, en tout ou partie, du contenu de
            ce site est interdite sans autorisation écrite préalable.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Limitation de responsabilité
          </h2>
          <p>
            Les informations contenues sur ce site sont présentées à titre indicatif et ne
            constituent en aucun cas un conseil personnalisé en investissement ou en assurance.
            Les simulations produites par le simulateur RETIRO sont des estimations basées sur
            les données saisies et ne constituent pas un engagement contractuel. MOPA ne saurait
            être tenue responsable de l'utilisation qui pourrait être faite de ces informations.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
            Médiation
          </h2>
          <p>
            Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, MOPA
            proposera un dispositif de médiation de la consommation dès l'obtention de son
            immatriculation ORIAS.
          </p>
        </section>

      </div>
    </main>
    <Footer />
  </div>
);

export default MentionsLegales;
