import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, SimpleGrid, Heading, Text, Image } from '@chakra-ui/react'



const ItemList = ({ pokemon }) => {


    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(145px, 1fr))'>
            {
                pokemon.map((unPokemon, i) => {
                    return (
                        <Card key={i}>
                            <Link to={`/character/${unPokemon.name}`}>

                                <CardHeader>
                                    <Heading size='sd'> {unPokemon.name}</Heading>
                                    <Text>Id: {unPokemon.id}</Text>
                                </CardHeader>

                                {
                                    unPokemon["sprites"].other.dream_world.front_default !== null ?
                                        <Image
                                            objectFit='cover'
                                            src={unPokemon["sprites"].other.dream_world.front_default} alt={unPokemon.name}
                                        />
                                        :
                                        <Image
                                            objectFit='cover'
                                            src={unPokemon["sprites"].front_default} alt={unPokemon.name}
                                        />
                                }
                            </Link>
                        </Card>
                    )
                })
            }

        </SimpleGrid>

    )
}

export default ItemList
