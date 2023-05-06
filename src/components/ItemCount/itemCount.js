import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd })=> {
    const [quantity, setQuantity] = useState(initial)
  
    const increment = () => {
      if (quantity < stock) {
        setQuantity(quantity + 1)
      }
    }
  
    const decrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }
    }
  
    return (
      
    <div className='contenedor'>
        {/* COUNTER CONTROLS ( + , - ) IN CARD */}
      <div className='controlesCard'>  
        <button className='btn-minus' onClick={decrement}>-</button>
        <h2 className='number'>{quantity}</h2>
        <button className='btn-plus' onClick={increment}>+</button>
      </div>
      {/* ADDTOCART BUTON */}
      <div className='contenedor'>
        <button className='btn-addToCart' onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
        
      </div>
      
    );
  }
  
  export default ItemCount;