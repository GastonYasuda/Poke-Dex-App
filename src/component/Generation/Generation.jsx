import React, { useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import { Link } from 'react-router-dom'

const Generation = () => {

    const { searchByCategory } = useContext(ApiPoke)


    useEffect(() => {

    }, [])

    return (
        <Link to={`/generation/oooo`}>
            dddd
            {/* {(generation.name)} */}

        </Link>

    )
}

export default Generation
