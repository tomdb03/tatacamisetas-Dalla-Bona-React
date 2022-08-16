import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

const CartWidget = () => {
    const { getQuantity, totalCash } = useContext(CartContext)
    const quantity = getQuantity()
    const total = totalCash()

    return (
        quantity > 0 && (
            <Link to='/cart' className="CartWidget">
                <img src='/images/cart.svg' alt='cart-widget' className='CartImg' />
                <div className='CartNumbers'>
                    <p>{quantity}</p>
                    <p>{`$${total}`}</p>
                </div>

            </Link>
        )
    );
}

export default CartWidget