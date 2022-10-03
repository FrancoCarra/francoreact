import React from "react";
import { useCartContext } from './CartContext'
import { Link } from 'react-router-dom'
import ItemCart from "./ItemCart";
import { getFirestone, addDoc, collection } from 'firebase/firestone'

const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Pablo',
            email: 'pabloperez@gmail.com',
            phone: '123123',
            addres: 'Via Marghetina'

        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestone();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log)

    }

    if(cart.lenght === 0){
    return (
        <>
        <p> No hay elementos en el carrito</p>
        <Link to='/'>Hacer Compras</Link>
        </>
    );
}
return (
    <>
    {
        cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <p>
        total: {totalPrice()}
    </p>
    <button onClick={handleClick}>Emitir Compra</button>
    </>
)
}
export default Cart