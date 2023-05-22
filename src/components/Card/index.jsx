import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../utils/data";
import Cards from "./ContentCard/index";

const Card = ({ search, priceLess, priceBigger, setId }) => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  function removeDiacritic(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
  }

  useEffect(() => {
    const filtrado = data.filter(
      (item) =>
        (!category || item.category === category) &&
        (!search ||
          removeDiacritic(item.title).includes(removeDiacritic(search))) &&
        item.price >= (priceLess || 0) &&
        item.price <= (priceBigger || Infinity)
    );
    setItems(filtrado || data);
  }, [category, search, priceLess, priceBigger]);

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
            setId={setId}
          />
        ))
      ) : (
        <h1>No hay productos de esta índole</h1>
      )}
    </>
  );
};

export default Card;
