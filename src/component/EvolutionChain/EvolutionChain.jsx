import React, { useContext, useEffect, useState } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'

const EvolutionChain = ({ specieSearchResult }) => {

    const { searchByCategory, evolutionSearchResult } = useContext(ApiPoke)

    useEffect(() => {
        if (specieSearchResult.length !== 0) {

            const { evolution_chain } = specieSearchResult
            console.log(evolution_chain.url) //me trae un url
            searchByCategory(evolution_chain.url, "evolution")// me trae evolutionSearchResult
        }

    }, [specieSearchResult])

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
        <div>
            {console.log(evolutionStage)}
            ACA IRIA LA CADENA DE EVOLUCION
        </div>
    )
}

export default EvolutionChain
