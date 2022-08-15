import { useState, useEffect } from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    return (
        <div>
            <h1 className='sectionTitle'>Detalle</h1>
            {loading ? <h1>Cargando...</h1> : <ItemDetail {...product} />}        </div>
    )
}

export default ItemDetailContainer