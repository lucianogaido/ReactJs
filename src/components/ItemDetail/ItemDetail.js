import { Container, Image, Button, Row, Col } from "react-bootstrap"
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import { Link } from "react-router-dom"
import BoostrapToast from "../Toast/Toast";


const ItemDetail = ({ data }) => {
    const [count, setcount] = useState(1);
    const [showButton, setShowButton] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const { title, image, price, description } = data

    return (
        <>
            {showToast && <BoostrapToast setShowToast={setShowToast} />}
            <Container className="item_detail row">
                <article className="col-xs-12 col-sm-12 col-lg-6">
                    <Image className="imgDetail rounded" src={`../${image}`} />
                </article>
                <aside className="col-xs-12 col-sm-12 col-lg-6">
                    <h2>{title}</h2>
                    <div>{description}</div>
                    <p className="price">${price}</p>
                    {!showButton ?
                    
                        <>
                            <ItemCount
                                count={count}
                                updatecount={setcount}
                                setShowButton={setShowButton}
                                stock={data.stock}
                                data={data}
                                setShowToast={setShowToast}
                            />
                        </>
                        :
                        <>
                            <Row className="container " >
                                <Col><Button variant="warning" as={Link} to="/products">Continuar Comprando</Button> </Col>
                                <Col><Button variant="warning" as={Link} to="/cart">Terminar mi Compra</Button> </Col>
                            </Row>
                        </>
                    }

                </aside>
            </Container>
        </>
    )
}
export default ItemDetail