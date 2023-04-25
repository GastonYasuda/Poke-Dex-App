import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiPoke } from '../../context/PokeApiContext'
import VolverHome from '../../component/VolverHome/VolverHome'

const Ability = () => {

    const { abilityId } = useParams()

    const { searchResult, searchByCategory, pokemon } = useContext(ApiPoke)

    const [titleName, setTitleName] = useState("")
    const [flavor, setFlavor] = useState("")
    const [move, setMove] = useState("")




    const language = (collection, key, lang, tras) => {
        const texto = collection[key]
        console.log(texto);

        const result = texto.find(txt => txt.language.name === lang)

        if (tras === "flavor_text") {
            setFlavor(result[tras])

        } else if (tras === "name") {
            setTitleName(result[tras])

        }

    }

    // const abiMove = (collection, key, tras) => {
    //     const group = collection[key]
    //     const result = group.find(e => e === tras)
    //     setMove(result)
    //     console.log(result);
    // }


    useEffect(() => {
        // console.log(pokemon);

        // if (searchResult.length === 0) {
        //     searchByCategory("ability", abilityId)
        // }


        if (searchResult !== undefined && searchResult.length !== 0) {

            language(searchResult, "names", "es", "name")

            language(searchResult, "flavor_text_entries", "en", "flavor_text")

            // abiMove(pokemon, "moves", "move")
        }


        //     console.log(searchResult);
        //     // abiMove(searchResult, "abilities", "ability")
        // }

    }, [searchResult])



    return (
        <div>
            <VolverHome />
            <h1>{abilityId}</h1>
            <h5>Espanol: {titleName}</h5>
            <h5>FLAVOR: {flavor}</h5>
            {/* {
                pokemon.moves.map(move => {
                    return (
                        <h5>MOVES:{move.name}</h5>
                    )
                })
            } */}

        </div>
    )
}

export default Ability
