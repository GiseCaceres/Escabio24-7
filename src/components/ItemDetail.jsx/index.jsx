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
          <div
            className="conteinerDetail__img"
            src={prod.img}
            alt="Card image"
          ></div>
          <div className="conteinerDetail__body">
            <h4>{prod.title}</h4>
            <p className="conteinerDetail__body__Text">{prod.description}</p>
            <p className="conteinerDetail__body__price">{prod.price}</p>
          </div>
        </div>
      ) : (
        <h1>{prod.error}</h1>
      )}
    </>
  );
};

export default ItemDetail;
