import { useState } from "react";
import Card from "../Card";

const Products = () => {
  const [option, setOption] = useState(undefined);
  const [search, setSearch] = useState("");
  const [priceLess, setPriceLess] = useState(null);
  const [priceBigger, setPriceBigger] = useState(null);
  return (
    <>
      <main className="products">
        <aside className="products__aside">
          <h1 className="products__aside__title">Productos</h1>
          <section className="products__aside__search">
            <h1>Buscar</h1>
            <input
              className=""
              type="text"
              placeholder="Buscar..."
              onChange={(data) => {
                setSearch(data.target.value);
              }}
              value={search}
            />
          </section>
          <ul className="products__aside__list">
            <li className="active">
              <a>Categorias</a>
            </li>
            <li onClick={() => setOption(undefined)}>
              <a>todo</a>
            </li>
            <li onClick={() => setOption(1)}>
              <a>Fernet</a>
            </li>
            <li onClick={() => setOption(2)}>
              <a>Vodka</a>
            </li>
            <li onClick={() => setOption(7)}>
              <a>Espumantes</a>
            </li>
            <li onClick={() => setOption(5)}>
              <a>Ron</a>
            </li>
            <li onClick={() => setOption(8)}>
              <a>Cerveza</a>
            </li>
            <li onClick={() => setOption(3)}>
              <a>Gin tonic</a>
            </li>
            <li onClick={() => setOption(6)}>
              <a>Aperitivos</a>
            </li>
            <li onClick={() => setOption(4)}>
              <a>Wisky</a>
            </li>
            <li onClick={() => setOption(9)}>
              <a>Comestible</a>
            </li>
          </ul>
          <section className="products__aside__range">
            <h1>rango de precios</h1>
            <input
              className=""
              type="number"
              placeholder="$1000"
              onChange={(data) => setPriceLess(data.target.value)}
              value={priceLess}
            />{" "}
            -{" "}
            <input
              className=""
              type="number"
              placeholder="$5000"
              onChange={(data) => setPriceBigger(data.target.value)}
              value={priceBigger}
            />
          </section>
        </aside>
        <main className="products__main">
          <Card
            optional={option}
            search={search}
            priceLess={priceLess}
            priceBigger={priceBigger}
          ></Card>
        </main>
      </main>
    </>
  );
};

export default Products;
