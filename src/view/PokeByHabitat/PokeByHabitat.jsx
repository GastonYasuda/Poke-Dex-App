import React, { useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import { Link, useParams } from 'react-router-dom'
import VolverHome from '../../component/VolverHome/VolverHome'
import Loading from '../../component/Loading/Loading'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import VolverBack from '../../component/VolverBack/VolverBack'

const PokeByHabitat = () => {

    const { searchBySubCategory, pokemonByHabitat, habitatDetail, mayPrimera } = useContext(ApiPoke)

    const { habitatId } = useParams()

    useEffect(() => {

        if (habitatDetail.length === 0) {
            searchBySubCategory("pokemon-habitat", habitatId, "habitatDetail") //habitatDetail

        } else {
            const { pokemon_species } = habitatDetail

            for (const key in pokemon_species) {
                searchBySubCategory("pokemon", pokemon_species[key].name, "habitatPokemon") //pokemonByHabitat
            }
        }
    }, [habitatDetail])


    return (
        <>
            <VolverBack />
            <VolverHome />
            {
                pokemonByHabitat.length !== 0 ?
                    <section className='itemList'>
                        <Row xs={1} sm={2} md={4} lg={5} className="g-4 ">
                            <h1>{(habitatDetail.name).toUpperCase()}</h1>

                            {
                                pokemonByHabitat.map((poke, i) => {
                                    return (
                                        <Link to={`/character/${poke.name}`} key={i}>

                                            <Card className='card'>
                                                <Card.Header>
                                                    <Card.Title className='card__title'>{mayPrimera(poke.name)}</Card.Title>
                                                </Card.Header>

                                                <Card.Body>
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

export default PokeByHabitat