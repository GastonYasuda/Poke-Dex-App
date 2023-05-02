import React, { useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'

const Description = ({ specieSearchResult, pokemonSelect }) => {

    const { searchByCategory, habitatSearchResult, mayPrimera } = useContext(ApiPoke)

    const { height, weight, types } = pokemonSelect
    const { habitat } = specieSearchResult



    useEffect(() => {
        if (specieSearchResult.length !== 0) {
            console.log(habitat)

            searchByCategory(habitat.url, "habitat")
        }
    }, [specieSearchResult])

    useEffect(() => {
        console.log(habitatSearchResult);
    }, [habitatSearchResult])

    return (
        <div>
            <h4>Habitat:</h4>
            {mayPrimera(habitatSearchResult.name)}
            
            <h4>Type:</h4>
            {types.map((each, i) => {
                return (
                    <p key={i}>{each.type.name}</p>
                )
            })}

            <h4>Heigth: {height} cm.</h4>
            <h4>Weigth: {weight / 10} kg.</h4>
        </div>
    )
}

export default Description
