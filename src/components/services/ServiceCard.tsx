import "./ServiceCard.css";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  type: "website" | "ecommerce" | "maintenance";
}

function ServiceCard({
  number,
  title,
  description,
  type,
}: ServiceCardProps) {
  return (
    <article className={`service-card service-card--${type}`}>

      <div className="service-card__top">
        <span>{number}</span>
        <span>GreenWeb</span>
      </div>

      <div className="service-card__visual">

        {/* SITE VITRINE */}
        {type === "website" && (
          <div className="browser">
            <div className="browser__bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="browser__content">
              <div className="browser__nav">
                <strong>GREEN</strong>
                <span>Accueil</span>
                <span>Services</span>
                <span>Contact</span>
              </div>

              <div className="browser__hero">
                <small>VOTRE ENTREPRISE</small>
                <h4>
                  Une présence
                  <br />
                  qui vous ressemble.
                </h4>
                <div className="browser__button"></div>
              </div>
            </div>
          </div>
        )}

        {/* E-COMMERCE */}
        {type === "ecommerce" && (
          <div className="browser ecommerce-browser">
            <div className="browser__bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="shop">

              <div className="shop__nav">
                <strong>GREEN</strong>
                <span>Collection</span>
                <span>À propos</span>
                <span>Panier</span>
              </div>

              <div className="shop__header">
                <small>NOUVELLE COLLECTION</small>
                <h4>
                  Des produits
                  <br />
                  qui ont du sens.
                </h4>
              </div>

              <div className="shop__products">

                <div className="product">
                  <div className="product__image product__image--one"></div>
                  <span>Produit naturel</span>
                  <strong>39 €</strong>
                </div>

                <div className="product">
                  <div className="product__image product__image--two"></div>
                  <span>Collection essentielle</span>
                  <strong>49 €</strong>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* MAINTENANCE */}
{type === "maintenance" && (
  <div className="browser maintenance-browser">
    <div className="browser__bar">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="maintenance">

      <div className="maintenance__nav">
        <strong>GREENWEB</strong>
        <span>Dashboard</span>
        <span>Activité</span>
      </div>

      <div className="maintenance__header">
        <div>
          <small>ÉTAT DU SITE</small>
          <h4>Tout fonctionne.</h4>
        </div>

        <div className="maintenance__status">
          <span></span>
          OK
        </div>
      </div>

      <div className="maintenance__stats">

        <div className="stat">
          <small>PERFORMANCE</small>
          <strong>98</strong>
          <span>/100</span>
        </div>

        <div className="stat">
          <small>DISPONIBILITÉ</small>
          <strong>99,9</strong>
          <span>%</span>
        </div>

      </div>

      <div className="maintenance__activity">
        <small>DERNIÈRES INTERVENTIONS</small>

        <div>
          <span className="activity-dot"></span>
          Mise à jour effectuée
          <time>Aujourd'hui</time>
        </div>

        <div>
          <span className="activity-dot"></span>
          Sauvegarde automatique
          <time>Hier</time>
        </div>
      </div>

    </div>
  </div>
)}

      </div>

      <div className="service-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <a href="/services" className="service-card__link">
        Découvrir <span>↗</span>
      </a>

    </article>
  );
}

export default ServiceCard;