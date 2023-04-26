import React, { Fragment, useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import VolverHome from '../../component/VolverHome/VolverHome'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { ApiPoke } from '../../context/PokeApiContext'

const Character = () => {

    const { characterId } = useParams()
    const { searchResult, searchByCategory, abilityInfo, abilityInfoFlavorTxt, abilityInfoNameTxt, abilityInfoEffectTxt } = useContext(ApiPoke)

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



    }, [characterId, pokemonSelect])




    const showAbility = (queHabilidad) => {
        console.log("muestro habilidad", queHabilidad);

        searchByCategory("ability", queHabilidad)

        if (searchResult !== undefined && Object.keys(searchResult).length !== 0) {

            console.log(Object.keys(searchResult).length);
            console.log(searchResult);

            abilityInfo(searchResult, "flavor_text_entries", "en", "flavor_text")
            abilityInfo(searchResult, "names", "en", "name")
            abilityInfo(searchResult, "effect_entries", "en", "effect")

        }

    }




    return (
        <>
            <VolverHome />
            {
                pokemonSelect.length !== 0 && pokemonSelect !== undefined ?
                    <>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={imgUrl}
                                    alt={pokemonSelect.name}
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Text>{pokemonSelect.id}</Text>
                                    <Heading size='md'>{pokemonSelect.name}</Heading>
                                    <Text>Weight: {pokemonSelect.weight}Kg.</Text>
                                    <Text>{abilityInfoNameTxt}</Text>
                                    <Text>{abilityInfoFlavorTxt}</Text>
                                    <Text>{abilityInfoEffectTxt}</Text>

                                </Stack>

                            </CardBody>

                            <Divider />

                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    {
                                        pokemonSelect["abilities"].map((cadaAbility, i) => {
                                            return (
                                                <Fragment key={i}>
                                                    <Button colorScheme='blue' key={i} onClick={() => { showAbility(cadaAbility.ability.name) }}>
                                                        {/* <Link to={`/ability/${cadaAbility.ability.name}`} key={i}> */}
                                                        <p>{cadaAbility.ability.name}</p>
                                                        {/* </Link> */}
                                                    </Button>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </>
                    :
                    <h1>ERROR <br /> PROXIMAMENTE UN LOADING</h1>
            }
        </>
    )
}

export default Character