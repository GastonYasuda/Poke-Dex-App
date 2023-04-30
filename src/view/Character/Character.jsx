import React, { Fragment, useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import VolverHome from '../../component/VolverHome/VolverHome'
import { ApiPoke } from '../../context/PokeApiContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Loading from '../../component/Loading/Loading'
import Ability from '../../component/Ability/Ability'


const Character = () => {

    const { characterId } = useParams()
    const { pokemonSelect, mayPrimera, searchBySubCategory, specieSearchResult } = useContext(ApiPoke)

    const [imgUrl, setImgUrl] = useState("")
    const [showAbility, setShowAbility] = useState(false)
    const [generation, setGeneration] = useState([])


    useEffect(() => {


        if (pokemonSelect.length === 0 || pokemonSelect === undefined) {
            searchBySubCategory("pokemon", characterId, "pokemon")


        } else {
            searchBySubCategory("pokemon", characterId, "pokemon")


            if (pokemonSelect["sprites"].other.dream_world.front_default === null) {
                setImgUrl(pokemonSelect["sprites"].front_default)
            } else {
                setImgUrl(pokemonSelect["sprites"].other.dream_world.front_default)
            }
        }





    }, [characterId, pokemonSelect])

    useEffect(() => {

        searchBySubCategory("pokemon-species", characterId, "specie")

        if (specieSearchResult.length === 0 || specieSearchResult === undefined) {
            // de aca puedo sacar generacion, evolution-chain,habitat


        } else if (specieSearchResult.length !== 0 || specieSearchResult !== undefined) {
            // console.log(specieSearchResult)

            setGeneration(specieSearchResult["generation"])
        }


    }, [pokemonSelect])



    const seeAbility = (queHabilidad) => {
        searchBySubCategory("ability", queHabilidad, "ability")
        setShowAbility(true)
    }


    return (
        <>
            <VolverHome />
            {
                pokemonSelect.length !== 0 && pokemonSelect !== undefined ?

                    <Card className='characterCard'>
                        <Card.Header>
                            {mayPrimera(pokemonSelect.name)}

                            {
                                generation.length !== 0 &&
                                <Link to={`/generation/o`} >
                                    {(generation.name).toUpperCase()}
                                </Link>

                            }


                        </Card.Header>


                        <Card.Body className='characterCard__body d-flex-col-center'>
                            <Card.Img className='characterCard__body-img' src={imgUrl} alt={pokemonSelect.name} />

                            <Ability showAbility={showAbility} />

                        </Card.Body>



                        < Card.Footer className='characterCard__footer'>
                            <div className="characterCard__footer-button d-flex-row">
                                Ability:
                                {
                                    pokemonSelect["abilities"].map((cadaAbility, i) => {
                                        return (
                                            <Button key={i} onClick={() => { seeAbility(cadaAbility.ability.name) }}>
                                                <p>{cadaAbility.ability.name}</p>
                                            </Button >
                                        )
                                    })
                                }
                            </div>
                        </Card.Footer>

                    </Card>
                    :
                    <Loading />
            }
        </>
    )
}

export default Character