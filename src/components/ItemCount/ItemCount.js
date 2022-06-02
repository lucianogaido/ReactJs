import './ItemCount.css';
import {Button} from "react-bootstrap";

const ItemCount = ({stock, quantity, updateQuantity, setShowButton}) =>{
    return(
        <>
        <div className="itemCount">
            <Button className="item-button" variant="btn btn-outline-dark my-2 my-sm-0 bg-warning" onClick={() => updateQuantity(quantity - 1)} disabled={quantity === 1}>-</Button>
            <p>{quantity}</p>
            <Button className="item-button" variant="btn btn-outline-dark my-2 my-sm-0 bg-warning" onClick={() => updateQuantity(quantity + 1)} disabled={quantity >= stock}>+</Button>
        </div>
            <Button variant="btn btn-outline-dark my-2 my-sm-0 bg-warning" onClick={()=>setShowButton(true)}>Agregar al Carrito</Button>
        </>
    )
}
export default ItemCount