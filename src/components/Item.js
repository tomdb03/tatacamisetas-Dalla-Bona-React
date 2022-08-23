import { Link } from 'react-router-dom'

const Item = ({id, name, img, price}) => {

    return (
        <div className='card'>
            <div className="imgBox">
                <img className='productImage' src={img} alt={name} />
            </div>
            <div className="contentBox">
                <h3 className='productTitle'>{name}</h3>
                <span className="price">${price}</span>
                <Link to={`/detail/${id}`} className='detailBoton'>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item