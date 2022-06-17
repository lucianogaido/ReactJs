import { Container, Image, Button, Row, Col } from "react-bootstrap"
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import {Link} from "react-router-dom"

const ItemDetail =({data}) => {
    const [count, setcount] = useState(1);
    const [showButton, setShowButton] = useState(false)

    return(
        <>
        <Container className="item_detail row">
            <article className="col-xs-12 col-sm-12 col-lg-6">
                <Image className="imgDetail rounded" src={`../${data.image}`}/>
            </article>
            <aside className="col-xs-12 col-sm-12 col-lg-6">
                <h2>{data.title}</h2>
                <div>{data.description}</div>
                <p className="price">${data.price}</p>
                {!showButton ?
                <ItemCount
                    count={count}
                    updatecount = {setcount}
                    setShowButton = {setShowButton}
                    stock={data.stock}
                    data={data}
                />
                :
                <Row className="container" >
                     <Col><Button variant="warning" as={Link} to="/">Continuar Comprando</Button> </Col>
                     <Col><Button variant="warning" as={Link} to="/cart">Terminar mi Compra</Button> </Col>
                </Row>
                }
            </aside>
        </Container>
        </>
    )
}
export default ItemDetail