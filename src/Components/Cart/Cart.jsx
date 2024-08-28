import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CardItem from "../CardItem/CardItem";
import './Cart.css'

const Cart = () => {

    const { contexto, cart, vaciarCarrito } = useContext(CartContext)

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
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                <span>Total: $</span>
                <button /* onClick={comprarTotal} */>Comprar</button>
            </div>
        </div>
    )
}

export default Cart;