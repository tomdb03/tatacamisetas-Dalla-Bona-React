import { useState } from 'react'

const ItemCount = ({ onAdd, initial = 1, stock = 0}) => {
    const [quantity, setQuantity] = useState(initial);

    const addProduct = (num) => {
            setQuantity(quantity + num)
    }

    return (
        <div className='counter'>
            <div className='contadorBotones'>
                <button className='contadorBoton' onClick={() => addProduct(-1)} disabled={quantity === initial}>-</button>
                <h1 className='counterValue'>{quantity}</h1>
                <button className='contadorBoton' onClick={() => addProduct(1)} disabled={quantity === stock || stock === 0}>+</button>
            </div>
            <button className='anadirBoton' onClick={() => { onAdd(quantity)}} disabled={stock === 0 ? true : null}>Añadir</button>
        </div>
    )
}

export default ItemCount