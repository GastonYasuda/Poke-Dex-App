import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApiPoke } from '../../context/PokeApiContext'

const Character = () => {

    const { characterId } = useParams()

    const { } = useContext(ApiPoke)

    const [pokemonSelect, setPokemonSelect] = useState([])

    useEffect(() => {



        if (pokemonSelect.length === 0) {


            fetch(`https://pokeapi.co/api/v2/pokemon/${characterId}`)

                .then(response => response.json())
                .then(json => {
                    setPokemonSelect(json)
                })

                .catch((error) => {
                    console.log(error);
                })

        } else if (pokemonSelect.length !== 0 && pokemonSelect !== undefined) {

            console.log(pokemonSelect);
            console.log(pokemonSelect.id);
            console.log(pokemonSelect.name);
            console.log(pokemonSelect["sprites"].front_default);
        }


    }, [characterId, pokemonSelect])




    return (
        <>
            <Link to={'/'} >
                VOLVER
            </Link>
            {
                pokemonSelect.length !== 0 && pokemonSelect !== undefined ?
                    <>
                        <h1>{pokemonSelect.id}</h1>
                        <h5>{pokemonSelect.name}</h5>
                        <img src={pokemonSelect["sprites"].front_default} alt={pokemonSelect.name} />
                    </>
                    :
                    <h1>ERROR <br /> PROXIMAMENTE UN LOADING</h1>

            }

            {/*  tengo que entrar a url que esta en characterId... ahi tiene que estar todos los elementos (id, nombre, sprites, abilities) */}
        </>
    )
}

export default Character