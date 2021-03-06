import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import './CartWidget.css';
import { Button, Container, Row, Col, Offcanvas } from "react-bootstrap"
import { useState, useContext } from "react"
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom'


function OffCanvasCart({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { cartListItems, totalPrice, removeProduct, clearCart, cartAmount } = useContext(CartContext)

    return (
        <>
            <Button onClick={handleShow} className="me-2 btn btn-outline-dark my-2 my-sm-0 bg-warning">
                <FaShoppingCart id='cart-icon' />
                {(cartAmount !== 0) &&
                    <span className="badge bg-dark text-white ms-1 rounded-pill">{cartAmount}</span>
                }
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container>
                        {cartListItems.length === 0 ? (
                            <>
                                <strong className='p'>No hay productos en el Carrito</strong>
                            </>
                        )
                            :
                            <Row className="cart-menu-container">
                                <Col className="cart-menu" xs={2} md={2}>Producto</Col>
                                <Col className="cart-menu" xs={4} md={4}>Detalle</Col>
                                <Col className="cart-menu" xs={2} md={2}>Precio</Col>
                                <Col className="cart-menu" xs={1} md={1}>Cant</Col>
                                <Col className="cart-menu" xs={2} md={2}>Total </Col>
                            </Row>
                        }

                        {cartListItems.map(({ data }) => {
                            const { id, image, title, price, quantity } = data
                            return (
                                <div key={id}>

                                    <Row >
                                        <Col className="cart-item" xs={3} md={3}>
                                            <img src={`../${image}`} alt={title} />
                                        </Col>
                                        <Col className="cart-title" xs={3} md={3}>
                                            <strong>{title}</strong>
                                        </Col>
                                        <Col className="cart-item" xs={2} md={2}>
                                            <p><strong>${price}</strong></p>
                                        </Col>
                                        <Col className="cart-item" xs={1} md={1}>
                                            <p><strong>{quantity}</strong></p>
                                        </Col>
                                        <Col className="cart-item" xs={2} md={2}>
                                            <p><strong>${quantity * price}</strong></p>
                                        </Col>

                                        <Col className="cart-item" xs={1} md={1}><FaTrashAlt className='trash-icon' onClick={() => removeProduct({ data })} /></Col>

                                    </Row>
                                </div>
                            )
                        })}
                        {cartListItems.length > 0 &&
                            <>
                                <p className="cart-total"><strong>Total: ${totalPrice}</strong></p>
                                <Row className='buttons-cart'>
                                    <Col><Button as={Link} to='/cart' variant='warning' className='btn btn-outline-dark bg-warning' onClick={props.onHide}>Ir al Carrito</Button></Col>
                                    <Col><Button variant='warning' className='btn btn-outline-dark  bg-warning' onClick={() => clearCart()}>Vaciar Carrito</Button></Col>
                                </Row>
                            </>
                        }

                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function CartWidget() {
    return (
        <>
            <OffCanvasCart placement="end" />
        </>
    );
}

export default CartWidget;