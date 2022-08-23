import { useContext } from 'react'
import CartContext from '../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div key={id} className="prodIndividual">
                <div className='prodName'>{name}</div>
                <div className='noName'>{quantity} {quantity > 1 ? 'unidades' : 'unidad'}</div>
                <div className='noName'>${price}</div>
                <div className='noName'>${price * quantity}</div>
                <div className='noName'><button className='remover' onClick={() => handleRemove(id)}>X</button></div>
            </div>
    )
}

export default CartItem