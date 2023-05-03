import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <>
      <Link to="/Cart" style={{ textDecoration: "none" }}>
        <button>Ver carrito</button>
      </Link>
    </>
  );
};

export default CheckOut;
