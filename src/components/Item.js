import Counter from "./Counter";

const Item = ({product}) => {
    const onAdd = (qty) => {
        product.stock>0 ? alert(`Has agregado ${qty} unidades de ${product.name}`) : alert(`Lo sentimos, no tenemos stock de ${product.name}`);
      };
    return (
        <li>
            <h3 className='productTitle'>{product.name}</h3>
            <img className='productImage' src={product.img} alt={product.name}/>
            <span className="productTitle productPrice">${product.price}</span>
            <Counter stock={product.stock} onAdd={onAdd} initial={1} />
        </li>
    )
}

export default Item