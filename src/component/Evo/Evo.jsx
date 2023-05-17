import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Evo = ({ evolutionPokemonResult }) => {

    const [showEvolution, setShowEvolution] = useState(false)

    useEffect(() => {

        if (evolutionPokemonResult.length !== 0 && evolutionPokemonResult.length <= 3) {
            setShowEvolution(true)
        } else {
            setShowEvolution(false)
        }
    }, [evolutionPokemonResult])



    return (
        <>
            {
                showEvolution ?
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
                                                            <>
                                                                {
                                                                    evolution["sprites"].front_default === null ?
                                                                        <>
                                                                            <img src='/assets/pokeball.png' alt="null pic" />
                                                                        </>
                                                                        :
                                                                        <img src={evolution["sprites"].front_default} alt={evolution.name} />
                                                                }
                                                            </>

                                                            :
                                                            <img src={evolution["sprites"].other.dream_world.front_default} alt={evolution.name} />

                                                    }
                                                    <span className='evolutionChain__container-content-name'>{(evolution.name).toUpperCase()}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    : null
            }


        </>
    )
}

export default Evo
