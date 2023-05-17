import React, { useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import Evo from '../Evo/Evo'

const Evolution = ({ evolutionStage }) => {

    const { searchBySubCategory, evolutionPokemonResult } = useContext(ApiPoke)


    useEffect(() => {

        if (evolutionStage.length !== 0) {

            for (let i = 0; evolutionStage.length > i; i++) {
                searchBySubCategory("pokemon", evolutionStage[i], "evolutionPokemon") //evolutionPokemonResult 
            }
        }
    }, [evolutionStage])


    return (
        <>
            < Evo evolutionPokemonResult={evolutionPokemonResult} />
        </>
    )
}

export default Evolution
