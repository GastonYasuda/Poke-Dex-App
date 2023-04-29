import React, { Fragment, useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import VolverHome from '../../component/VolverHome/VolverHome'
import { ApiPoke } from '../../context/PokeApiContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Loading from '../../component/Loading/Loading'


const Character = () => {

    const { characterId } = useParams()
    const { mayPrimera, searchResult, searchByCategory, abilityInfo, abilityInfoFlavorTxt, abilityInfoNameTxt, abilityInfoEffectTxt, moves } = useContext(ApiPoke)

    const [pokemonSelect, setPokemonSelect] = useState([])
    const [imgUrl, setImgUrl] = useState("")
    const [showAbility, setShowAbility] = useState(false)


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


    }, [characterId, pokemonSelect])

    useEffect(() => {

        if (searchResult.length !== 0) {

            abilityInfo(searchResult, "flavor_text_entries", "en", "flavor_text")
            abilityInfo(searchResult, "names", "en", "name")
            abilityInfo(searchResult, "effect_entries", "en", "effect")



            if (abilityInfoFlavorTxt !== '') {
                setShowAbility(true)
            }
        }

    }, [searchResult, abilityInfoFlavorTxt, abilityInfoNameTxt, abilityInfoEffectTxt, moves])


    const seeAbility = (queHabilidad) => {
        console.log("muestro habilidad", queHabilidad);

        searchByCategory("ability", queHabilidad)
    }


    return (
        <>
            <VolverHome />
            {
                pokemonSelect.length !== 0 && pokemonSelect !== undefined ?

                    <Card className='characterCard'>
                        <Card.Header>{mayPrimera(pokemonSelect.name)}</Card.Header>


                        <Card.Body className='characterCard__body d-flex-col-center'>
                            <Card.Img className='characterCard__body-img' src={imgUrl} alt={pokemonSelect.name} />
                            {
                                showAbility ?
                                    <>
                                        <Card.Text>Ability: {abilityInfoNameTxt}</Card.Text>
                                        <Card.Text>{abilityInfoFlavorTxt}</Card.Text>
                                        <Card.Text>{abilityInfoEffectTxt}</Card.Text>
                                    </>
                                    : null
                            }
                        </Card.Body>



                        <Card.Footer className='characterCard__footer'>
                            <div className="characterCard__footer-button d-flex-row">
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