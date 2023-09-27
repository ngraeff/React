import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css';
import useFetch from '../../../customHooks/useFetch';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({id}) => {

    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)

    return (
        <>
        {
            item !== null &&
            <div className="contenedorArticulos">
            <div className="contanedorChildren">
                <ItemDetail  item={item} />
            </div>
            </div>
        }
        </>
        
    )
}

export default ItemDetailContainer