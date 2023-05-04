import React, { useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'

const Description = ({ specieSearchResult, pokemonSelect }) => {

    const { searchByCategory, habitatSearchResult, mayPrimera } = useContext(ApiPoke)

    const { height, weight, types } = pokemonSelect
    const { habitat } = specieSearchResult



    useEffect(() => {
        if (specieSearchResult.length !== 0 && habitat !== null) {
            console.log(habitat)

            searchByCategory(habitat.url, "habitat")
        }
    }, [specieSearchResult])


    return (
        <div>
            {
                habitatSearchResult.length !== 0 &&
                <>
                    <h4>Habitat:</h4>
                    {mayPrimera(habitatSearchResult.name)}
                </>
            }

            <h4>Type:</h4>
            {types.map((each, i) => {
                return (
                    <p key={i}>{mayPrimera(each.type.name)}</p>
                )
            })}

            <h4>Heigth: {height} cm.</h4>
            <h4>Weigth: {weight / 10} kg.</h4>
        </div>
    )
}

export default Description
