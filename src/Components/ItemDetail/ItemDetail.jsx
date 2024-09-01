import React, { useContext } from "react"
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { CartContext } from "../../Context/CartContext.jsx"
import { Link } from "react-router-dom"

const ItemDetail = ({ product, previo, next }) => {
    const { nombre, imagen, categoria, descripcion, precio, cantidad} = product;
    const { agregarCarrito, quantity, reiniciarCantidad } = useContext(CartContext)

    const pulsarComprar = (quantity) => {
        agregarCarrito({...product, quantity: quantity})
    }

    const funcionalidadBotonPrevio = () => {
        reiniciarCantidad();
        previo();
    }

    const funcionalidadBotonNext = () => {
        reiniciarCantidad();
        next();
    }

        return (
            <>
            <article className="CardItem2">
                <div className="CardIzquierda">
                    <h2 className="ProdTitulo">
                        {nombre}
                    </h2>
                    <picture>
                        <img src={imagen} alt={nombre} className="ProdImg" />
                    </picture>
                    <div className="cambiarProd">
                        <button className="botonProd" onClick={funcionalidadBotonPrevio}>Ver Anterior</button>
                        <button className="botonProd" onClick={funcionalidadBotonNext}>Ver Siguiente</button>
                    </div>
                </div>
                
                <section className="CardDerecha">
                    <p className="Info">Categoria = {categoria}</p>
                    <p className="Info">Descripcion = {descripcion}</p>
                    <p className="Info">Precio: ${precio}</p>
                    <div className="ItemCountDiv">
                        <ItemCount initial={quantity} stock={cantidad} pulsarComprar={pulsarComprar} />
                    </div>
                </section>
                
                
                
            </article>
            <div>
                    <Link to="/" >
                    <button className="volverInicio">Volver al Inicio</button>
                    </Link>
                </div>
            </>
        )
}

export default ItemDetail