import { Link } from 'react-router-dom'

const Item = ({ product }) => {

    return (
        <div className='card'>
            <div className="imgBox">
                <img className='productImage' src={product.img} alt={product.name} />
            </div>
            <div className="contentBox">
                <h3 className='productTitle'>{product.name}</h3>
                <span className="price">${product.price}</span>
                <Link to={`/detail/${product.id}`} className='detailBoton'>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item