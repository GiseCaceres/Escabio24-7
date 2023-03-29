import { CardContext } from "../Context";
import { useContext } from "react";

const Cart = () => {
  const context = useContext(CardContext);
  console.log(context.cardList);
  return (
    <>
      <div className="cart">
        <section className="cart__product">
          {context.cardList.map((obj) => (
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
                        {obj.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="cart__resume"></section>
      </div>
    </>
  );
};

export default Cart;
