import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    return (
        <>
            <h1 className='sectionTitle'>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList />
            <div className="txtFooter">
                <p>Creado por <span className="negrita">Tom&aacute;s Dalla Bona</span>. Estudiante de <a className="linkCoder"
                    href="https://www.coderhouse.com/">Coderhouse</a>.</p>
            </div>
        </>
    )
}

export default ItemListContainer