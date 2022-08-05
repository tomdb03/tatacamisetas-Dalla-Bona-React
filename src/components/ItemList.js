import { useState, useEffect } from "react"
import Item from "./Item"
import { productList } from "../asyncMock"

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(productList);
      } else {
        // eslint-disable-next-line no-undef
        reject(error);
      }
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.error(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getProductsFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



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