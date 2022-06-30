import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || [])
    const [cartAmount, setcartAmount] = useState(JSON.parse(localStorage.getItem('cartAmount')) || 0)
    const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.getItem('totalPrice')) || 0)

    const addProductToCart = (product, setShowToast) => {
        let isInCart = cartListItems.find(cartItem => cartItem.data.id === product.data.id)
        let stock = product.data.stock
        let quantity = product.data.quantity
        if ((!isInCart) && (product.data.stock > product.data.quantity)) {
            setCartListItems(cartListItems => [...cartListItems, product])
            localStorage.setItem('products', JSON.stringify([...cartListItems, product]))
            product.data.stock = stock - quantity
            setTotalPrice(totalPrice + (product.data.price * product.data.quantity))
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice + (product.data.price * product.data.quantity)))
            setcartAmount(cartAmount + product.data.quantity)
            localStorage.setItem('cartAmount', JSON.stringify(cartAmount + product.data.quantity))
        } else if ((isInCart) && (isInCart.data.stock > product.data.quantity)) {
            isInCart.data.quantity += product.data.quantity
            setCartListItems(cartListItems)
            localStorage.setItem('products', JSON.stringify(cartListItems))
            isInCart.data.stock = isInCart.data.stock - quantity
            setTotalPrice(totalPrice + (product.data.price * product.data.quantity))
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice + (product.data.price * product.data.quantity)))
            setcartAmount(cartAmount + product.data.quantity)
            localStorage.setItem('cartAmount', JSON.stringify(cartAmount + product.data.quantity))
        } else {
            setShowToast(true)
        }
    }

    const removeProduct = (product) => {
        const copyProducts = [...cartListItems];
        const newProductsArray = copyProducts.filter((cartItem) => cartItem.data.id !== product.data.id);
        let remuvedProduct = cartListItems.find(cartItem => cartItem.data.id === product.data.id)
        setCartListItems(newProductsArray);
        setcartAmount(cartAmount - product.data.quantity)
        localStorage.setItem('cartAmount', JSON.stringify(cartAmount - product.data.quantity))
        setTotalPrice(totalPrice - (remuvedProduct.data.price * remuvedProduct.data.quantity))
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice - (remuvedProduct.data.price * remuvedProduct.data.quantity)))
        localStorage.setItem('products', JSON.stringify(newProductsArray))
    };

    const clearCart = () => {
        setCartListItems([]);
        setTotalPrice(0);
        setcartAmount(0)
        localStorage.setItem('products', JSON.stringify([]))
        localStorage.setItem('cartAmount', JSON.stringify(0))
        localStorage.setItem('totalPrice', JSON.stringify(0))


    }


    const data = {
        cartListItems,
        addProductToCart,
        cartAmount,
        totalPrice,
        removeProduct,
        clearCart,
        setTotalPrice
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
export { CartProvider }