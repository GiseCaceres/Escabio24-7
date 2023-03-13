import "../ContentCard/cardt.css";

const Cards = ({ img, title, description, price }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__image-container">
          <img className="card__image" alt="bebidas" src={img} />
        </div>
        <div className="card__details">
          <h4 className="card__title">{title}</h4>
          <div className="card__row">
            <span className="card__price">{price}</span>
          </div>
          {/* <div className="card__row">
              <span className="card__description">{description}</span>
            </div> */}
          <div className="card__contentButton">
            <a href="#" class="ov-btn-slide-left">
              COMPRAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
