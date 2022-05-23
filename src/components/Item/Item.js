import './Item.css';
import {Card} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount"
const CardItem = ({title, image, price, stock}) => {
    return(
        <Card className='m-2'>
        <Card.Img className="card-img" variant="top" src={`../${image}`} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <ItemCount stock={stock} title = {title}/>
        </Card.Body>
        </Card>
        
    )
}

export default CardItem