import React, { useContext, useEffect } from "react";
import { data } from "../../utils/data";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CheckOut from "../checkout/index";
import { CardContext } from "../Context";
import { fontSize } from "@mui/system";

const ItemDetail = ({ id, setId }) => {
  const [prod, setProd] = useState({});
  let initial = 0;
  let producto = prod;
  let stock = prod.stock;

  const onAdd = (qsy) => {
    alert("Se agregaron " + qsy + " a tu carrito");
    setCount(qsy);
  };
  let addCarrito = onAdd;

  const context = useContext(CardContext);

  useEffect(() => {
    if (id !== undefined) setProd(data.find((item) => item.id == id));
    else setProd({ error: "El producto no esta disponible", valor: false });
    initial = 0;
    producto = prod;
    stock = prod.stock;
    addCarrito = onAdd;
  }, [id]);

  const [count, setCount] = useState(0);

  const addCart = () => {
    context.onAddCart(prod, count);
  };

  /* itemcount*/
  const [contador, setContador] = useState(initial);
  const { onAddCart } = useContext(CardContext);

  const increment = () => {
    //1

    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrement = () => {
    //2

    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  const agregar = () => {
    //3
    addCarrito(contador);
    onAddCart(producto, contador);
  };

  return (
    <>
      {!prod.valor ? (
        <div className="conteinerDetail">
          <div className="conteinerDetail__card">
            <div
              className="conteinerDetail__card__cruz"
              onClick={() => setId(undefined)}
            >
              <i
                class="fa-solid fa-xmark fa-1x"
                style={{ color: "black", fontSize: "25px" }}
              ></i>
            </div>
            <div className="conteinerDetail__card__image">
              <img
                className="conteinerDetail__card__image__img"
                src={prod.img}
                alt="Card image"
              ></img>
            </div>
            <div className="conteinerDetail__card__body">
              <div className="conteinerDetail__card__body__contentTitle">
                <h1 className="conteinerDetail__card__body__contentTitle__titleItem">
                  {prod.title}
                </h1>
                <p className="conteinerDetail__card__body__contentTitle__price">
                  ${prod.price}
                </p>
              </div>

              <div className="conteinerDetail__card__body__cont">
                <p className="conteinerDetail__card__body__cont__description">
                  {prod.description}
                </p>
              </div>

              <div className="conteinerDetail__body__count">
                <div className="count__cont">
                  <div className="count__cont__countTitle">
                    <p className="count__cont__countTitle__ti">Unidades</p>
                  </div>

                  <div className="count__cont__buttonsConteiner">
                    <button
                      className="count__cont__buttonsConteiner__buttons"
                      onClick={decrement}
                    >
                      -
                    </button>

                    <span className="count__cont__buttonsConteiner__contador">
                      {contador}
                    </span>

                    <button
                      className="count__cont__buttonsConteiner__buttons"
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                </div>
                {count === 0 ? (
                  <div className="count__agregar">
                    <button
                      className="count__agregar__buttonA"
                      onClick={agregar}
                    >
                      AGREGAR
                    </button>
                  </div>
                ) : (
                  // <ItemCount
                  //   stock={prod.stock}
                  //   initial={0}
                  //   addCarrito={onAdd}
                  //   producto={prod}
                  // />
                  <CheckOut />
                )}
              </div>
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
