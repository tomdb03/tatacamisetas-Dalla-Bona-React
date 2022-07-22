import Button from './Button'
import CartWidget from './CartWidget'

const Navbar = () => {

    const text = 'hice click'

    const handleClick = () => {
        console.log(text)
    }
    return (
        <nav className="Navbar">
            <div>
                <h1>Tata Camisetas</h1>
            </div>
            <div>
                <Button handleClick={handleClick} color='red'>Camisetas</Button>
                <Button color='blue'>Shorts</Button>
                <Button color='green'>Buzos</Button>
                <Button color='purple'>Joggins</Button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar