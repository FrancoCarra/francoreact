import React, {useState, useContext} from "react";

const CartContext = React.createContext([]);

 const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const AddProduct = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([ ...cart, { ...item, quantity }])
        }
    }

console.log('carrito: ' , cart)
const clearCart = () => setCart([]);

const totalPrice = () => {
    return cart.reduce((prev,act) => prev + act.quantity * act.price, 0);
}
const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
const removeProduct = (id) => setCart(cart.filter(product => product.id !==id));

return(
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        AddProduct,
        totalPrice,
        totalProducts,
        cart
        
    }}>
        {children}
    </CartContext.Provider>
)
 }

 export default CartProvider
