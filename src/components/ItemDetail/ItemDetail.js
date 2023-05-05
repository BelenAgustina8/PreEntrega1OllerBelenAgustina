import { useContext, useState } from "react";
import ItemCount from "../ItemCount/itemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      stock: product.stock,
    };
    addItem(item, quantity);
  };

  if (!product) {
    return <p>Loading...</p>;
    
  }

  const { id, name, img, category, description, price, stock } = product;

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
        <h1>Id: {id}</h1>
        <h1>Tests: {product.name}</h1>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Descripcion: {description}</p>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock: {stock}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Terminar Compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;