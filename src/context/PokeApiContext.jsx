import React, { createContext, useState, useEffect } from 'react'
import { json } from 'react-router-dom'

export const ApiPoke = createContext()

const PokeApiContext = ({ children }) => {

    const [pokemon, setPokemon] = useState([])


    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50`) //poner 1300

            .then((response) => response.json())
            .then((json) => {
                const misPokemones = (json.results)
                misPokemones.map((miPoke) => {
                    fetch(miPoke.url)
                        .then((response) => response.json())
                        .then((json) => {
                            // console.log(json)
                            setPokemon(pokemon => [...pokemon, json])
                        })
                })
            })
    }, [])


    const [searchResult, setSearchResult] = useState([])

    const searchByCategory = (CategoryId, SubCategory) => {

        setSearchResult([])

        fetch(`https://pokeapi.co/api/v2/${CategoryId}/${SubCategory}?limit=400`) //poner limite 400
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);
                setSearchResult(json)
            })

    }


    const [abilityInfoFlavorTxt, setAbilityInfoFlavorTxt] = useState("")
    const [abilityInfoNameTxt, setAbilityInfoNameTxt] = useState("")
    const [abilityInfoEffectTxt, setAbilityInfoEffectTxt] = useState("")
    const [moves, setMoves] = useState("")




    const abilityInfo = (collection, key, lang, tras) => {


        const texto = collection[key]

        const result = texto.find(txt => txt.language.name === lang)

        if (tras === "flavor_text") {

            setAbilityInfoFlavorTxt(result[tras])

        } else if (tras === "name") {

            setAbilityInfoNameTxt(result[tras])

        } else if (tras === "effect") {

            setAbilityInfoEffectTxt(result[tras])
        } else if (tras === "moveName") {
            setMoves(result[tras])
        }
    }


    function mayPrimera(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    return (
        <ApiPoke.Provider value={{ moves, setSearchResult, setAbilityInfoFlavorTxt, setAbilityInfoNameTxt, setAbilityInfoEffectTxt, abilityInfoFlavorTxt, abilityInfoNameTxt, abilityInfoEffectTxt, abilityInfo, searchResult, searchByCategory, pokemon, mayPrimera }}>
            {children}
        </ApiPoke.Provider>
    )
}

export default PokeApiContext