import './Item.css';
import {Card} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom';
const Item = ({title, image, price, stock, id}) => {
    return(
        <Card className=''>
        <Card.Img className="card-img" variant="top" src={`../${image}`} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <ItemCount stock={stock} title = {title}/>
            <Link to={`/item/${id}`}>Ver Producto</Link>
        </Card.Body>
        </Card>
        
    )
}

export default Item