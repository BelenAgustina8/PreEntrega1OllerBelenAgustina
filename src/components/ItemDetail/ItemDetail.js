import { useContext, useState } from "react"
import ItemCount from "../ItemCount/itemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"
import './ItemDetail.css'

const ItemDetail = ({ id, docId, name, img, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  console.log('Stock :', stock)
  console.log('id:', id)    
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id, name, price, img
    };

    addItem(item, quantity);
  };

  return (
    <article className="CardItemDetail ">
      <header className="CardItemDetail">
        <h2 className="CardItemDetail">
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="CardItemDetailImg" />
      </picture>
      <section className="description">
        <p className="InfoDescriptionDetail">
          <b>Descripción:</b> {description}
        </p>
        <p className="InfoPriceDetail">
          <b>Precio: </b>${price}
        </p>
        <p className="InfoPriceDetail">
          <b>Stock: </b>{stock}
        </p>
      </section>
      <footer className="CardItemFooter">
        {
          quantityAdded > 0 ? (
            <Link to='/cart' className='Option'>Terminar compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }
      </footer>
    </article>

  );

};

export default ItemDetail;
