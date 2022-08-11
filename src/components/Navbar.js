import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'


function CollapsibleExample() {

    return (
        <Navbar collapseOnSelect expand="lg" className='nb'>
            <Container>
                <Navbar.Brand>
                    <Link to='/'><img className='logo' src='/images/logotatacamisetas.png' alt="logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto links">
                        <NavLink to='/category/camisetas' className={({isActive}) => isActive ? 'Activenblink' : 'nblink'}>Camisetas</NavLink>
                        <NavLink to='/category/shorts' className={({isActive}) => isActive ? 'Activenblink' : 'nblink'}>Shorts</NavLink>
                        <NavLink to='/category/buzos' className={({isActive}) => isActive ? 'Activenblink' : 'nblink'}>Buzos</NavLink>
                        <NavLink to='/category/joggins' className={({isActive}) => isActive ? 'Activenblink' : 'nblink'}>Joggins</NavLink>
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