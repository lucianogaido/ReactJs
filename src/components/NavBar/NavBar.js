import './NavBar.css';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, NavDropdown, Nav, Form, FormControl, Button } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <>
        <Navbar expand="lg">
    <Container fluid>
        <Navbar.Brand as={Link} to='/'><img src="../Nuna.png" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to='/category/mermeladas'>Mermeladas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/category/conservas'>Conservas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/category/blends'>Blends de Té</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/'>Galería</Nav.Link>
            <Nav.Link as={Link} to='/'>Contacto</Nav.Link>
        </Nav>
        <Form className="d-flex">
            <FormControl type="search" placeholder="Buscar" className="me-2" aria-label="Search"/>
            <Button variant="btn btn-outline-dark my-2 my-sm-0 bg-warning" type="submit">Buscar</Button>
            <CartWidget/>
        </Form>
        </Navbar.Collapse>
    </Container>
</Navbar>
        </>
    )
}

export default NavBar