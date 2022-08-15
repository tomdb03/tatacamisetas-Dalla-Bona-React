// desabilitar cuando hay 0 productos o desmontarlo directamente
// vista de lo que hay en el carrito
// botones remove, clear y create order
// mostrar suma total y que el carrito está vacío
// VER CONSIGNA


import { useState, useEffect } from 'react'

const ItemCount = ({ onAdd, initial = 1, stock = 0}) => {
    const [quantity, setQuantity] = useState(initial);

    useEffect(() => {
        setQuantity(initial)
   }, [initial])

    const addProduct = (num) => {
            setQuantity(quantity + num)
    }

    return (
        <div className='counter'>
            <div className='contadorBotones'>
                <button className='contadorBoton' onClick={() => addProduct(-1)} disabled={quantity === initial}>-</button>
                <h3 className='counterValue'>{quantity}</h3>
                <button className='contadorBoton' onClick={() => addProduct(1)} disabled={quantity === stock || stock === 0}>+</button>
            </div>
            <button className='anadirBoton' onClick={() => { onAdd(quantity)}} disabled={stock === 0 ? true : null}>Añadir</button>
        </div>
    )
}

export default ItemCount