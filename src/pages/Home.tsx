import "./Home.css";


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
    </main>
  );
}

export default Home;