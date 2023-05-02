import { createContext, useState } from "react";

export const CardContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cardList, setCartList] = useState([]);

  // const onAddCart = (item) => {
  //   setCartList([...cardList, item]);
  // };
  const isInCart = (id) =>
    cardList.find((product) => product.id === id) ? true : false;

  const onAddCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCartList(
        cardList.map((product) => {
          return product.id === item.id
            ? {
                ...product,
                quantity: product.quantity + quantity,
                total: product.total + totalPrice(quantity, item.price),
              }
            : product;
        })
      );
    } else {
      setCartList([
        ...cardList,
        {
          ...item,
          quantity: quantity,
          total: totalPrice(quantity, item.price),
        },
      ]);
    }
  };

  const totalPrice = (quantity, price) => {
    return quantity * price;
  };

  const onRemoveFromCart = (item) => {
    const updatedCartList = cardList.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartList(updatedCartList);
  };

  const globalTotal = () => {
    return cardList.reduce((cont, value) => cont + value.total, 0);
  };

  const clearCart = () => setCartList([]);

  return (
    <>
      <CardContext.Provider
        value={{
          cardList,
          onAddCart,
          onRemoveFromCart,
          clearCart,
          totalPrice,
          globalTotal,
        }}
      >
        {children}
      </CardContext.Provider>
    </>
  );
};

export default CartContextProvider;
