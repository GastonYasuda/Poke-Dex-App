import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ApiPoke } from '../../context/PokeApiContext';

const ItemList = ({ pokemon }) => {


    return (
        <div>
            {
                pokemon.map((unPokemon, i) => {
                    return (
                        <Fragment key={i}>
                            <Link to={`/character/${unPokemon.name}`}>
                                <h3>{unPokemon.id}</h3>
                                <h5>{unPokemon.name}</h5>
                                <img src={unPokemon["sprites"].other.dream_world.front_default} alt={unPokemon.name} />
                            </Link>
                        </Fragment>
                    )
                })
            }

        </div >
    )
}

export default ItemList
