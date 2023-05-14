import React, { useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import EvolutionChain from '../EvolutionChain/EvolutionChain'

const EvolutionChainContainer = ({ specieSearchResult }) => {

    const { searchByCategory, evolutionSearchResult } = useContext(ApiPoke)

    useEffect(() => {

        if (specieSearchResult.length !== 0) {

            const { evolution_chain } = specieSearchResult
            // console.log(evolution_chain.url) //me trae un url
            searchByCategory(evolution_chain.url, "evolution")// me trae evolutionSearchResult
        }

    }, [specieSearchResult])


    return (
        <EvolutionChain evolutionSearchResult={evolutionSearchResult} />
    )
}

export default EvolutionChainContainer
