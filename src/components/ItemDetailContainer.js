import { useState, useEffect } from 'react'
// import { getProductById } from '../asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(db, 'productList', productId)).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [productId])

    return (
        <div>
            <h1 className='sectionTitle'>Detalle</h1>
            {loading ? <h1 className='cargando'>Cargando...</h1> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer