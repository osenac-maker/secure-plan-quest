import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CGU = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 py-24 max-w-3xl">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">Conditions générales d'utilisation</h1>

      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Objet</h2>
          <p>
            Les présentes conditions générales d'utilisation (CGU) régissent l'accès et l'utilisation du site <strong>retiro-patrimoine.com</strong>, édité par MOPA, 15 rue Trèbois, 92300 Levallois-Perret.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Accès au site</h2>
          <p>
            Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. MOPA se réserve le droit de suspendre ou d'interrompre l'accès au site à tout moment, sans préavis, pour maintenance ou mise à jour.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Simulateur de retraite</h2>
          <p>
            Le simulateur proposé sur ce site fournit des estimations indicatives basées sur les paramètres renseignés par l'utilisateur et les régimes en vigueur. Les résultats ne constituent en aucun cas un engagement contractuel ni un conseil personnalisé. Pour une analyse complète, un rendez-vous avec un conseiller est recommandé.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Propriété intellectuelle</h2>
          <p>
            Tous les éléments du site (textes, visuels, logos, algorithmes de simulation) sont protégés par le droit de la propriété intellectuelle. Toute reproduction ou utilisation non autorisée est interdite.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Responsabilité</h2>
          <p>
            MOPA s'efforce de fournir des informations fiables et actualisées. Toutefois, elle ne saurait garantir l'exactitude, la complétude ou l'actualité des informations diffusées sur le site. L'utilisateur est seul responsable de l'utilisation qu'il fait des informations et résultats obtenus.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. MOPA n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Données personnelles</h2>
          <p>
            La collecte et le traitement des données personnelles sont décrits dans notre{" "}
            <a href="/politique-de-confidentialite" className="text-copper hover:underline">politique de confidentialité</a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Droit applicable</h2>
          <p>
            Les présentes CGU sont soumises au droit français. Tout litige relatif à l'utilisation du site sera soumis à la compétence des tribunaux de Nanterre.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Modification des CGU</h2>
          <p>
            MOPA se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le site. L'utilisateur est invité à consulter régulièrement cette page.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default CGU;
