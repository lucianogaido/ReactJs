import { FaTrashAlt } from 'react-icons/fa';
import { Container, Row, Col, Button } from "react-bootstrap"
import CartContext from '../context/CartContext';
import { useContext, useState } from "react"
import { Link } from 'react-router-dom';


const Cart = () => {
    const {cartListItems,totalPrice, removeProduct, clearCart, cartAmount, setTotalPrice}= useContext(CartContext)
    // const [count, setcount] = useState(0);

    

    return (
        <>
        <h2>Tu Carrito de Compras</h2>
        <Container>
                {cartListItems.length === 0 ? (
                    <>
                        <p>No hay productos en el Carrito</p>
                    </>
                )
                :
                <Row className="cart-menu-container">
                    <Col className="cart-menu" xs={12} md={2}>Producto</Col>
                    <Col className="cart-menu" xs={6} md={3}>Detalle</Col>
                    <Col className="cart-menu" xs={6} md={2}>Precio</Col>
                    <Col className="cart-menu" xs={6} md={2}>Cantidad</Col>
                    <Col className="cart-menu" xs={6} md={2}>Total </Col>                        
                    <Col className="cart-menu" xs={6} md={1}>Eliminar </Col>                        
                </Row>
            }
                
                {cartListItems.map((item)=>{
                    // const disminuir = (id)=>{
                    //     setcount(count - 1)
                    //     setTotalPrice(totalPrice - item.data.price )
                    // }
                    
                    // const aumentar = (id)=>{
                    //     setcount(count + 1)
                    //     setTotalPrice(totalPrice + item.data.price )
                    // }
                    // item.data.quantity = count
                    return(
                        <div key={item.data.id}>
                        
                        <Row >
                            <Col className="cart-item" xs={12} md={2}>
                                <img src={`../${item.data.image}`} alt={item.data.title}/>
                            </Col>
                            <Col className="cart-title" xs={12} md={3}>
                                <p>{item.data.title}</p>
                            </Col>
                            <Col className="cart-item" xs={12} md={2}>
                                <p>${item.data.price}</p>
                            </Col>
                            <Col className="cart-item" xs={12} md={2}>                          
                                {/* <Button variant="outline-warning" size="sm" className='cart-btn'onClick={()=> disminuir(item.data.id)}>
                                    -
                                </Button> */}
                                <p>{item.data.quantity}</p>
                                {/* <Button variant="outline-warning" size="sm" className='cart-btn' onClick={()=> aumentar(item.data.id)}>
                                    +
                                </Button> */}
                            </Col>
                            <Col className="cart-item" xs={12} md={2}>
                                <p>${item.data.quantity*item.data.price}</p>
                            </Col>

                            <Col className="cart-item" xs={6} md={1}><FaTrashAlt onClick={ () => removeProduct(item)}/></Col>

                        </Row>
                        </div>
                    )
                })}
                {cartListItems.length > 0 && 
                <>
                <Row>
                <Col md={{ span: 2, offset: 7 }} className="cart-page-amount"> {cartAmount}</Col>
                <Col md={{ span: 3 }} className="cart-page-total">Total: ${totalPrice}</Col>
                </Row>
                <Button variant='warning' className='btn btn-outline-dark my-2 my-sm-0 bg-warning' onClick={() => clearCart()}>Vaciar Carrito</Button>
                </>
                }


                <Button as={Link} to='/' variant='warning' className='btn btn-outline-dark my-2 my-sm-0 bg-warning' >Continuar Comprando</Button>
                
            </Container>
        </>
    )
}
export default Cart