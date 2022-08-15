import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import CartContext from '../context/CartContext'
import NotificationContext from '../notification/Notification'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
        setNotification('success', `Se agregaron ${quantity} ${name}`)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <div className='card detailCard'>
            <div className="imgBox">
                <img className='productImage' src={img} alt={name} />
            </div>
            <div className="contentBox">
                <h3 className='productTitle'>{name}</h3>
                <section>
                    <span className="info">Categoría: {category}</span>
                    <span className="info">Descripción: {description}</span>
                    <span className="info">Precio: ${price}</span>
                </section>
                <footer className='ItemFooter'>
                    {
                        quantityToAdd === 0 ? (
                            <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity} />
                        ) : (
                            <Link to='/cart' className='cta'><span class="hover-underline-animation">Ir al carrito</span>
                                <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                                </svg>
                            </Link>
                        )
                    }
                </footer>
            </div>
        </div>
    )
}

export default ItemDetail