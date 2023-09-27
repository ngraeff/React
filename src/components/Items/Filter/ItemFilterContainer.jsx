import React, { useEffect, useState } from 'react'
import './ItemFilterContainer.css';
import useFetch from '../../../customHooks/useFetch';
import ItemList from '../List/ItemList';

const ItemFilterContainer = ({filtro}) => {

    const [items] = useFetch(`https://fakestoreapi.com/products/category/${filtro}`)

    return (
        <div className="contenedorArticulos">
            <div className="contanedorChildren">
               <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemFilterContainer