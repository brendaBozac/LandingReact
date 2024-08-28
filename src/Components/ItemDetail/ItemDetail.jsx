import React, { useContext } from "react"
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { CartContext } from "../../Context/CartContext.jsx"

const ItemDetail = ({ product, previo, next }) => {
    const { nombre, imagen, categoria, descripcion, precio, cantidad} = product;
    const { agregarCarrito, quantity } = useContext(CartContext)

    const pulsarComprar = (quantity) => {
        agregarCarrito({...product, quantity: quantity})
    }


        return (
            <article className="CardItem">
                <div className="CardItemHeader">
                    <h2 className="ItemTitulo">
                        {nombre}
                    </h2>
                </div>
                <picture>
                    <img src={imagen} alt={nombre} className="ItemImg" />
                </picture>
                <section>
                    <p className="Info">Categoria = {categoria}</p>
                    <p className="Info">Descripcion = {descripcion}</p>
                    <p className="Info">Precio: ${precio}</p>
                </section>
                <footer className="ItemFooter">
                    <ItemCount initial={quantity} stock={cantidad} pulsarComprar={pulsarComprar} />
                </footer>
                <div className="cambiarProd">
                    <button className="botonProd" onClick={previo}>Ver Anterior</button>
                    <button className="botonProd" onClick={next}>Ver Siguiente</button>
                </div>
            </article>
        )
}

export default ItemDetail