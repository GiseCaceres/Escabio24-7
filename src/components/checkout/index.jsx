import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <>
      <Link
        to="/Cart"
        style={{ textDecoration: "none" }}
        className="count__agregar"
      >
        <button className="count__agregar__buttonA">Ver carrito</button>
      </Link>
    </>
  );
};

export default CheckOut;
