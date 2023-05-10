import React, { useContext, useEffect, useState } from 'react'
import ItemList from '../../component/ItemList/ItemList';
import { ApiPoke } from '../../context/PokeApiContext';
import ByGeneration from '../../component/ByGeneration/ByGeneration';
import Carousel from '../../component/PokeCarousel/PokeCarousel';


const ItemListContainer = () => {


    const { pokemon,  } = useContext(ApiPoke)

  


    return (
        <div className='main d-flex-col-center'>

            <ByGeneration />


            <div className='main__body'>


                <Carousel />

                <ItemList pokemon={pokemon} />


            </div>

        </div>
    )
}

export default ItemListContainer
