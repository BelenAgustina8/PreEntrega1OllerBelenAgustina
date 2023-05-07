import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import './CartItem.css'


const CartItem = ({ id, img, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);
  
    const handleRemove = () => {
      removeItem(id);
    };
    


    return (
        
        <main>    
        <div className="container">
          <div className="row mt-3">
            <div className="col">
              <form id="procesar-pago" method="POST">
  
                <div id="carrito" className="carrito">
                  <table className="table" id="lista-compra">
                    <thead>
                      <tr>
                        <th  className="cate">Imagen</th>
                        <th  className="cate">Nombre</th>
                        <th  className="cate">Precio</th>
                        <th  className="cate">Cantidad</th>
                        <th  className="cate">Sub Total</th>
                      </tr>
                    </thead>
  
                    <tbody>
                      <tr>
                        <td className="cat"><img src={img} alt="" /></td>
                        <td className="cat">{name}</td>
                        <td className="cat">$ {price}</td>
                        <td className="cat">{quantity}</td>
                        <td className="cat">$ {price * quantity}</td>
                        <td>
                            <img src="https://i.ibb.co/xq48bW0/icons8-multiplicar-64.png" alt="Eliminar" className="botonEliminar" onClick={handleRemove} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
  
                <div className="row" id="spinner">
                  <div className="spinner">
                  </div>
                </div>
  
                
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default CartItem;