import { FaShoppingCart,FaTrashAlt } from 'react-icons/fa';
import './CartWidget.css';
import {Button, Modal, Container, Row, Col, } from "react-bootstrap"
import {useState, useContext} from "react"
import CartContext from '../../context/CartContext';
import {Link} from 'react-router-dom'

function MydModalWithGrid(props) {
    const {cartListItems,totalPrice, removeProduct, clearCart}= useContext(CartContext)
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Tu Carrito de Compras
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
            <Container>
                {cartListItems.length === 0 ? (
                    <>
                        <p>No hay productos en el Carrito</p>
                    </>
                )
                :
                <Row className="cart-menu-container">
                    <Col className="cart-menu" xs={12} md={2}>Producto</Col>
                    <Col className="cart-menu" xs={6} md={4}>Detalle</Col>
                    <Col className="cart-menu" xs={6} md={2}>Precio</Col>
                    <Col className="cart-menu" xs={6} md={1}>Cant</Col>
                    <Col className="cart-menu" xs={6} md={2}>Total </Col>                        
                </Row>
            }
                
                {cartListItems.map((item)=>{
                    return(
                        <div key={item.data.id}>
                        
                        <Row >
                            <Col className="cart-item" xs={12} md={2}>
                                <img src={`../${item.data.image}`} alt={item.data.title}/>
                            </Col>
                            <Col className="cart-title" xs={12} md={4}>
                                <p>{item.data.title}</p>
                            </Col>
                            <Col className="cart-item" xs={12} md={2}>
                                <p>${item.data.price}</p>
                            </Col>
                            <Col className="cart-item" xs={12} md={1}>
                                <p>{item.data.quantity}</p>
                            </Col>
                            <Col className="cart-item" xs={12} md={2}>
                                <p>${item.data.quantity*item.data.price}</p>
                            </Col>

                            <Col className="cart-item" xs={6} md={1}><FaTrashAlt onClick={ () => removeProduct(item)}/></Col>

                        </Row>
                        </div>
                    )
                })}
                {cartListItems.length > 0 && <p className="cart-total">Total: ${totalPrice}</p>}
                
            </Container>
            </Modal.Body>
            <Modal.Footer>
            <Button as={Link} to='/cart' variant='warning' className='btn btn-outline-dark my-2 my-sm-0 bg-warning' onClick={props.onHide}>Ir al Carrito</Button>
            <Button variant='warning' className='btn btn-outline-dark my-2 my-sm-0 bg-warning' onClick={() => clearCart()}>Vaciar Carrito</Button>
            </Modal.Footer>
        </Modal>
        );
    }
    
    function CartWidget() {
        const {cartAmount}= useContext(CartContext)
        const [modalShow, setModalShow] = useState(false);
    
        return (
        <> 
            
            <button type="button" className="btn btn-outline-dark my-2 my-sm-0 bg-warning" onClick={() => setModalShow(true)}>
            <FaShoppingCart className='cartIcon'/>
            { (cartAmount !==0) && 
            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartAmount}</span>
            }
            </button>
            
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
        );
    }
    

export default CartWidget