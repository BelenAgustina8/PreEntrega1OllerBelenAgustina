import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext);
    const total = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
    console.log(total)

    if (totalQuantity === 0) {
      return (
        <div className="EmptyCartSms">
          <h1>No hay productos en tu carrito...!</h1>
          <Link to="/" className="Button">Ir a comprar</Link>
        </div>
      );
    }
    return (
      <div className="CartItemFooter">
        <h1>Listado de productos:</h1>
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
        <h3>Total: ${total}</h3>
        {cart.length > 0 && (
          <div className="CartTotal">
            <button onClick={() => clearCart()} className="Button">
              Limpiar el carrito
            </button>
          </div>
        )}
        <div className="checkout">
          <Link to="/checkout" className="CheckoutLink">
            Checkout
          </Link>
        </div>
      </div>
    );
  };
  export default Cart;