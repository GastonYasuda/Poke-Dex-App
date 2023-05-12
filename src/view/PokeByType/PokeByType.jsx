import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApiPoke } from '../../context/PokeApiContext'
import VolverBack from '../../component/VolverBack/VolverBack'
import VolverHome from '../../component/VolverHome/VolverHome'
import Loading from '../../component/Loading/Loading'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const PokeByType = () => {

    const { typeSearchResult, searchBySubCategory, pokemonByType, mayPrimera } = useContext(ApiPoke)
    const { typeId } = useParams()

    useEffect(() => {

        if (typeSearchResult.length === 0) {
            console.log("NUEVA BUSQUEDA DE TYPE");
            console.log(typeId);
            searchBySubCategory("type", typeId, "type") // typeSearchResult

        }


    }, [])

    useEffect(() => {
        if (typeSearchResult.length !== 0) {
            console.log(typeSearchResult)

            const { pokemon } = typeSearchResult

            // console.log(pokemon)//hasta aca todo bien

            for (const key in pokemon) {
                // console.log(pokemon[key].pokemon.name)//hasta aca bien

                searchBySubCategory("pokemon", pokemon[key].pokemon.name, "typePokemon")//pokemonByType
            }
        }
    }, [typeSearchResult])

    return (
        <>
            <VolverBack />
            <VolverHome />

            {

                pokemonByType.length !== 0 ?
                    <section className='itemList d-flex-col-center'>
                        <h1>{(typeId).toUpperCase()}</h1>
                        <Row xs={2} sm={2} md={4} lg={5} className="g-4 ">
                            {
                                pokemonByType.map((poke, i) => {
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
                    </section >
                    :
                    <Loading />

            }
        </>
    )
}

export default PokeByType