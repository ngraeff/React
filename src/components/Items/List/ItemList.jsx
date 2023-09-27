import React from 'react'
import CardList from '../../Card/List/CardList'
import './ItemListContainer.css';


const ItemList = ({ items }) => {
    return (
        <>{
            items.map((item) => (
                <div className="elemento">
                    <CardList  item={item} key={item.id}/>
                    
                </div>
            ))
        }
        </>
    )
}



export default ItemList

