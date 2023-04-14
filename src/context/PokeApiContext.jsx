import React, { createContext, useState, useEffect } from 'react'

export const ApiPoke = createContext()

const PokeApiContext = ({ children }) => {

    const [pokemon, setPokemon] = useState([])


    useEffect(() => {
        pokemonCharacters()
    }, [])
    

    const pokemonCharacters = () => {

        fetch('https://pokeapi.co/api/v2/pokemon/?limit=1300')
            .then(response => response.json())
            .then(json => {
                setPokemon(json.results)
            })

            .catch((error) => {
                console.log(error);
            })
    }




    function mayPrimera(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    return (
        <ApiPoke.Provider value={{ pokemon,   mayPrimera }}>
            {children}
        </ApiPoke.Provider>
    )
}

export default PokeApiContext