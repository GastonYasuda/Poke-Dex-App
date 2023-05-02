import React, { useContext, useEffect } from 'react'
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

    useEffect(() => {
        if (evolutionSearchResult.length !== 0) {
            console.log(evolutionSearchResult);

            console.log(evolutionSearchResult.chain.evolves_to.length); //1

            // console.log(evolutionSearchResult.chain.species.name);
            // console.log(evolutionSearchResult.chain.evolves_to[0].species.name);
            // console.log(evolutionSearchResult.chain.evolves_to[0].evolves_to[0].species.name);


            //por cada pokemon...
            //mostrame species.name
            //despues
            //hacelo MIENTRAS tenga evolves_to no este vacio MOSTRAME species.name


        }
    }, [evolutionSearchResult])

    return (
        <div>
            ACA IRIA LA CADENA DE EVOLUCION
        </div>
    )
}

export default EvolutionChain
