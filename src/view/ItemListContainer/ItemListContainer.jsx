import React, { useContext, useState } from 'react'
import ItemList from '../../component/ItemList/ItemList';
import { ApiPoke } from '../../context/PokeApiContext';
import Buscador from '../../component/Buscador/Buscador';
import ByGeneration from '../../component/ByGeneration/ByGeneration';
import Carousel from '../../component/PokeCarousel/PokeCarousel';

import pokeNav from "../../assets/pokeNav.png";
import ToTop from '../../component/ToTop/ToTop';


const ItemListContainer = () => {


    const { pokemon } = useContext(ApiPoke)

    const [inputCharacter, setInputCharacter] = useState("")


    return (
        <div className='main d-flex-col-center'>

            <section className='main__header d-flex-col-center'>

                <div className='main__header-container d-flex-col-center'>

                    <img src={pokeNav} alt="pokeNav" />
                    <Buscador inputCharacter={inputCharacter} setInputCharacter={setInputCharacter} />

                </div>

            </section>


            <ByGeneration />


            <div className='main__body'>


                <Carousel />

                <ItemList pokemon={pokemon} />

                <ToTop />

            </div>

        </div>
    )
}

export default ItemListContainer
