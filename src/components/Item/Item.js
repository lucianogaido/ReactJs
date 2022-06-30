import './Item.css';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Item = ({ title, image, price, id }) => {
    return (
        <Card className='item'>
            <Card.Img className="card-img" variant="top" src={`../${image}`} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text><strong>${price}</strong></Card.Text>
                <Button variant='warning' as={Link} to={`/item/${id}`}>Ver Producto</Button>
            </Card.Body>
        </Card>

    )
}

export default Item