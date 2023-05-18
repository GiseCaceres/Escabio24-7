import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../utils/data";
import Cards from "./ContentCard/index";

const Card = ({ optional, search, priceLess, priceBigger }) => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  function removeDiacritic(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
  }
  useEffect(() => {
    console.log(priceLess, priceBigger);
    let filtrado = category
      ? data.filter((item) => item.category == category)
      : (optional && data.filter((item) => item.category == optional)) || data;

    if (search) {
      filtrado = filtrado.filter((item) =>
        removeDiacritic(item.title).includes(removeDiacritic(search))
      );
    }
    if (priceLess || priceBigger) {
      filtrado = filtrado.filter(
        (item) =>
          item.price >= (priceLess || 0) &&
          item.price <= (priceBigger || Infinity)
      );
    }
    setItems(filtrado);
  }, [category, optional, search, priceLess, priceBigger]);

  return (
    <>
      {items.length > 0 ? (
        items.map((obj, id) => (
          <Cards
            key={id}
            img={obj.img}
            title={obj.title}
            description={obj.description}
            price={obj.price}
            id={obj.id}
          ></Cards>
        ))
      ) : (
        <h1>No hay productos de esta indole</h1>
      )}
    </>
  );
};

export default Card;
