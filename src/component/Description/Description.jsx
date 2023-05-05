import React, { useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import Button from 'react-bootstrap/esm/Button'

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
                <div className='descriptionItem d-flex-row'>
                    <span className='descriptionItem-title'>Habitat:</span>
                    <span className='descriptionItem-item'>
                        <Button className='buttonStyle'>
                            {mayPrimera(habitatSearchResult.name)}
                        </Button>
                    </span>
                </div>
            }
            <div className='descriptionItem d-flex-row'>
                <span className='descriptionItem-title'>Type:</span>
                <span className='descriptionItem-item d-flex-row'>
                    {
                        types.map((each, i) => {
                            return (
                                <Button key={i} className='buttonStyle'>{mayPrimera(each.type.name)}</Button>
                            )
                        })
                    }
                </span>
            </div>
            <div className='descriptionItem d-flex-row'>
                <span className='descriptionItem-title'>Heigth:</span>
                <span className='descriptionItem-item'>{height * 10} cm.</span>
            </div>
            <div className='descriptionItem d-flex-row'>
                <span className='descriptionItem-title'>Weigth:</span>
                <span className='descriptionItem-item'>{weight / 10} kg.</span>
            </div>

        </div>
    )
}

export default Description
