import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiPoke } from '../../context/PokeApiContext'

const Ability = () => {

    const { abilityId } = useParams()

    const { searchResult, searchByCategory } = useContext(ApiPoke)

    const [titleName, setTitleName] = useState("")
    const [flavor, setFlavor] = useState("")



    const language = (key, lang, tras) => {
        const texto = searchResult[key]
        const resultado = texto.find(txt => txt.language.name === lang)

        if (tras === "flavor_text") {
            setFlavor(resultado[tras])
        } else if (tras === "name") {
            setTitleName(resultado[tras])

        }
    }


    useEffect(() => {
        console.log(abilityId);

        searchByCategory("ability", abilityId)

        if (searchResult.length !== 0) {

            language("names", "es", "name")

            language("flavor_text_entries", "en", "flavor_text")

        }

    }, [])



    return (
        <div>
            <h1>{abilityId}</h1>
            <h5>Espanol: {titleName}</h5>
            <h5>FLAVOR: {flavor}</h5>
        </div>
    )
}

export default Ability
