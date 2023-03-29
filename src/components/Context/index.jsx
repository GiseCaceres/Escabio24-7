import { createContext, useState } from "react";

export const CardContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cardList, setCartList] = useState([]);

  const onAddCart = (item) => {
    setCartList([...cardList, item]);
  };
  return (
    <>
      <CardContext.Provider value={{ cardList, onAddCart }}>
        {children}
      </CardContext.Provider>
    </>
  );
};

export default CartContextProvider;
