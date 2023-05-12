import React, { useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import { Link } from 'react-router-dom'

const ByGeneration = () => {

    const { searchByCategory, byGenerationSearchResult } = useContext(ApiPoke)

    useEffect(() => {
        searchByCategory("https://pokeapi.co/api/v2/generation", "byGeneration")
    }, [])

    return (
        <section className='generationLinkContainer d-flex-row'>
            {
                byGenerationSearchResult.map((eachGene, i) => {
                    return (
                        <div key={i} className='generationLinkContainer__link '>
                            <Link to={`/generation/${eachGene.name}`} >
                                {(eachGene.name).toUpperCase()}
                            </Link>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ByGeneration