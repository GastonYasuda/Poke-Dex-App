import React, { createContext, useState, useEffect } from 'react'

export const ApiPoke = createContext()

const PokeApiContext = ({ children }) => {

    const [pokemon, setPokemon] = useState([])
    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50`) //poner 1300

            .then((response) => response.json())
            .then((json) => {
                const misPokemones = (json.results)
                misPokemones.forEach((miPoke) => {
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

    const [generationSearchResult, setGenerationSearchResult] = useState([]) //name, main_region, pokemon-species 
    const [byGenerationSearchResult, setByGenerationSearchResult] = useState([])
    const [evolutionSearchResult, setEvolutionSearchResult] = useState([])
    const [habitatDetail, setHabitatDetail] = useState([])

    const searchByCategory = (url, state) => {

        setGenerationSearchResult([])
        setHabitatDetail([])

        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (state === "generationResult") {
                    setGenerationSearchResult(json)

                } else if (state === "byGeneration") {
                    setByGenerationSearchResult(json.results)

                } else if (state === "evolution") {
                    setEvolutionSearchResult(json)

                } else if (state === "habitat") {
                    setHabitatDetail(json)

                }
            })
    }



    //--------------------------------------------------------------SEARCH SUBCATEGORY

    const [pokemonSelect, setPokemonSelect] = useState([])
    const [pokemonByGeneration, setPokemonByGeneration] = useState([])// traigo las imagenes de los poke por generation
    const [abilitySearchResult, setAbilitySearchResult] = useState([])
    const [specieSearchResult, setSpecieSearchResult] = useState([]) // entro a generation, evolution_chain, flavor_text_entries(descripcion)
    const [pokemonByHabitat, setPokemonByHabitat] = useState([])
    const [typeSearchResult, setTypeSearchResult] = useState([])
    const [pokemonByType, setPokemonByType] = useState([])
    const [evolutionPokemonResult, setEvolutionPokemonResult] = useState([])


    const searchBySubCategory = (CategoryId, SubCategory, state) => {
        setAbilitySearchResult([])
        setPokemonByGeneration([])
        setPokemonByHabitat([])
        setTypeSearchResult([])
        setPokemonByType([])


        fetch(`https://pokeapi.co/api/v2/${CategoryId}/${SubCategory}?limit=400`) //poner limite 400
            .then((response) => response.json())
            .then((json) => {

                if (state === "pokemon") {
                    setPokemonSelect(json)

                } else if (state === "ability") {
                    setAbilitySearchResult(json)

                } else if (state === "specie") {
                    setSpecieSearchResult(json)

                } else if (state === "generationPokemon") {
                    setPokemonByGeneration(pokemonByGeneration => [...pokemonByGeneration, json])

                } else if (state === "generationID") {
                    setGenerationSearchResult(json)

                } else if (state === "habitatDetail") {
                    setHabitatDetail(json)
                }
                else if (state === "habitatPokemon") {
                    setPokemonByHabitat(pokemonByHabitat => [...pokemonByHabitat, json])

                } else if (state === "type") {
                    setTypeSearchResult(json)

                } else if (state === "typePokemon") {
                    setPokemonByType(pokemonByType => [...pokemonByType, json])

                } else if (state === "evolutionPokemon") {
                    setEvolutionPokemonResult(evolutionPokemonResult => [...evolutionPokemonResult, json])
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

        <ApiPoke.Provider value={{ setEvolutionPokemonResult, evolutionPokemonResult, pokemonByType, typeSearchResult, habitatDetail, byGenerationSearchResult, pokemonByHabitat, evolutionSearchResult, pokemonByGeneration, searchByCategory, generationSearchResult, pokemonSelect, specieSearchResult, setAbilitySearchResult, setAbilityInfoFlavorTxt, setAbilityInfoNameTxt, setAbilityInfoEffectTxt, abilityInfoFlavorTxt, abilityInfoNameTxt, abilityInfoEffectTxt, abilityInfo, abilitySearchResult, searchBySubCategory, pokemon, mayPrimera }}>

            {children}
        </ApiPoke.Provider>
    )
}

export default PokeApiContext