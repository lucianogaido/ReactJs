import './Item.css';
import {Card, Button} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom';
const Item = ({title, image, price, stock, id}) => {
    return(
        <Card className=''>
        <Card.Img className="card-img" variant="top" src={`../${image}`} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>${price}</Card.Text>
            {/* <ItemCount stock={stock} title = {title}/> */}
            <Link to={`/item/${id}`}>Ver Producto</Link>
            {/* <Button variant="btn btn-outline-dark my-2 my-sm-0 bg-warning" >Agregar al Carrito</Button> */}
        </Card.Body>
        </Card>
        
    )
}

export default Item