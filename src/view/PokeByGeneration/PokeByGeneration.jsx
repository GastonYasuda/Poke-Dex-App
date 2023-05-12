import React, { Fragment, useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import Loading from '../../component/Loading/Loading'
import { Link, useParams } from 'react-router-dom'
import VolverHome from '../../component/VolverHome/VolverHome'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import VolverBack from '../../component/VolverBack/VolverBack'

const PokeByGeneration = () => {

    const { generationSearchResult, pokemonByGeneration, searchBySubCategory, mayPrimera } = useContext(ApiPoke)
    const { generationId } = useParams()

    useEffect(() => {
        if (generationSearchResult.length === 0) {
            searchBySubCategory("generation", generationId, "generationID")//generationSearchResult
        }

        if (generationSearchResult.length !== 0) {
            const { pokemon_species } = generationSearchResult

            for (const key in pokemon_species) {
                searchBySubCategory("pokemon", pokemon_species[key].name, "generationPokemon") //pokemonByGeneration
            }
        }

    }, [generationSearchResult])

    return (
        <>
            <VolverBack />
            <VolverHome />

            {
                generationSearchResult.length !== 0
                    ?
                    <section className='itemList d-flex-col-center'>
                        <h1>{(generationSearchResult.name).toUpperCase()}</h1>
                        <p>Main region: {mayPrimera(generationSearchResult.main_region.name)}</p>
                        <Row xs={2} sm={2} md={4} lg={5} className="g-4 ">

                            {
                                pokemonByGeneration.map((poke, i) => {
                                    return (
                                        <Link to={`/character/${poke.name}`} key={i}>

                                            <Card className='card'>
                                                <Card.Header>
                                                    <Card.Title className='card__title'>{mayPrimera(poke.name)}</Card.Title>
                                                </Card.Header>
                                                <Card.Body className='d-flex-col card__body'>
                                                    {

                                                        poke["sprites"].other.dream_world.front_default !== null ?
                                                            <Card.Img className='cardImg' src={poke["sprites"].other.dream_world.front_default} alt={poke.name} />
                                                            :
                                                            <Card.Img className='cardImg' src={poke["sprites"].front_default} alt={poke.name} />
                                                    }
                                                </Card.Body>
                                            </Card>


                                        </Link>
                                    )
                                })
                            }

                        </Row>
                    </section>
                    :
                    <Loading />
            }
        </>
    )
}

export default PokeByGeneration
