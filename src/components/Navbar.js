import { Container, Nav, Navbar } from 'react-bootstrap';

// import Button from './Button'
import CartWidget from './CartWidget'


function CollapsibleExample() {
    
    return (
        <Navbar collapseOnSelect expand="lg" className='nb'>
            <Container>
                <Navbar.Brand href="#"><img className='logo' src='images/logotatacamisetas.png' alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='nblink' href="#camisetas">Camisetas</Nav.Link>
                        <Nav.Link className='nblink' href="#shorts">Shorts</Nav.Link>
                        <Nav.Link className='nblink' href="#buzos">Buzos</Nav.Link>
                        <Nav.Link className='nblink' href="#joggins">Joggins</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#cart" className="mx-auto"><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample