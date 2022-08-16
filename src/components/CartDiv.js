import CartContext from "../context/CartContext"
import { useContext } from "react"
import { Link } from 'react-router-dom'

const CartDiv = () => {

    const { cart, removeItem, clearCart, getQuantity, totalCash } = useContext(CartContext)

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
            {prodInCart === 0 && <div className='carroVacio'>No hay nada en el carrito</div>}
            {cart.map(prod => <div key={prod.id} className="prodIndividual">
                <div className='prodName'>{prod.name}</div>
                <div className='noName'>{prod.quantity} {prod.quantity > 1 ? 'unidades' : 'unidad'}</div>
                <div className='noName'>${prod.price}</div>
                <div className='noName'>${prod.price * prod.quantity}</div>
                <div className='noName'><button className='remover' onClick={() => removeItem(prod.id)}>remover</button></div>
            </div>)}
            <div className='pieCarrito'>
                {prodInCart > 0 ? <button className="btncart vaciar" onClick={() => clearCart()}>Vaciar carrito</button> : <Link className="btncart volver" to="/">Volver al catálogo</Link>}
                {prodInCart > 0 ? <div> Cantidad total de productos: {prodInCart}</div> : null}
                {prodInCart > 0 ? <div> Total de compra: ${compraTotal}</div> : null}
                {prodInCart > 0 ? <button className="btncart terminar">Terminar compra</button> : null}
            </div>
        </div>
    )
}

export default CartDiv