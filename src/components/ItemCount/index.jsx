import { useState } from "react";
import { useContext } from "react";
import { CardContext } from "../Context";

const ItemCount = ({ stock, initial, addCarrito, producto }) => {
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
    <div className="count">
      <div className="count__buttonsConteiner">
        <button
          className="count__buttonsConteiner__buttons"
          onClick={decrement}
        >
          -
        </button>

        <span className="count__buttonsConteiner__contador">{contador}</span>

        <button
          className="count__buttonsConteiner__buttons"
          onClick={increment}
        >
          +
        </button>
      </div>

      <button className="count__agregar" onClick={agregar}>
        AGREGAR
      </button>
    </div>
  );
};

export default ItemCount;
