import "./Approach.css";

function Approach() {
  return (
    <section className="approach">
      <div className="approach__image">
        <img
          src="/images/approach.jpg"
          alt="L'équipe GreenWeb travaillant sur un projet web"
        />
      </div>

      <div className="approach__content">
        <p className="approach__eyebrow">Notre approche</p>

        <h2>
          Une agence web proche
          <br />
          de ses clients.
        </h2>

        <p>
          Nous accompagnons les entreprises et associations de la région
          niortaise dans la création et l'évolution de leur présence en ligne.
        </p>

        <p>
          Notre objectif est simple : créer des sites modernes, efficaces et
          faciles à faire évoluer, sans complexifier inutilement les choses.
        </p>

        <a href="/agency" className="approach__link">
          Découvrir GreenWeb <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Approach;