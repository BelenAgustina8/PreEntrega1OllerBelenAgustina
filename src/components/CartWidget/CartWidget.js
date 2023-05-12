import './CartWidget.css'
import cart from './assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => { 
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartW' >
            <img className='CartImg' src={cart} height="50" width="50" alt="cart-widget" />
            { totalQuantity}
        </Link>
            
    )
}

export default CartWidget