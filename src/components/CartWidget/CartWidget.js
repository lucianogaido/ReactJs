import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';
import {Button, Modal, Container, Row, Col, } from "react-bootstrap"
import {useState, useContext} from "react"
import CartContext from '../../context/CartContext';

function MydModalWithGrid(props) {
    const {cartListItems, cartQuantity, totalPrice}= useContext(CartContext)
    console.log("cartListItems desde checkout: ", cartListItems)
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Using Grid in Modal
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
            <Container>
                {cartListItems.length === 0 && (
                    <>
                        <p>No hay productos en el Carrito</p>
                    </>
                )}
                {cartListItems.map((item)=>{
                    return(
                        <Row key={item.data.id}>
                            <Col xs={12} md={8}>
                                <img src={`../${item.data.image}`}/>
                            </Col>
                            <Col xs={6} md={4}>
                                <p>{item.data.title}</p>
                                <p>${item.data.price}</p>
                                <p>cantidad {cartQuantity}</p>
                                <p>Total: ${totalPrice}</p>
                            </Col>
                        </Row>
                    )
                })}
                
            </Container>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
    }
    
    function CartWidget() {
        const [modalShow, setModalShow] = useState(false);
    
        return (
        <>
            <button type="button" className="btn btn-outline-dark my-2 my-sm-0 bg-warning" onClick={() => setModalShow(true)}>
            <FaShoppingCart className='cartIcon'/>
            </button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
        );
    }
    

export default CartWidget