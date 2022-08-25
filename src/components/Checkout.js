import { useState, useContext } from "react"
import CartContext from "../context/CartContext"
import { db } from "../services/firebase"
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, totalCash, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const prodInCart = getQuantity()
    const compraTotal = totalCash()

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: 'Tomás',
                    lastName: 'Dalla Bona',
                    phone: '123456789',
                    address: 'direccion 123'
                },
                items: cart,
                prodInCart,
                compraTotal,
                date: new Date()
            }

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'productList')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            } else {
                console.log('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return <h1>Se esta generando tu orden...</h1>
    }

    if (orderCreated) {
        return <h1>La orden fue creada correctamente, sera redirigido al listado de productos en 2 segundos</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button className="Option" onClick={createOrder}>Generar Orden</button>
        </>
    )
}

export default Checkout