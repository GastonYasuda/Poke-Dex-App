import React, { useContext, useEffect, useState } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import EvolutionChain from '../EvolutionChain/EvolutionChain'

const EvolutionChainContainer = ({ specieSearchResult }) => {

    const { searchByCategory, evolutionSearchResult } = useContext(ApiPoke)
    const [evolutionStage, setEvolutionStage] = useState("");

    useEffect(() => {
        if (specieSearchResult.length !== 0) {

            const { evolution_chain } = specieSearchResult
            console.log(evolution_chain.url) //me trae un url
            searchByCategory(evolution_chain.url, "evolution")// me trae evolutionSearchResult
        }

    }, [specieSearchResult])


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
        <EvolutionChain evolutionStage={evolutionStage} />
    )
}

export default EvolutionChainContainer
