import React, { useEffect, useState } from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'
import { getProductsById } from '../../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom' 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()
    
    useEffect(() => {
        getProductsById(productId)
            .then(response => {
                setProduct(response)
                console.log(productId)
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    /* {...product}  ...son propiedades del producto */
    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} /> 
        </div>
    )
}

export default ItemDetailContainer