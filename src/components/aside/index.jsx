import { Link } from "react-router-dom";

const Aside = ({ Main }) => {
  const sections = [
    {
      title: "Gintonic",
      category: "gin tonic",
      url: "../asset/gin.png",
    },
    {
      category: "fernet",
      title: "Fernet",
      url: "../asset/fernet.png",
    },
    {
      category: "vodka",
      title: "Vodka",
      url: "../asset/vodka.png",
    },
    {
      category: "espumantes",
      title: "Espumantes",
      url: "../asset/espumantes.png",
    },
    {
      category: "aperitivos",
      title: "Aperitivos",
      url: "../asset/gancia.png",
    },
    {
      category: "comestible",
      title: "Otros",
      url: "https://buenavibra.es/wp-content/uploads/2016/12/chizitos-1_opt.jpg",
    },
  ];
  return (
    <>
      <div className="content">
        <h1 className="content__h1">Dejá que el escabio llegue a vos!</h1>
      </div>

      <aside className="aside">
        {sections.map((section, index) => (
          <Link
            className="aside__section"
            to={"/producto/" + section.category}
            key={index}
          >
            <img
              className="aside__section__img"
              src={section.url}
              alt="Bebidas"
            ></img>
            <div className="aside__section__container"></div>
            <h1 className="aside__section__title">{section.title}</h1>
          </Link>
        ))}
      </aside>
    </>
  );
};

export default Aside;
