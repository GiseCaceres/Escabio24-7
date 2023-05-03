import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../utils/data";
import Cards from "./ContentCard/index";

const Card = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setItems([]);
    if (category !== undefined)
      setItems(data.filter((item) => item.category == category));
    else setItems(data);
  }, [category]);

  return (
    <>
      {items.map((obj, id) => (
        <Cards
          key={id}
          img={obj.img}
          title={obj.title}
          description={obj.description}
          price={obj.price}
          id={obj.id}
        ></Cards>
      ))}
    </>
  );
};

export default Card;
