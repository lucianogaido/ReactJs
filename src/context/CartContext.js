import { createContext, useState } from "react";
import ProductList from "../pages/ProductList";

const CartContext= createContext();

const CartProvider = ({children}) =>{
    const[cartListItems, setCartListItems] = useState([])

    const addProductToCart =(product)=>{
        console.log("id del producto= ",product.data.id)
        let isInCart = cartListItems.find(cartItem => cartItem.data.id === product.data.id)
        if(!isInCart ){
            console.log("se agrego el producto", product)
            setCartListItems(cartListItems=>[...cartListItems,product])
        }else{
            console.log("el producto ya fue agregado")
            product.data.quantity ++; // acá quiero sumarle el count de <ItemCount/>
        }

    }
    const data ={
        cartListItems,
        addProductToCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
export {CartProvider}