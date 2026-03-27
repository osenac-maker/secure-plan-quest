import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MentionsLegales = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 py-24 max-w-3xl">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">Mentions légales</h1>

      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Éditeur du site</h2>
          <p>
            Le site <strong>retiro-patrimoine.com</strong> est édité par :<br />
            <strong>MOPA</strong><br />
            Siège social : 15 rue Trèbois, 92300 Levallois-Perret<br />
            Forme juridique : [À COMPLÉTER]<br />
            SIREN : 808 322 580<br />
            RCS Nanterre : 808 322 580<br />
            Capital social : [À COMPLÉTER]
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Directeur de la publication</h2>
          <p>[À COMPLÉTER — Nom du dirigeant]</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>
            Email : [À COMPLÉTER]<br />
            Téléphone : [À COMPLÉTER]
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Hébergement</h2>
          <p>
            Ce site est hébergé par :<br />
            <strong>Lovable</strong><br />
            Site : <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-copper hover:underline">lovable.dev</a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Activité réglementée</h2>
          <p>
            MOPA exerce une activité de conseil en gestion de patrimoine.<br />
            N° ORIAS : [À COMPLÉTER] — vérifiable sur <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" className="text-copper hover:underline">www.orias.fr</a><br />
            Assurance Responsabilité Civile Professionnelle : [À COMPLÉTER — Compagnie et n° contrat]
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de MOPA ou de ses partenaires. Toute reproduction, représentation ou diffusion, en tout ou partie, du contenu de ce site est interdite sans autorisation écrite préalable.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Limitation de responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont présentées à titre indicatif et ne constituent en aucun cas un conseil personnalisé. MOPA ne saurait être tenue responsable de l'utilisation qui pourrait être faite de ces informations.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default MentionsLegales;
