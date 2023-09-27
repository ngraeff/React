import React from 'react'
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/Items/Detail/ItemDetailContainer'


const Prenda = () => {
    const { id } = useParams()

    return (
        <div>

            <ItemDetailContainer id={id} />


        </div>
    )
}

export default Prenda