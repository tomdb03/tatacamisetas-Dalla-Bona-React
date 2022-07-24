import { Container, Nav, Navbar } from 'react-bootstrap';

// import Button from './Button'
import CartWidget from './CartWidget'


function CollapsibleExample() {
    
    return (
        <Navbar collapseOnSelect expand="lg" className='nb'>
            <Container>
                <Navbar.Brand href="#camisetas"><img className='logo' src='images/logotatacamisetas.png' alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#camisetas">Camisetas</Nav.Link>
                        <Nav.Link href="#shorts">Shorts</Nav.Link>
                        <Nav.Link href="#buzos">Buzos</Nav.Link>
                        <Nav.Link href="#joggins">Joggins</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#cart" className="mx-auto"><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;


// const Navbar = () => {

//     const text = 'hice click'

//     const handleClick = () => {
//         console.log(text)
//     }
//     return (
//         <nav className="Navbar">
//             <div>
//                 <h1>Tata Camisetas</h1>
//             </div>
//             <div>
//                 <Button handleClick={handleClick} color='red'>Camisetas</Button>
//                 <Button color='blue'>Shorts</Button>
//                 <Button color='green'>Buzos</Button>
//                 <Button color='purple'>Joggins</Button>
//             </div>
//             <CartWidget />
//         </nav>
//     )
// }

// export default Navbar