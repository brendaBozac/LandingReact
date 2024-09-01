import React, { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css'
import '@fontsource-variable/alexandria'
import logoHeader from "../../img/juniorRowWhite.png"
//import { getProducts , getProductsByCategory } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebaseConfig.js'
import { collection, getDocs, query, where, addDoc, doc, getDoc } from 'firebase/firestore'
// import {productos} from '../../../asyncMock'


function ItemListContainer({ titulo, texto }) {
    const [products, setProducts] = useState([])

    const { categoria } = useParams()

    useEffect(() => {


       /*  const asyncFunc = categoriaId ? getProductsByCategory : getProducts

        asyncFunc(categoriaId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            }) */  
           //asi trabajabamos trayendo los productos desde asyncMock. 
           //ahora vamos a usar firebase db

        if(categoria){
            const prodsPorCat = query(collection(db, "productos"), where("categoria", "==", categoria))
            getDocs(prodsPorCat).then(snapshot => {
                const prods = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(prods)
            })
                
        }else{
            const prodsRef = collection(db, "productos")
            getDocs(prodsRef).then(snapshot => {
                console.log("snap", snapshot)
                const prods = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(prods)
            })
        }
        
        


    }, [categoria])
/* 
    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, []) */

    return (
        <>
            <header>
                <div className='TextosDelHeader'>

                
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

                </div>
            </header>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer;