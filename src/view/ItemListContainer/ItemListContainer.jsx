import React, { useContext } from 'react'
import ItemList from '../../component/ItemList/ItemList';
import PokeApiContext, { ApiPoke } from '../../context/PokeApiContext';


const ItemListContainer = ({ searchValue }) => {


    const { pokemon } = useContext(ApiPoke)


    return (
        <div>
            <ItemList pokemon={pokemon} />
        </div>
    )
}

export default ItemListContainer
