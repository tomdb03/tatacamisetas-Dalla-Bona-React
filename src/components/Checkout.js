import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import CartContext from "../context/CartContext"
import { db } from "../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import useForm from '../hooks/useForm';

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, totalCash, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const prodInCart = getQuantity()
    const compraTotal = totalCash()

    const [ formValues, handleInputChange ] = useForm({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: ''
        });
        const { firstName, lastName, phone, email, address} = formValues;

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: formValues,
                items: cart,
                prodInCart,
                compraTotal,
                date: new Date().toISOString()
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
                }, 3000)
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
        return <h1 className='aviso'>Se esta generando tu orden...</h1>
    }

    if (orderCreated) {
        return <h1 className='aviso'>¡La orden fue creada correctamente! Será redirigido al listado de productos en 3 segundos.</h1>
    }

    return (
        <>
            <h1 className="sectionTitle">Checkout</h1>
            <form className="formContainer">
                <div className="campos">
                    <label>Nombre
                        <span className="obligatorio">  *</span>
                    </label>
                    <input className="inputContacto" type="text" name="firstName" value={firstName} onChange={handleInputChange} placeholder="Nombre" required />
                </div>
                <div className="campos">
                    <label>Apellido
                        <span className="obligatorio">  *</span>
                    </label>
                    <input className="inputContacto" type="text" name="lastName" value={lastName} onChange={handleInputChange} placeholder="Apellido" required />
                </div>
                <div className="campos">
                    <label>Celular
                    <span className="obligatorio">  *</span>
                    </label>
                    <input className="inputContacto" type="number" name="phone" value={phone} onChange={handleInputChange} placeholder="Celular" required />
                </div>
                <div className="campos">
                    <label>Email
                        {/* <span className="obligatorio">  *</span> */}
                    </label>
                    <input className="inputContacto" type="email" name="email" value={email} onChange={handleInputChange} placeholder="email@correo.com" />
                </div>
                <div className="campos">
                    <label>Dirección
                        <span className="obligatorio">  *</span>
                    </label>
                    <input className="inputContacto" type="text" name="address" value={address} onChange={handleInputChange} placeholder="Dirección" required />
                </div>
                <div className="terminos">
                    <input type="checkbox" name="acepta" value="1" required />
                    <p>Aceptar los <a href="*">Términos y Condiciones</a><span className="obligatorio"> *</span></p>
                </div>
                <div className="containerBotones">
                    <input className="botones" type="reset" value="Limpiar" />
                    <input className="botones terminar" type="submit" value="Generar orden" onClick={createOrder} />
                </div>
                <div className="obl">
                    <span className="obligatorio"> *</span>Estos campos son obligatorios.
                </div>
            </form>
        </>
    )
}

export default Checkout