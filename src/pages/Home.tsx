import "./Home.css";
import ServiceCard from "../components/services/ServiceCard";
import Approach from "../components/section/Approach";


function Home() {
  return (
    <main>
      <section className="hero">
        <p className="hero-eyebrow">Agence web à Niort</p>
        <h1>Votre présence web, simplement.</h1>
        <p className="hero-description">Nous créons des sites modernes et performants pour les entreprises et associations locales.</p>
        <div className="hero-actions">
            <a href="/services" className="btn btn-primary">Découvrir nos services</a>
            <a href="/portfolio" className="btn btn-secondary">Nos projets</a>
        </div>
      </section>
      <Approach />
    <section className="services">
        <div className="section-heading">
            <p>Ce que nous faisons</p>
            <h2>Des solutions web pensées pour votre activité.</h2>
        </div>

  <div className="services-grid">
  <ServiceCard
    number="01"
    type="website"
    title="Création de sites vitrines"
    description="Des sites modernes et performants pour présenter votre activité."
  />

  <ServiceCard
    number="02"
    type="ecommerce"
    title="E-commerce"
    description="Des boutiques en ligne pensées pour vos clients et votre activité."
  />

  <ServiceCard
    number="03"
    type="maintenance"
    title="Maintenance & évolution"
    description="Un accompagnement dans le temps pour garder votre site à jour."
  />
</div>
</section>



    </main>
  );
}

export default Home;