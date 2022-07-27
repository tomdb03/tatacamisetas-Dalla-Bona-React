const Item = ({product}) => {
    return (
        <li>
            <h3 className='productTitle'>{product.name}</h3>
            <img className='productImage' src={product.img} alt={product.name}/>
        </li>
    )
}

export default Item