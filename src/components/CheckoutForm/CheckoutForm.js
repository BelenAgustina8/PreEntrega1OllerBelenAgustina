import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const useData = {
            name, phone, email
        }

        onConfirm(useData)
    }

    return (
        <div className='Container'>
        <form onsubmit={handleConfirm} className='Form'>
        <label className='Label'>
            Nombre
        <input className='Input' type='text' value={name} onChante={({ target }) => setName(target.value)} />
        </label>
        <label className='Label'>
            Telefono
        <input className='Input' type='text' value={phone} onChante={({ target }) => setPhone(target.value)} />
        </label>
        <label className='Label'>
            Email
        <input className='Input' type='text' value={email} onChante={({ target }) => setEmail(target.value)} />
        </label>
        <div className='Lavel'>
            <button type='submit' className='Button'>Crear Orden </button>
        </div>
        </form>
        </div>
    )
}

export default CheckoutForm