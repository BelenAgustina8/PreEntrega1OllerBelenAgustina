import { useState } from "react"
import './ItemCount.css'

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
      <div className='controlCard'>  
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDklEQVR4nO2ZzUsbURTFz8JNu3DpLuDGumkyBCdmUUtAiw3ortB/QMFVUPG/ciPRRVs10G5qSUqToEUw0Y12JUnMBIpC2ydXXv3Ih7b1PhPo+cHZTDJv5px77+ORAIQQQgghhBBCCCGEEEIIIaSVuXJ9KFUKMgvl4PvSQcPcV/P7DRMvVFU0mq8G8UJlxS8eD8OV+cX9INAw/lsze4FaAFdBVKr+diWkHkCqFGSaDWRqZ+bHL9MWub5ZO7s1gOROTT0Aq2X1ABbatP3pzw7uLfJ5J/Ovd+uuzIvq6gEstTGxeUcHbDR1gMy8tL3Dyl/KeQCzJf35va9in76Z6Lsd463m3AeQfIAq/o1GPpSNl85dymkAr3ZPeqvyW0c3zDsJYN7O72SPVV4UXf/qPoC4YxP+x0MTfbttvLXPLWb+ReoBjF6ctBzN7/uSiukrZQP1AOKFyoqryuuaz5nI6pe0egB+8XhYjpnq8yttr2k+na15b/KD6gEIcsaWY6actLQC0Jp5L51tSOWdmSeEEEIIIYQQQgghhFynD0A/gAEA8t/8EwBhADEAYwCeA0gAGAfwAsBLAEkA01ZJe23Cfidh7xmza4TtmiH7jH77zK7xGID8+OjbF57uksbtOwzad3oQIgCmumi6k6Zspzgn/L8H0Ksj8Ag9tgk+tRvYs6ZNUDa6P90E5V5ZQ9YacrEJngNw5FDYwH1vXAAAAABJRU5ErkJggg==" alt="Eliminar" className="boton" onClick={decrement} />
        <h2 className='number'>{quantity}</h2>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACxElEQVR4nO1ZTWsTURQ9Cze66NJdoJvajWkUp5mFlUKtGGjX/QNdBAqhkfwe/4Cbkij41RZXgqk0U1IQTOJCQYSSGTIBbbDNyI2v6RgTO+O8N5NO7oGzycfMnPPuu++deQCDwWAwGAwGg6EU2XprJlezd/J1+3vhU9sZRvpuo97a1Q6OZhE38Y8atj1KuJvrH20nXWmaWrWZQFyQq9k7ZwIff/vhfD4+dU66To/bVucPAzKHlqMbJvEJ4oK8KHsSP4jj025f/NqH1pl4YgtxQUEIpJF3gyrgldXplb1r5PtE3Aw46Z6Lf1D9W3DsDXDjIvFsgMEV4CCuPeBnd0KnwLbV6S17r63OZBpQcJENMLgCHJ4CxiXrAVkPkdYLNxveeoAfpiumrRvNLWVROusj0nqJvLINODdCUZTOuSJtUA4LPjKovf3i3H556Nx6tl+SbkA+YNmPiLzSeOdNzUkV936ztNeWbkAh4JwfFXlljXxfvGAoBix7iLRhkMo+EgP0MRBPTD19H74Bm40xMmBAfCgGrCtcyvxw/t3XaAzIqFzKXlSHlrUfKl0G18JYygKxbEs3YKPe2g17KftfzpX2i9IN0A6OZmmbqWou98pehvhi2Uo9r0xLN4BAe2w6saFDC9kGBJ3zqWK5TSOvTHwQeDIgjEYWFXQ2wOQK0HkKmNwDdG6CJq8COi+DJu8D9KgibVTQh0Veeo11wfYXcUG6d2jhN/IqiLRRQTeaW34jr5JIGxU0EaWHvb0NPdJGBa3aTNCJDR1aXMpIy2AwGP/AFQBTAK4DoLP5GwCSAOYBLAC4B2ARwBKAZQAPAWQArApmxGf3xW8WxX8WxDWS4poJcY8pcc/IcA0AdWpNPPBqRFwSzzAtnikUzAFYiVD0KK6ISlGO5KQbMK5T4CrGrAneFA3s7kATpEbntQnSf+kadK0ZFU3wF+zBGhlhMtajAAAAAElFTkSuQmCC" alt="Eliminar" className="boton" onClick={increment} />
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