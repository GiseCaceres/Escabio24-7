import { useEffect, useState } from "react";
import Card from "../Card";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const [search, setSearch] = useState("");
  const [priceLess, setPriceLess] = useState(null);
  const [priceBigger, setPriceBigger] = useState(null);
  const categoryOptions = [
    { id: "", label: "todo" },
    { id: "fernet", label: "Fernet" },
    { id: "vodka", label: "Vodka" },
    { id: "espumantes", label: "Espumantes" },
    { id: "ron", label: "Ron" },
    { id: "cerveza", label: "Cerveza" },
    { id: "gin tonic", label: "Gin tonic" },
    { id: "aperitivos", label: "Aperitivos" },
    { id: "wisky", label: "Wisky" },
    { id: "comestible", label: "Comestible" },
  ];

  return (
    <main className="products">
      <aside className="products__aside">
        <h1 className="products__aside__title">Productos</h1>
        <section className="products__aside__search">
          <h1>Buscar</h1>
          <input
            type="text"
            placeholder="Buscar..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </section>
        <ul className="products__aside__list">
          <li className="active">
            <a>Categorias</a>
          </li>
          {categoryOptions.map((option) => (
            <Link
              style={{ textDecoration: "none" }}
              key={option.id}
              to={`/producto/${option.id}`}
            >
              <li>{option.label}</li>
            </Link>
          ))}
        </ul>
        <section className="products__aside__range">
          <h1>rango de precios</h1>
          <input
            type="number"
            placeholder="$1000"
            onChange={(e) => setPriceLess(e.target.value)}
            value={priceLess}
          />
          {" - "}
          <input
            type="number"
            placeholder="$5000"
            onChange={(e) => setPriceBigger(e.target.value)}
            value={priceBigger}
          />
        </section>
      </aside>
      <main className="products__main">
        <Card search={search} priceLess={priceLess} priceBigger={priceBigger} />
      </main>
    </main>
  );
};

export default Products;
