import React, { useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import Evo from '../Evo/Evo'

const Evolution = ({ evolutionStage }) => {

    const { searchBySubCategory, evolutionPokemonResult } = useContext(ApiPoke)

    useEffect(() => {


        if (evolutionStage.length !== 0) {
            // console.log("hola");

            evolutionStage.forEach(element => {
                searchBySubCategory("pokemon", element, "evolutionPokemon") //evolutionPokemonResult
            });

            // console.log(evolutionStage.length);
        }
    }, [evolutionStage])


    return (
        <Evo evolutionPokemonResult={evolutionPokemonResult} />
    )
}

export default Evolution
