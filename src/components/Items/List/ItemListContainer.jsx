import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import './ItemListContainer.css';
import useFetch from '../../../customHooks/useFetch';

const ItemListContainer = () => {

    const [items] = useFetch('https://fakestoreapi.com/products')

    return (
        <div className="contenedorArticulos">
            <div className="contanedorChildren">
                <ItemList  items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer