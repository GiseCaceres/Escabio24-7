import { CardContext } from "../Context";
import { useContext, useState } from "react";
const FormularioCompra = ({
  mostrarFormulario,
  handleCloseFormulario,
  productosSeleccionados: productosSeleccionadosProp,
}) => {
  const [name, setName] = useState("");
  const [direction, setDirection] = useState("");
  const [phone, setPhone] = useState("");

  const { globalTotal, clearCart } = useContext(CardContext);

  if (!mostrarFormulario) {
    return null;
  }

  const handleSend = () => {
    const nombre = name;
    const calle = direction;
    const celular = phone;

    if (name === "" || direction === "" || phone.length < 9) {
      alert("Completar los campos");
      return;
    }
    // Obtener la lista de productos seleccionados del carrito
    const productosSeleccionadosFiltrados = productosSeleccionadosProp.filter(
      (producto) => producto.quantity > 0
    );

    // Validar que haya productos seleccionados
    if (productosSeleccionadosFiltrados.length === 0) {
      alert("Debe seleccionar al menos un producto.");
      return;
    }

    const productos = productosSeleccionadosFiltrados
      .map(
        (producto) =>
          `${producto.title} x ${producto.quantity}c/u = $${
            producto.price * producto.quantity
          }`
      )
      .join(", ");

    const mensaje = `Hola, mi nombre es ${nombre} y quiero hacer un pedido a mi dirección ${calle}. Mi número de celular es ${celular}. Los productos que quiero son: ${productos}. Total=$${globalTotal()}`;

    const enlace = `https://wa.me/+542235708665?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(enlace, "_blank");
    handleCloseFormulario();
    clearCart();
    alert("Pedido enviado");
  };

  return (
    <div className="overlay">
      <div className="formularioCompra">
        <h2>Complete el formulario</h2>
        <div>
          <div className="inputGroup">
            <label htmlFor="nombre">Nombre:</label>
            <input
              onChange={(event) => {
                setName(event.target.value);
                console.log(event.target.value);
              }}
              value={name}
              maxLength={15}
              type="text"
              id="nombre"
              name="nombre"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="calle">Calle:</label>
            <input
              onChange={(event) => {
                setDirection(event.target.value);
              }}
              value={direction}
              type="text"
              id="calle"
              name="calle"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="celular">Número de celular:</label>
            <input
              onChange={(event) => {
                setPhone(event.target.value);
                console.log(event.target.value);
                console.log(phone.length < 9);
              }}
              value={phone}
              maxLength={10}
              type="tel"
              id="celular"
              name="celular"
            />
          </div>
          <button type="button" onClick={handleSend}>
            Enviar por WhatsApp
          </button>
          <button onClick={handleCloseFormulario}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default FormularioCompra;
