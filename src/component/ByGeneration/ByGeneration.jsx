import React, { useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import { Link } from 'react-router-dom'

const ByGeneration = () => {

    const { searchByCategory, byGenerationSearchResult } = useContext(ApiPoke)

    useEffect(() => {
        searchByCategory("https://pokeapi.co/api/v2/generation", "byGeneration")
    }, [])

    return (
        <>
            {
                byGenerationSearchResult.map((eachGene, i) => {
                    return (
                        <Link to={`/generation/${eachGene.name}`} key={i}>
                            {eachGene.name}
                        </Link>
                    )
                })
            }
        </>
    )
}

export default ByGeneration