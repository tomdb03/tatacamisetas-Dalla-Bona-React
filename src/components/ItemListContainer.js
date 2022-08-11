import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

    const { categoryId } = useParams()

    return (
        <>
            <h1 className='sectionTitle'>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList />
        </>
    )
}

export default ItemListContainer