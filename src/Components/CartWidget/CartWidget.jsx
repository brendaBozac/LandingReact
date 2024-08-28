import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../CartWidget/CartWidget.css"
import { CartContext } from "../../Context/CartContext"

function CartWidget() {

    const {mostrarCantidad} = useContext(CartContext)

    return (
        <div className="widget-contenedor">
            <FaShoppingCart />
            <p>{mostrarCantidad()}</p>

        </div>
    )
}

export default CartWidget;