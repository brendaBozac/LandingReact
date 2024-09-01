import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CardItem from "../CardItem/CardItem";
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { contexto, cart, vaciarCarrito, mostrarTotal } = useContext(CartContext)

    return (
        <div className="cartContainerPrincipal">
            {
                cart?.map(e=> {
                    return (
                        <CardItem key={e.id} producto={e}/>
                    )
                })
            }
            <div className="totalBotones">
            {cart.length > 0 ?
            <>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                <p>`Total: $ {mostrarTotal()}` </p>
                <Link to="/Checkout" >
                <button >Comprar</button>
                </Link>
            </> : 
            <>
            <h4>En este momento el Carrito está Vacío.</h4>
            <Link to="/" >
                <button >Volver al Inicio</button>
            </Link>
            </>
            }
            </div>
        </div>
    )
}

export default Cart;