import Counter from "./Counter";
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    const onAdd = (qty) => {
        product.stock > 0 ? alert(`Has agregado ${qty} unidades de ${product.name}`) : alert(`Lo sentimos, no tenemos stock de ${product.name}`);
    };
    return (
        <div className='card'>
            <div className="imgBox">
                <img className='productImage' src={product.img} alt={product.name} />
            </div>
            <div className="contentBox">
                <h3 className='productTitle'>{product.name}</h3>
                <span className="price">${product.price}</span>
                <Link to={`/detail/${product.id}`} className='detailBoton'>Ver detalle</Link>
                <Counter stock={product.stock} onAdd={onAdd} initial={product.stock === 0 ? 0 : 1} />
            </div>
        </div>
    )
}

export default Item