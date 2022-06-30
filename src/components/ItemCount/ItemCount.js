import './ItemCount.css';
import { Button } from "react-bootstrap";
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const ItemCount = ({ stock, count, updatecount, setShowButton, data, setShowToast }) => {
    const { addProductToCart } = useContext(CartContext)

    const product = {
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
        stock: data.stock,
        description: data.description,
        category: data.category,
        quantity: count
    }

    const addProduct = () => {
        data.quantity += count;
        setShowButton(true)
        addProductToCart({ data: product }, setShowToast)
    }
    return (
        <>
            <div className="itemCount">
                <Button className="item-button" variant="btn btn-outline-dark my-2 my-sm-0 bg-warning" onClick={() => updatecount(count - 1)} disabled={count === 1}>-</Button>
                <p id="count"><strong>{count}</strong></p>
                <Button className="item-button" variant="btn btn-outline-dark my-2 my-sm-0 bg-warning" onClick={() => updatecount(count + 1)} disabled={count >= stock}>+</Button>
            </div>
            <Button variant="btn btn-outline-dark my-2 my-sm-0 bg-warning"
                disabled={stock === 0}
                onClick={() => addProduct()}>
                Agregar al Carrito
            </Button>
        </>
    )
}
// 
export default ItemCount
