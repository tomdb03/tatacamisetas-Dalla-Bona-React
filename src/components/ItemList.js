import { useState, useEffect, memo } from "react"
import { useParams } from 'react-router-dom'
import Item from "./Item"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const collectionRef = !categoryId
      ? collection(db, 'productList')
      : query(collection(db, 'productList'), where('category', '==', categoryId))

    getDocs(collectionRef).then(response => {
      const productsAdapted = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data }
      })
      setProducts(productsAdapted)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
    
  }, [categoryId])

  if (loading) {
    return <h1 className="cargando">Cargando productos...</h1>
  }

  return (
    <ul className='itemList'>
      {
        <>
          {products.map((product) => {
            return (
              <Item key={product.id} product={product} />
            );
          })}
        </>
      }
    </ul>
  )
}

export default memo(ItemList)