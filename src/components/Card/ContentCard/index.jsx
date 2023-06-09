import { Link } from "react-router-dom";

const Cards = ({ img, title, price, id }) => {
  return (
    <div className="card">
      <div className="card__contenedor">
        <div className="card__contenedor__imagenContenedor">
          <img
            className="card__contenedor__imagenContenedor__imagen"
            alt="bebidas"
            src={img}
          />
        </div>
        <div className="card__contenedor__detalle">
          <h4 className="card__contenedor__detalle__titulo">{title}</h4>
          <div className="card__contenedor__detalle__row">
            <span className="card__contenedor__detalle__row__precio">
              {price}
            </span>
          </div>
          <div className="card__contenedor__detalle__contenedorButton">
            <Link
              to={`/producto/${id}`}
              class="card__contenedor__detalle__contenedorButton__ov-btn-slide-left"
            >
              VER MÁS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
