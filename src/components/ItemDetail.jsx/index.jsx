import React, { useEffect } from "react";
import { data } from "../../utils/data";
import { useParams } from "react-router-dom";
import { useState } from "react";
const ItemDetail = () => {
  const { id } = useParams();
  const [prod, setProd] = useState({});

  useEffect(() => {
    if (id !== undefined) setProd(data.find((item) => item.id == id));
    else setProd({ error: "El producto no esta disponible", valor: false });
    console.log(prod);
  }, [id]);

  return (
    <>
      {!prod.valor ? (
        <div className="conteinerDetail">
          <img
            className="conteinerDetail__img"
            src={prod.img}
            alt="Card image"
          ></img>
          <div className="conteinerDetail__body">
            <h1>{prod.title}</h1>
            <p className="conteinerDetail__body__Text">{prod.description}</p>
            <p className="conteinerDetail__body__price">{prod.price}</p>
            <div className="conteinerDetail__body__buttons"></div>
            <button className="conteinerDetail__body__buttons__ov-btn-slide">
              AGREGAR
            </button>
            <button className="conteinerDetail__body__buttons__ov-btn-slide">
              VER CARRITO
            </button>
          </div>
        </div>
      ) : (
        <h1>{prod.error}</h1>
      )}
    </>
  );
};

export default ItemDetail;
