import React from 'react'
import './CardDetail.css';

const CardDetail = ({item}) => {
    return (
        <div className="cardObjetoD">
            <div className="contenedorImgD">
                <img src={item.image} className="cardImgD" alt="Imagen de la tarjeta" />
            </div>
            
            <div className="cardPieD">
                <h5 className="cardTituloD">{item.title}</h5>
                <p className="cardDescripcionD">{item.description}</p>
                <p className="cardPriceP">${item.price}</p>
            </div>
        </div>
    );
}



export default CardDetail