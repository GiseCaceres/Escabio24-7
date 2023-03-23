import React, { useEffect } from "react";
import { data } from "../../utils/data";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ItemCount from "../ItemCount/index";
import CheckOut from "../checkout/index";

const ItemDetail = () => {
  const { id } = useParams();
  const [prod, setProd] = useState({});

  useEffect(() => {
    if (id !== undefined) setProd(data.find((item) => item.id == id));
    else setProd({ error: "El producto no esta disponible", valor: false });
    console.log(prod);
  }, [id]);

  const [count, setCount] = useState(0);

  const onAdd = (qsy) => {
    alert("Se agregaron " + qsy + " a tu carrito");
    setCount(qsy);
  };

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
            <h1 className="conteinerDetail__body__titleItem">{prod.title}</h1>
            <p className="conteinerDetail__body__Text">{prod.description}</p>
            <p className="conteinerDetail__body__price">{prod.price}</p>
            <div className="conteinerDetail__body__buttons"></div>
            <div className="conteinerDetail__body__count">
              {count === 0 ? (
                <ItemCount stock={prod.stock} initial={0} addCarrito={onAdd} />
              ) : (
                <CheckOut />
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1>{prod.error}</h1>
      )}
    </>
  );
};

export default ItemDetail;
