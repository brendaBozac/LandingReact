import { useContext } from "react"
import "../ItemCount/ItemCount.css"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import Cart from "../Cart/Cart"



const ItemCount = ({stock, pulsarComprar})=> {
    const {quantity, setQuantity, cart} = useContext(CartContext);

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }
    
    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div className="BotonesCarritoDiv">
                <button className="Button" onClick={()=> pulsarComprar(quantity)}>
                    Agregar al Carrito
                </button>
                
                {cart.length > 0 &&
                <Link to="/Cart/Cart" >
                <button className="Button">Ir al Carrito</button>
                </Link>
                }

                
            </div>
        </div>

    )
}





export default ItemCount; 