import Item from "./Item"

const ItemList = ({products}) => {
    return(
        <ul className='itemList'>
            {products.map(prod => <Item key={prod.id} product={prod}/>)}
        </ul>      
    )
}

export default ItemList