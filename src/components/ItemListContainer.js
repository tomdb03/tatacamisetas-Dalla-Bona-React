import { useState, useEffect } from 'react'
import { getProducts } from '../asyncMock'

import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])

    // const productsComp = products.map(prod => <li key={prod.id}>{prod.name}</li>)
    return (
        <>
            <h1 className='sectionTitle'>{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer