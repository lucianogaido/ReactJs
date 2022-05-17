import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';
const CartWidget = () => {
    return(
        <>
        <button type="button" className="btn btn-outline-dark my-2 my-sm-0 bg-warning" id='cartIcon' data-toggle="modal"
            data-target="#exampleModal">
            <FaShoppingCart className='cartIcon' />
        </button>
        </>
    )
}
export default CartWidget