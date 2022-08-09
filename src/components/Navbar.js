import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


function CollapsibleExample() {

    return (
        <Navbar collapseOnSelect expand="lg" className='nb'>
            <Container className='nbcontainer'>
                <Navbar.Brand>
                    <Link to='/'><img className='logo' src='/images/logotatacamisetas.png' alt="logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto links">
                        <Link to='/category/camisetas' className="nblink">Camisetas</Link>
                        <Link to='/category/shorts' className="nblink">Shorts</Link>
                        <Link to='/category/buzos' className="nblink">Buzos</Link>
                        <Link to='/category/joggins' className="nblink">Joggins</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="mx-auto"><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample