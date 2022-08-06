import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from '../asyncMock'
import { useParams } from 'react-router-dom'
import Item from "./Item"


const ItemList = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then(productList => {
      setProducts(productList)
    }).catch(error => {
      console.log(error)
    })
  }, [categoryId])



  return (
    <ul className='itemList'>
      {
        products.length ? (
          <>
            {products.map((product) => {
              return (
                <Item key={product.id} product={product} />
              );
            })}
          </>
        ) : (<p className="cargando">Cargando productos...</p>)
      }
    </ul>
  )
}

export default ItemList