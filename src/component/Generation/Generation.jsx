import React, { useContext, useEffect, useState } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import { Link } from 'react-router-dom'

const Generation = ({ characterId, specieSearchResult }) => {

    const { generationSearchResult, searchByCategory, searchBySubCategory } = useContext(ApiPoke)


    useEffect(() => {
        searchBySubCategory("pokemon-species", characterId, "specie") //resultado es specieSearchResult
    }, [])


    useEffect(() => {
        if (specieSearchResult.length !== 0) {
            searchByCategory(specieSearchResult.generation.url, "generationResult") //resultado es generationSearchResult
        }
    }, [specieSearchResult])


    return (
        <section className='generationName'>
            {
                generationSearchResult.length !== 0 &&

                <Link to={`/generation/${generationSearchResult.name}`}>
                    {
                        (generationSearchResult.name).toUpperCase()
                    }
                </Link>


            }
        </section>
    )
}

export default Generation
