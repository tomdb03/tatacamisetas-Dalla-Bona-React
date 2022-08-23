import { memo } from 'react'
import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <ul className='itemList'>
      {products?.map(prod => <Item key={prod.id} {...prod} />)}
    </ul>
  )
}

export default memo(ItemList)