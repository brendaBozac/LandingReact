import React, { useEffect, useState, useContext } from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'
//import { getProductsById, getProducts } from '../../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams, useNavigate } from 'react-router-dom' 
//import { CartContext } from '../../Context/CartContext.jsx'
import { db } from '../../services/firebaseConfig.js'
import { getDoc, doc, getDocs, collection } from "firebase/firestore"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    //const [totalProducts, setTotalProducts] = useState(0);
    const [products, setProducts] = useState([]);
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

    useEffect(() => {
        // Función para obtener todos los productos
        const fetchAllProducts = async () => {
            try {
                const prodsRef = collection(db, "productos");
                const snapshot = await getDocs(prodsRef);
                const prods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(prods);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchAllProducts();
    }, []);


    const previo = () => {
        const currentIndex = products.findIndex(prod => prod.id === productId);
        const newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
        navigate(`/item/${products[newIndex].id}`);
    };

    const next = () => {
        const currentIndex = products.findIndex(prod => prod.id === productId);
        const newIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
        navigate(`/item/${products[newIndex].id}`);
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