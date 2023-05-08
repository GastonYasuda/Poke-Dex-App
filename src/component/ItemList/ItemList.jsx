import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ApiPoke } from '../../context/PokeApiContext';


const ItemList = ({ pokemon }) => {

    const { mayPrimera } = useContext(ApiPoke)

    return (
        <section className='itemList'>
            <Row xs={1} sm={2} md={3} lg={5} className="g-4 ">

                {
                    pokemon.map((unPokemon, i) => (
                        <Link to={`/character/${unPokemon.name}`} key={i}>

                            <Col>
                                <Card className='card'>
                                    <Card.Header>
                                        <span className='card__title'>{mayPrimera(unPokemon.name)}</span>
                                    </Card.Header>

                                    <Card.Body className='d-flex-col card__body'>
                                        {
                                            unPokemon["sprites"].other.dream_world.front_default !== null ?
                                                <Card.Img className='cardImg' src={unPokemon["sprites"].other.dream_world.front_default} alt={unPokemon.name} />
                                                :
                                                <Card.Img className='cardImg' src={unPokemon["sprites"].front_default} alt={unPokemon.name} />
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Link>
                    ))}
            </Row>
        </section>
    )
}

export default ItemList
