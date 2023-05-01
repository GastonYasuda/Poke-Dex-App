import React, { Fragment, useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import Loading from '../../component/Loading/Loading'
import { Link, useParams } from 'react-router-dom'
import VolverHome from '../../component/VolverHome/VolverHome'

const PokeByGeneration = () => {

    const { generationSearchResult, pokemonByGeneration, searchBySubCategory } = useContext(ApiPoke)
    const { generationId } = useParams()

    useEffect(() => {
        if (generationSearchResult.length === 0) {
            searchBySubCategory("generation", generationId, "generationID")
        }

        const { pokemon_species } = generationSearchResult
        for (const key in pokemon_species) {
            searchBySubCategory("pokemon", pokemon_species[key].name, "generationPokemon") //pokemonByGeneration
        }


    }, [generationSearchResult])

    // useEffect(() => {

    //     if (generationSearchResult.length !== 0 && generationSearchResult !== undefined) {
    //         console.log(generationSearchResult)


    //         for (const key in pokemon_species) {
    //             searchBySubCategory("pokemon", pokemon_species[key].name, "generationPokemon") //pokemonByGeneration
    //         }
    //     } else {
    //         console.log("no estoy");
    //     }

    // }, [generationSearchResult])

    //--------------------------------PARA PROBAR
    // useEffect(() => {
    //     if (pokemonByGeneration.length !== 0) {
    //         console.log(pokemonByGeneration);

    //         for (const key in pokemonByGeneration) {
    //             console.log(pokemonByGeneration[key].sprites);
    //         }

    //     }

    // }, [pokemonByGeneration])



    return (
        <>
            <VolverHome />
            {
                generationSearchResult.length !== 0
                    ?
                    < div >
                        <h1>{(generationSearchResult.name).toUpperCase()}</h1>
                        <p>main region: {generationSearchResult.main_region.name}</p>
                        {
                            pokemonByGeneration.map((poke, i) => {
                                return (
                                    <Link to={`/character/${poke.name}`} key={i}>
                                        <p>{poke.name}</p>
                                        <img src={poke.sprites.front_default} alt="" />
                                    </Link>
                                )
                            })
                        }
                    </div >
                    :
                    <Loading />
            }
        </>
    )
}

export default PokeByGeneration
