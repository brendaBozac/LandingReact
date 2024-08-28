import React, { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css'
import '@fontsource-variable/alexandria'
import logoHeader from "../../img/juniorRowBlack.png"
import { getProducts, getProductsByCategory } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'


function ItemListContainer({ titulo, texto }) {
    const [products, setProducts] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        const asyncFunc = categoriaId ? getProductsByCategory : getProducts

        asyncFunc(categoriaId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })

    }, [categoriaId])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

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