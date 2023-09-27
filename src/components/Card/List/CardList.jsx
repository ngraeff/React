import React from 'react'
import './CardList.css';
import { Link } from 'react-router-dom'
const CardList = ({item}) => {
    return (
        <div className="cardObjeto">
            <div className="contenedorImg">
                <img src={item.image} className="cardImg" alt="Imagen de la tarjeta" />
            </div>
            
            <div className="cardPie">
                <h5 className="cardTitulo">{item.title}</h5>
                <p className="cardDescripcion">{item.description}</p>
                <Link to={`/prenda/${item.id}`} className="btn btn-primary">Ver Detalle</Link>
            </div>
        </div>
    );
}



export default CardList