import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

    const [title, setTitle] = useState('primer titulo')

    useEffect(() => {
        setTimeout(() => {
            setTitle('segundo titulo')
        }, 3000)
    })

    const { categoryId } = useParams()

    return (
        <>
            <h1 className='sectionTitle'>{`${greeting} ${categoryId || ''}`}</h1>
            <h2>{title}</h2>
            <ItemList />
        </>
    )
}

export default ItemListContainer