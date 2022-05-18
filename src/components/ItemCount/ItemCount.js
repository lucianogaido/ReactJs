import './ItemCount.css';
import {Button} from "react-bootstrap";
import { useState } from 'react';
const ItemCount = ({stock, title}) =>{
    const [count, setCount] = useState(1)
    return(
        <>
        <div className="itemCount">
            <Button className="item-button" variant="btn btn-outline-dark my-2 my-sm-0 bg-warning" onClick={() => setCount(count - 1)} disabled={count === 1}>-</Button>
            <p>{count}</p>
            <Button className="item-button" variant="btn btn-outline-dark my-2 my-sm-0 bg-warning" onClick={() => setCount(count + 1)} disabled={count >= stock}>+</Button>
        </div>
            <Button variant="btn btn-outline-dark my-2 my-sm-0 bg-warning" onClick={() => console.log(`Agregaste al Carrito ${count} ${title}.`)}>Agregar al Carrito</Button>
        </>
    )
}

export default ItemCount