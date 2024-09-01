import React from "react";
import "../ItemList/ItemList.css"
import Item from "../Item/Item.jsx";



const ItemList = ({ products }) => {
    return(
        <>
        <div className="ListGroup">
            <svg className="bandablanca" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#F2E9E9" fillOpacity="1" d="M0,224L60,218.7C120,213,240,203,360,197.3C480,192,600,192,720,208C840,224,960,256,1080,245.3C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div>

        <div className="titulosTiendaPrincipal">
            <h2>Find in our store everything you need to travel</h2>
            <h3>we help you keep moving</h3>

        </div>


        <div className="ListGroup">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
        
        </>    
    )
}



export default ItemList;
