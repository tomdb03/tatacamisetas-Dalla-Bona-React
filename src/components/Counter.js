import { useState } from 'react'

const Counter = ({ onAdd, initial, stock }) => {
    const [count, setCount] = useState(initial);

    const addProduct = (num) => {
            setCount(count + num)
    }

    return (
        <div className='counter'>
            <div className='contadorBotones'>
                <button className='contadorBoton' onClick={() => addProduct(-1)} disabled={count === initial}>-</button>
                <h1 className='counterValue'>{count}</h1>
                <button className='contadorBoton' onClick={() => addProduct(1)} disabled={count === stock || stock === 0}>+</button>
            </div>
            <button className='contadorBoton' onClick={() => { onAdd(count)}} disabled={stock === 0 ? true : null}>Añadir</button>
        </div>
    )
}

export default Counter