import React, { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css'
import '@fontsource-variable/alexandria'
import logoHeader from "../../img/juniorRowBlack.png"
import { getProducts } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList.jsx'


function ItemListContainer({ titulo, texto }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    })

    return (
        <>
        <header>
            <h1>
                {titulo}
            </h1>
            <p className='texto-bienvenida'>
                {texto}
            </p>
            <img 
                className='logo-header'
                src={logoHeader}
                alt="logo ecommerse negro" />

            
        </header>
        <ItemList products={products} />
        </>
    )
}

export default ItemListContainer;