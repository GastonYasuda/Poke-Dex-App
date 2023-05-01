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
                        .catch((error) => console.log(error))
                })
            })
    }, [])


    //--------------------------------------------------------------SEARCH CATEGORY

    const [generation, setGeneration] = useState([])

    const searchByCategory = (url, state) => {

        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (state === "generation") {
                    setGeneration(json)
                }
            })

    }



    //--------------------------------------------------------------SEARCH SUBCATEGORY

    const [pokemonSelect, setPokemonSelect] = useState([])
    const [abilitySearchResult, setAbilitySearchResult] = useState([])
    const [specieSearchResult, setSpecieSearchResult] = useState([])


    const searchBySubCategory = (CategoryId, SubCategory, state) => {

        setAbilitySearchResult([])

        fetch(`https://pokeapi.co/api/v2/${CategoryId}/${SubCategory}?limit=400`) //poner limite 400
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);

                if (state === "pokemon") {
                    setPokemonSelect(json)

                } else if (state === "ability") {
                    setAbilitySearchResult(json)

                } else if (state === "specie") {
                    setSpecieSearchResult(json)
                }
            })
    }


    const [abilityInfoFlavorTxt, setAbilityInfoFlavorTxt] = useState("")
    const [abilityInfoNameTxt, setAbilityInfoNameTxt] = useState("")
    const [abilityInfoEffectTxt, setAbilityInfoEffectTxt] = useState("")


    const abilityInfo = (collection, key, lang, tras) => {

        const texto = collection[key]

        const result = texto.find(txt => txt.language.name === lang)

        if (tras === "flavor_text") {

            setAbilityInfoFlavorTxt(result[tras])

        } else if (tras === "name") {

            setAbilityInfoNameTxt(result[tras])

        } else if (tras === "effect") {

            setAbilityInfoEffectTxt(result[tras])
        }
    }


    function mayPrimera(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    return (

        <ApiPoke.Provider value={{ searchByCategory, generation, pokemonSelect, specieSearchResult, setAbilitySearchResult, setAbilityInfoFlavorTxt, setAbilityInfoNameTxt, setAbilityInfoEffectTxt, abilityInfoFlavorTxt, abilityInfoNameTxt, abilityInfoEffectTxt, abilityInfo, abilitySearchResult, searchBySubCategory, pokemon, mayPrimera }}>

            {children}
        </ApiPoke.Provider>
    )
}

export default PokeApiContext