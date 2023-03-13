import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../utils/data";
import Cards from "./ContentCard/index";

const Card = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setItems([]);
    console.log(category);
    if (category !== undefined)
      setItems(data.filter((item) => item.category == category));
    else setItems(data);
    console.log(items);
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
        ></Cards>
      ))}
    </>
  );
};

export default Card;
