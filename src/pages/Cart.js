import { FaTrashAlt } from 'react-icons/fa';
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import CartContext from '../context/CartContext';
import { useContext, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import { addDoc, collection, increment, updateDoc, doc } from 'firebase/firestore'
import db from '../data/firebaseConfig';
import "../App.css"

const Cart = () => {
    const { cartListItems, totalPrice, removeProduct, clearCart, cartAmount } = useContext(CartContext)
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState()
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map((item) => {
            return {
                id: item.data.id,
                title: item.data.title,
                price: item.data.price,
                quantity: item.data.quantity
            }
        }),
        total: totalPrice
    })
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
        consult: ''
    })



    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({ ...order, buyer: formValue })
        saveData({ ...order, buyer: formValue })
    }

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccess(orderDoc.id)
        newOrder.items.map((item) => {
            const productToUpdate = doc(db, 'productos', item.id)
            updateDoc(productToUpdate, { stock: increment(-(item.quantity)) })
            return true
        })
    }

    const handleForm = (e) => {
        if ((formValue.name === "") || (formValue.phone === "")) {
            e.preventDefault()
        }
    }


    const navigate = useNavigate()

    const finishOrder = () => {
        clearCart()
        navigate('/')
    }

    return (
        <>
            <h2>Tu Carrito de Compras</h2>
            <Container>
                {cartListItems.length === 0 ? (
                    <>
                        <p><strong>No hay productos en el Carrito</strong></p>
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

                {cartListItems.map((item) => {
                    return (
                        <div key={item.data.id}>

                            <Row >
                                <Col className="cart-item" xs={12} md={2}>
                                    <img src={`../${item.data.image}`} alt={item.data.title} />
                                </Col>
                                <Col className="cart-title" xs={12} md={3}>
                                    <p>{item.data.title}</p>
                                </Col>
                                <Col className="cart-item" xs={12} md={2}>
                                    <p>${item.data.price}</p>
                                </Col>
                                <Col className="cart-item" xs={12} md={2}>
                                    <p>{item.data.quantity}</p>
                                </Col>
                                <Col className="cart-item" xs={12} md={2}>
                                    <p>${item.data.quantity * item.data.price}</p>
                                </Col>

                                <Col className="cart-item" xs={6} md={1}><FaTrashAlt onClick={() => removeProduct(item)} /></Col>

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
                        <Button variant='warning' className=' cart-btn btn btn-outline-dark my-2 my-sm-0 bg-warning' onClick={() => clearCart()}>Vaciar Carrito</Button>

                        <Contact title={success ? "Compra Existosa" : "Contacto"} show={show} handleClose={() => setShow(false)} handleShow={() => setShow(true)}>
                            {success ? (
                                <Col>
                                    <Row>Orden generada exitosamente!</Row>
                                    <Row>Numero de Orden: {success}</Row>
                                    <Button onClick={finishOrder}>Aceptar</Button>
                                </Col>
                            ) : (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Nombre y Apellido</Form.Label>
                                        <Form.Control type="text" placeholder="Nombre y Apellido" name="name" value={formValue.name} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            No lo compartiremos con nadie.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Email" name="email" value={formValue.email} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label>Telefono</Form.Label>
                                        <Form.Control type="number" placeholder="11..." name="phone" value={formValue.phone} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicText">
                                        <Form.Label>Dejanos tu Consulta</Form.Label>
                                        <Form.Control type="text" placeholder="..." name="consult" value={formValue.consult} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Recibir Novedades" />
                                    </Form.Group>
                                    <Button onClick={handleForm} className='cart-btn btn btn-outline-dark my-2 my-sm-0 ' variant="warning" type="submit">
                                        Aceptar
                                    </Button>
                                </Form>)}
                        </Contact>
                    </>
                }

                <Button as={Link} to='/products' variant='warning'
                    className='cart-btn btn btn-outline-dark my-2 my-sm-0 bg-warning' >
                    Continuar comprando
                </Button>

            </Container>
        </>
    )
}
export default Cart