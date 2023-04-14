import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import PokeApiContext, { ApiPoke } from '../../context/PokeApiContext'

const ItemList = ({ pokemon }) => {

    const { mayPrimera } = useContext(ApiPoke)



    return (
        <div>
            {
                pokemon.map((unPokemon, i) => {
                    return (
                        <Fragment key={i}>

                            <Link to={`/character/${unPokemon.name}`}>
                                <h2>{mayPrimera(unPokemon.name)}</h2>
                            </Link>

                        </Fragment >
                    )
                })
            }

        </div >
    )
}

export default ItemList
