import { useState, useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { db } from "../../service/firebase/firebaseConfig"
import { Timestamp, collection, writeBatch, getDocs, query, where, addDoc } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";




const Checkout = () => {
    const [loading, setLoading] = useState (false)
    const [orderId, setOrderId] = useState ('')

    const { cart, total, clearCart } = useContext(CartContext)
    
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
    
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
    
            const batch = writeBatch(db)
    
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where('id', 'in', ids)));

            
    
            const { docs } = productsAddedFromFirestore
    
        
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const idDb = dataDoc.id 
                const productAddedToCart = cart.find(prod => prod.id === idDb) 
                const prodQuantity = productAddedToCart?.quantity 
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
                console.log(stockDb)
            })
            
    
            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos fuera de stock')
            }
    
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    


    if(loading){
        return <h1> Se esta generando su orden </h1>
    }

    if(orderId){
        return <h1> El id de su orden es: {orderId} </h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )

}

export default Checkout