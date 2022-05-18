import './Card.css';
import {Card} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount"
const CardItem = ({title, image, text, stock}) => {
    return(
        <Card>
        <Card.Img className="card-img" variant="top" src={`../${image}`} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <ItemCount stock={stock} title = {title}/>
        </Card.Body>
        </Card>
        
    )
}

export default CardItem