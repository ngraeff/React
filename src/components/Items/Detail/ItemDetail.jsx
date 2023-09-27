import React from 'react'
import CardDetail from '../../Card/Detail/CardDetail'
import './ItemDetailContainer.css';


const ItemDetail = ({ item }) => {
    return (
        <>{
            <div className="elemento">
                <CardDetail  item={item} key={item.id}/>
                
            </div>
        }
        </>
    )
}



export default ItemDetail

