import CartContext from "../context/CartContext"
import { useContext } from "react"
import { Link } from 'react-router-dom'

const CartDiv = () => {

    const { cart, removeItem, clearCart, getQuantity, totalCash } = useContext(CartContext)

    let prodInCart = getQuantity()
    let compraTotal = totalCash()

    return (
        <div className='carrito'>
            <h1 className='sectionTitle'>Detalle</h1>
            <div className='prodIndividual'>
                <div className='divDescripcion'>Producto</div>
                <div>Cantidad</div>
                <div className='divCash'>Precio</div>
                <div className='divCash'>Subtotal</div>
                <div></div>
            </div>
            {prodInCart === 0 && <div className='carroVacio'>No hay nada en el carrito</div>}
            {cart.map(prod => <div key={prod.id} className="prodIndividual">
                <div className='divDescripcion'>{prod.name}</div>
                <div>{prod.quantity} {prod.quantity > 1 ? 'unidades' : 'unidad'}</div>
                <div className='divCash'>${prod.price}</div>
                <div className='divCash'>${prod.price * prod.quantity}</div>
                <button onClick={() => removeItem(prod.id)}>remover</button>
            </div>)}
            <div className='pieCarrito'>
                {prodInCart > 0 ? <button onClick={() => clearCart()}>Vaciar carrito</button> : <Link to="/">Volver al catálogo</Link>}
                {prodInCart > 0 ? <div> Cantidad total de productos: {prodInCart}</div> : null}
                {prodInCart > 0 ? <div> Total de compra: ${compraTotal}</div> : null}
                {prodInCart > 0 ? <button>Terminar compra</button> : null}
            </div>
        </div>
    )
}

export default CartDiv