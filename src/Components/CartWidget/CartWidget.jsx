import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../CartWidget/CartWidget.css"

function CartWidget() {
    return (
        <div className="widget-contenedor">
            <FaShoppingCart />
            <p>45</p>

        </div>
    )
}

export default CartWidget;