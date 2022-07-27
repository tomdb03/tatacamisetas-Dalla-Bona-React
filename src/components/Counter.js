import { useState } from 'react'

const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div className='counter'>
            <div className='contadorBotones'>
                <button className='contadorBoton' onClick={decrement}>-</button>
                <h1 className='counterValue'>{count}</h1>
                <button className='contadorBoton' onClick={increment}>+</button>
            </div>
            <button className='contadorBoton' onClick={() => onAdd(count)}>Añadir</button>
        </div>
    )
}

export default Counter