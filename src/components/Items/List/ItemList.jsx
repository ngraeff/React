import React from 'react'
import CardList from '../../Card/List/CardList'
import './ItemListContainer.css';


const ItemList = ({ items }) => {
    return (
        <>{
            items.map((item) => (
                <div className="elemento" key={item.id}>
                    <CardList  item={item} />
                    
                </div>
            ))
        }
        </>
    )
}



export default ItemList

