import React, { useContext, useEffect, useState } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import { Link } from 'react-router-dom'

const Evolution = ({ evolutionStage, evolutionPokemonResult }) => {

    const { searchBySubCategory } = useContext(ApiPoke)
    useEffect(() => {

        if (evolutionStage.length !== 0) {
            // console.log(evolutionStage) // me trae los nombres de la cadena de evoluciones
            for (const key in evolutionStage) {

                searchBySubCategory("pokemon", evolutionStage[key], "evolutionPokemon") //evolutionPokemonResult
            }
        }
    }, [evolutionStage])
    

    return (
        <div className='evolutionChain d-flex-col'>

            <span>Evolution Chain</span>

            <div className='evolutionChain__container d-flex-row-align-center'>
                {
                    evolutionPokemonResult.map((evolution, i) => {
                        return (
                            <Link to={`/character/${evolution.name}`} key={i} >
                                <div className='evolutionChain__container-content'>
                                    <div className='d-flex-col-center'>
                                        {
                                            evolution["sprites"].other.dream_world.front_default === null ?
                                                <img src={evolution["sprites"].front_default} alt={evolution.name} />
                                                :
                                                <img src={evolution["sprites"].other.dream_world.front_default} alt={evolution.name} />

                                        }
                                        <span className='evolutionChain__container-name'>{(evolution.name).toUpperCase()}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Evolution
