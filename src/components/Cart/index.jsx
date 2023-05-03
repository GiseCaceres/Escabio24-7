import { CardContext } from "../Context";
import { useContext } from "react";
import { useState } from "react";
import FormularioCompra from "../Form";

const Cart = () => {
  const context = useContext(CardContext);
  const { onRemoveFromCart, clearCart, globalTotal } = useContext(CardContext);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const handleCloseFormulario = () => {
    setMostrarFormulario(false);
  };

  const handleFinalizarCompra = () => {
    const productos = context.cardList.map((obj) => {
      return {
        title: obj.title,
        quantity: obj.quantity,
        price: obj.price,
        total: obj.total,
      };
    });
    setProductosSeleccionados(productos);
    setMostrarFormulario(true);
  };

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
                    <div>
                      <span className="cart__product__container__detail__cantidad">
                        Cantidad: {obj.quantity}
                      </span>
                    </div>
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
                  </div>
                </div>
                <button onClick={() => onRemoveFromCart(obj)}>Borrar</button>
              </div>
            </div>
          ))}
          <h1>Total: ${globalTotal()}</h1>
          <button className="removeAll" onClick={() => clearCart()}>
            Borrar todo
          </button>
          <button className="removeAll" onClick={handleFinalizarCompra}>
            Finalizar compra
          </button>
          <button className="removeAll">Continuar comprando</button>
          <FormularioCompra
            mostrarFormulario={mostrarFormulario}
            handleCloseFormulario={handleCloseFormulario}
            productosSeleccionados={productosSeleccionados}
          />
        </section>
      </div>
    </>
  );
};

export default Cart;
