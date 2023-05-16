import Card from "../Card";

const Products = () => {
  return (
    <>
      <main className="products">
        <aside className="products__aside">
          <h1 className="products__aside__title">Productos</h1>
          <section className="products__aside__search">
            <h1>Buscar</h1>
            <input className="" type="text" placeholder="Buscar..." />
          </section>
          <ul className="products__aside__list">
            <li className="active">
              <a>Categorias</a>
            </li>
            <li>
              <a>Fernet</a>
            </li>
            <li>
              <a>Vodka</a>
            </li>
            <li>
              <a>Espumantes</a>
            </li>
            <li>
              <a>Vino tinto</a>
            </li>
            <li>
              <a>Cerveza</a>
            </li>
            <li>
              <a>Gin tonic</a>
            </li>
            <li>
              <a>Gancia</a>
            </li>
            <li>
              <a>Wisky</a>
            </li>
            <li>
              <a>otros</a>
            </li>
          </ul>
          <section className="products__aside__range">
            <h1>rango de precios</h1>
            <input className="" type="text" placeholder="$1000" /> -{" "}
            <input className="" type="text" placeholder="$5000" />
          </section>
        </aside>
        <main className="products__main">
          <Card></Card>
        </main>
      </main>
    </>
  );
};

export default Products;
