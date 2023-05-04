import React, { useContext, useState } from 'react'
import ItemList from '../../component/ItemList/ItemList';
import { ApiPoke } from '../../context/PokeApiContext';
import Buscador from '../../component/Buscador/Buscador';
import ByGeneration from '../../component/ByGeneration/ByGeneration';
import Carousel from '../../component/PokeCarousel/PokeCarousel';


const ItemListContainer = () => {


    const { pokemon } = useContext(ApiPoke)

    const [inputCharacter, setInputCharacter] = useState("")


    return (
        <div className='main'>

            <Buscador inputCharacter={inputCharacter} setInputCharacter={setInputCharacter} />
            <ByGeneration />

            <Carousel />

            <ItemList pokemon={pokemon} />

        </div>
    )
}

export default ItemListContainer
