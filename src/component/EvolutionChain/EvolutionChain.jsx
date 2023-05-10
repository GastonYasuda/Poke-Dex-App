import React, { useContext, useEffect, useState } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import Evolution from '../Evolution/Evolution'

const EvolutionChain = ({  evolutionSearchResult }) => {

    const {  evolutionPokemonResult,  } = useContext(ApiPoke)
    const [evolutionStage, setEvolutionStage] = useState("");


    useEffect(() => {

        if (evolutionSearchResult.length !== 0) {

            if (evolutionSearchResult.chain.evolves_to.length !== 0) {

                let tempEvolutionStage = [evolutionSearchResult.chain.species.name]
                let currentChain = evolutionSearchResult.chain.evolves_to

                while (currentChain.length !== 0) {
                    currentChain.forEach(evolution => {
                        tempEvolutionStage.push(evolution.species.name)
                    });
                    currentChain = currentChain[0].evolves_to
                }
                setEvolutionStage(tempEvolutionStage)
            }
        }

    }, [evolutionSearchResult])


    return (
        <>
            <Evolution evolutionStage={evolutionStage} evolutionPokemonResult={evolutionPokemonResult} />

        </>
    )
}

export default EvolutionChain

