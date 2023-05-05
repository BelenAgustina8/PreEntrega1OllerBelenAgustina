import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartItem = ({ id, title, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="CartItem">
      <div className="CartItem__details">
        <h3>{title}</h3>
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${price}</p>
      </div>
      <button className="Button" onClick={() => removeItem(id)}>
        Eliminar
      </button>
    </div>
  );
};


 
export default CartItem;