import React, { useContext, useEffect, useState } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import Swal from 'sweetalert2'


const BuscadorSearch = ({ searchPoke }) => {

    const { pokemon } = useContext(ApiPoke)
    const [inputCharacter, setInputCharacter] = useState("")


    useEffect(() => {
        console.log(pokemon);
        setInputCharacter("")

        const found = pokemon.find(search => search.name === searchPoke)

        if (found !== undefined) {
            console.log(found);
            setInputCharacter(found.name)
        }

    }, [pokemon, searchPoke])


    const errorchan = () => {

        if (inputCharacter === undefined || inputCharacter === '') {
            Swal.fire({
                title: 'Error!',
                text: 'No matching Pokémon was found.',
                icon: 'error',
                confirmButtonText: 'Ok!'
            })
        }
    }


    return (
        < Link to={`/character/${inputCharacter}`} onClick={errorchan}>
            <FaSearch />
        </Link >

    )
}

export default BuscadorSearch
