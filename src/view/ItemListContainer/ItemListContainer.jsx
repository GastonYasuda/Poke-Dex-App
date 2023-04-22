import React, { useContext, useState } from 'react'
import ItemList from '../../component/ItemList/ItemList';
import { ApiPoke } from '../../context/PokeApiContext';
import Buscador from '../../component/Buscador/Buscador';
import { Link } from 'react-router-dom';


const ItemListContainer = () => {


    const { pokemon } = useContext(ApiPoke)

    const [inputCharacter, setInputCharacter] = useState("")


    return (
        <div>
            <Buscador inputCharacter={inputCharacter} setInputCharacter={setInputCharacter} />


            <Link to={`/character/${inputCharacter}`} />
            
            {/* hacer muchos links con las diferentes categorias */}


            <ItemList pokemon={pokemon} />

        </div>
    )
}

export default ItemListContainer
