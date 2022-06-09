import { createContext, useState } from "react";

const CartContext= createContext();

const CartProvider = ({children}) =>{
    const [cartListItems, setCartListItems] = useState([])
    const [cartAmount, setcartAmount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart =(product)=>{
        let isInCart = cartListItems.find(cartItem => cartItem.data.id === product.data.id)

        setTotalPrice(totalPrice + (product.data.price * product.data.quantity))
        setcartAmount(cartAmount + product.data.quantity )
        if(!isInCart ){
            setCartListItems(cartListItems=>[...cartListItems,product])
        }else{
            isInCart.data.quantity += product.data.quantity
            setCartListItems(cartListItems)
        }
    }
    const removeProduct = (product) => {
        const copyProducts = [...cartListItems];
        const newProductsArray = copyProducts.filter((cartItem) => cartItem.data.id !== product.data.id);
        let remuvedProduct = cartListItems.find(cartItem => cartItem.data.id === product.data.id)
        setCartListItems(newProductsArray);
        setcartAmount(cartAmount - product.data.quantity )
        setTotalPrice(totalPrice - (remuvedProduct.data.price * remuvedProduct.data.quantity) )
    };

    const clearCart = () =>{
        setCartListItems([]);
        setTotalPrice(0);
        setcartAmount(0)
    }
    
    

    const data ={
        cartListItems,
        addProductToCart,
        cartAmount,
        totalPrice,
        removeProduct,
        clearCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
export {CartProvider}