import CartContext from "../context/CartContext"
import CartItem from './CartItem'
import { useContext } from "react"
import { Link } from 'react-router-dom'

const CartDiv = () => {

    const { cart, clearCart, getQuantity, totalCash } = useContext(CartContext)

    let prodInCart = getQuantity()
    let compraTotal = totalCash()

    return (
        <div className='carrito'>
            <h1 className='sectionTitle'>Carrito</h1>
            <div className='prodIndividual titulos'>
                <div className='prodName'>Producto</div>
                <div className='noName'>Cantidad</div>
                <div className='noName'>Precio</div>
                <div className='noName'>Subtotal</div>
                <div className='noName'></div>
            </div>
            {prodInCart === 0 && <div className='aviso'>No hay nada en el carrito</div>}
            {cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
            <div className='pieCarrito'>
                {prodInCart > 0 ? <button className="btncart vaciar" onClick={() => clearCart()}>Vaciar carrito</button> : <Link className="btncart volver" to="/">Volver al catálogo</Link>}
                {prodInCart > 0 ? <div><p> Total de productos: </p><p>{prodInCart}</p></div> : null}
                {prodInCart > 0 ? <div><p> Total de compra: </p><p>${compraTotal}</p></div> : null}
                {prodInCart > 0 ? <Link to='/checkout' className="btncart terminar">Terminar compra</Link> : null}
            </div>
        </div>
    )
}

export default CartDiv