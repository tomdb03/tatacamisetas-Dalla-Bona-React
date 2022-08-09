import { useState, useEffect} from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId])

    return (
        <div>
            <h1 className='cargando'>Detalle</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer