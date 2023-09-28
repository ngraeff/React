import React from 'react'
import CardDetail from '../../Card/Detail/CardDetail'
import './ItemDetailContainer.css';


const ItemDetail = ({ item }) => {
    return (
        <>{
            <div className="elemento" key={item.id}>
                <CardDetail  item={item} />
                
            </div>
        }
        </>
    )
}



export default ItemDetail

