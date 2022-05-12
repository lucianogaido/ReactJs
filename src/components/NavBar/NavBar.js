import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, NavDropdown, Nav, Form, FormControl, Button } from "react-bootstrap"
const NavBar = () => {
    return (
        <>
        <Navbar expand="lg">
    <Container fluid>
        <Navbar.Brand href="#"><img src="../Nuna.png" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Mermeladas</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Conservas</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Blends de Té</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Galería</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="btn btn-outline-dark my-2 my-sm-0 bg-warning"
            type="submit">Buscar</Button>
        </Form>
        </Navbar.Collapse>
    </Container>
</Navbar>
        </>
    )
}

export default NavBar