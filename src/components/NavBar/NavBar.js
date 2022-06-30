import './NavBar.css';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} to='/'><img src="../Nuna.png" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                            <Nav.Link as={Link} to='/category/mermeladas'>Mermeladas</Nav.Link>
                            <Nav.Link as={Link} to='/category/conservas'>Conservas</Nav.Link>
                            <Nav.Link as={Link} to='/category/blends'>Blends de Té</Nav.Link>
                        </Nav>
                        <CartWidget id="cart-icon" />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
