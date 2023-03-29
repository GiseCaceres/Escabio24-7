import { Link } from "react-router-dom";

const CheckOut = ({ onAddCart }) => {
  return (
    <>
      <Link to="/Cart" style={{ textDecoration: "none" }}>
        <button onClick={onAddCart}>Ver carrito</button>
      </Link>
    </>
  );
};

export default CheckOut;
