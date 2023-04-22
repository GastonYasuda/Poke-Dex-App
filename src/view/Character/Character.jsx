import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApiPoke } from '../../context/PokeApiContext'

const Character = () => {

    const { characterId } = useParams()

    const { } = useContext(ApiPoke)

    const [pokemonSelect, setPokemonSelect] = useState([])
    const [imgUrl, setImgUrl] = useState("")

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

        } else {

            if (pokemonSelect["sprites"].other.dream_world.front_default === null) {
                setImgUrl(pokemonSelect["sprites"].front_default)
            } else {
                setImgUrl(pokemonSelect["sprites"].other.dream_world.front_default)
            }
        }



        console.log("weight", pokemonSelect.weight);
        // console.log("abilities", pokemonSelect["abilities"]);





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
                        <img src={imgUrl} alt={pokemonSelect.name} />
                        <p>Weight: {pokemonSelect.weight}Kg.</p>

                        {
                            pokemonSelect["abilities"].map((cadaAbility, i) => {
                                return (
                                    <Link to={`/ability/${cadaAbility.ability.name}`} key={i}>
                                        <p>{cadaAbility.ability.name}</p>
                                    </Link>
                                )
                            })
                        }
                    </>
                    :
                    <h1>ERROR <br /> PROXIMAMENTE UN LOADING</h1>

            }
        </>
    )
}

export default Character