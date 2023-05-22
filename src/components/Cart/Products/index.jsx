import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CardContext } from "../../Context";

const Products = ({ obj }) => {
  const [calculo, setCalculo] = useState(obj.quantity);
  const context = useContext(CardContext);

  useEffect(() => {
    context.modOnCart(obj, calculo);
  }, [calculo]);

  const count = (num) => {
    if (num > 0) {
      setCalculo(calculo + 1);
    } else if (calculo > 0) setCalculo(calculo - 1);
  };

  return (
    <div>
      <div className="cart__product">
        <div className="cart__product__container">
          <div className="cart__product__container__imageContainer">
            <img
              className="cart__product__container__imageContainer__image"
              alt="bebidas"
              src={obj.img}
            />
          </div>
          <div className="cart__product__container__detail">
            <h4 className="cart__product__container__detail__title">
              {obj.title}
            </h4>
            <div className="cart__product__container__detail__row">
              <span className="cart__product__container__detail__row__price">
                ${obj.price}
              </span>
            </div>
            <section className="cart__product__container__detail__resume">
              <div className="cart__product__container__detail__resume__total">
                <span>Total: ${obj.total}</span>
              </div>
            </section>
            <section className="buttonsConteiner">
              <button className="buttons" onClick={() => count(0, obj)}>
                -
              </button>

              <span className="cart__product__container__detail__count__quantity">
                {calculo}
              </span>

              <button className="buttons" onClick={() => count(1, obj)}>
                +
              </button>
            </section>
          </div>
        </div>
        <button onClick={() => context.onRemoveFromCart(obj)}>Borrar</button>
      </div>
    </div>
  );
};

export default Products;
