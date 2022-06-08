import { createContext, useState } from "react";

const CartContext= createContext();

const CartProvider = ({children}) =>{
    const [cartListItems, setCartListItems] = useState([])
    const [cartQuantity, setCartQuantity] = useState(1)
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart =(product)=>{
        console.log("product",product)
        let isInCart = cartListItems.find(cartItem => cartItem.data.id === product.data.id)
        console.log("is in cart", isInCart)
        setTotalPrice(totalPrice + (product.data.price * product.data.quantity))
        if(!isInCart ){
            setCartListItems(cartListItems=>[...cartListItems,product])
        }else{
            setCartQuantity(cartQuantity + product.data.quantity)
            console.log("cartquantity", cartQuantity)
        }

    }
    const data ={
        cartListItems,
        addProductToCart,
        cartQuantity,
        totalPrice
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
export {CartProvider}