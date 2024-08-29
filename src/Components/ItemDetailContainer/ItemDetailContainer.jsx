import React, { useEffect, useState, useContext } from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'
//import { getProductsById, getProducts } from '../../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams, useNavigate } from 'react-router-dom' 
import { CartContext } from '../../Context/CartContext.jsx'
import { db } from '../../services/firebaseConfig.js'
import { getDoc, doc } from "firebase/firestore"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    //const [totalProducts, setTotalProducts] = useState(0);
    const { productId } = useParams()
    const navigate = useNavigate();
    //const { reiniciarCantidad } = useContext(CartContext);
    
    /* 
    useEffect(() => {
        getProducts()
            .then(products => {
                setTotalProducts(products.length);
            })
            .catch(error => {
                console.error(error);
            });
    },[]); */

    useEffect(() => {
       /*  getProductsById(productId)
            .then(response => {
                setProduct(response)
                reiniciarCantidad();
            })
            .catch(error => {
                console.error(error)
            }) */
        const fetchProduct = async () => {
            try{
                const productoRef = doc(db, "productos", productId)
                const res = await getDoc(productoRef)
                const data = res.data()
                const productoFormateado = {id: res.id , ...data}
                setProduct(productoFormateado)
            }catch (error){
                console.log(error)
            }
            
        }
        fetchProduct()
    }, [productId])

    const previo = () => {
        const newId = Number(productId) === 1 ? totalProducts : Number(productId) - 1; // Si el ID es 1, pasa al último producto
        navigate(`/item/${newId}`); // Cambia la URL con el nuevo ID
    };

    const next = () => {
        const newId = Number(productId) === totalProducts ? 1 : Number(productId) + 1; // Si el ID es el último, pasa al primer producto
        navigate(`/item/${newId}`); // Cambia la URL con el nuevo ID
    };

    if (!product) {
        return <p>Cargando...</p>;
    }

    /* {...product}  ...son propiedades del producto */
    return(
        <div className='ItemDetailContainer'>
            <ItemDetail 
                product={product}
                previo={previo}
                next={next}
            /> 
        </div>
    )
}

export default ItemDetailContainer