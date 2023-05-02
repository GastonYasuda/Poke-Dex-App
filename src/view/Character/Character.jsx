import React, { Fragment, useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import VolverBack from '../../component/VolverBack/VolverBack'
import { ApiPoke } from '../../context/PokeApiContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Loading from '../../component/Loading/Loading'
import Ability from '../../component/Ability/Ability'
import Generation from '../../component/Generation/Generation'
import EvolutionChain from '../../component/EvolutionChain/EvolutionChain'
import Description from '../../component/Description/Description'


const Character = () => {

    const { characterId } = useParams()
    const { pokemonSelect, mayPrimera, searchBySubCategory, specieSearchResult } = useContext(ApiPoke)

    const [imgUrl, setImgUrl] = useState("")
    const [showAbility, setShowAbility] = useState(false)


    useEffect(() => {
        searchBySubCategory("pokemon", characterId, "pokemon")

    }, [])

    useEffect(() => {
        if (pokemonSelect.length !== 0) {

            if (pokemonSelect["sprites"].other.dream_world.front_default === null) {
                setImgUrl(pokemonSelect["sprites"].front_default)

            } else {
                setImgUrl(pokemonSelect["sprites"].other.dream_world.front_default)

            }
        }
    }, [pokemonSelect, characterId])


    const seeAbility = (queHabilidad) => {
        searchBySubCategory("ability", queHabilidad, "ability")
        setShowAbility(true)
    }


    return (
        <>
            <VolverBack />
            {
                pokemonSelect.length !== 0 && pokemonSelect !== undefined ?

                    <Card className='characterCard'>
                        <Card.Header>

                            {mayPrimera(pokemonSelect.name)}
                            <Generation characterId={characterId} specieSearchResult={specieSearchResult} />

                        </Card.Header>


                        <Card.Body className='characterCard__body d-flex-col-center'>
                            <Card.Img className='characterCard__body-img' src={imgUrl} alt={pokemonSelect.name} />

                            <Description specieSearchResult={specieSearchResult} pokemonSelect={pokemonSelect} />

                            <EvolutionChain specieSearchResult={specieSearchResult} />

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