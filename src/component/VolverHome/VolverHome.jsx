import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ApiPoke } from '../../context/PokeApiContext';


const VolverHome = () => {

    const { setEvolutionPokemonResult } = useContext(ApiPoke)



    useEffect(() => {

    }, [])


    return (

        <Link to={'/'} >
            <Button>HOME</Button>
        </Link>
    )
}

export default VolverHome