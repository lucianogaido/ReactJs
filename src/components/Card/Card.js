import './Card.css';
import {Card} from "react-bootstrap"
const CardItem = ({title, image, text}) => {
    return(
        <Card>
        <Card.Img className="card-img" variant="top" src={`../${image}`} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
        
    )
}

export default CardItem