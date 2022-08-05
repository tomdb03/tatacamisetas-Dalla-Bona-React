import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <h1 className='sectionTitle'>{greeting}</h1>
            <ItemList/>
        </>
    )
}

export default ItemListContainer