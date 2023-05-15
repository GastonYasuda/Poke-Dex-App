import React, { useContext, useEffect } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'

const Description = ({ specieSearchResult, pokemonSelect }) => {

    const { searchByCategory, habitatDetail, mayPrimera } = useContext(ApiPoke)

    const { height, weight, types } = pokemonSelect
    const { habitat } = specieSearchResult



    useEffect(() => {
        if (specieSearchResult.length !== 0 && habitat !== null) {

            searchByCategory(habitat.url, "habitat") // habitatDetail
        }

    }, [specieSearchResult])


    return (
        <div className='d-flex-col'>
            {
                habitatDetail.length !== 0 &&
                <div className='descriptionItem d-flex-row'>
                    <span className='descriptionItem-title'>Habitat:</span>
                    <span className='descriptionItem-item'>
                        <Link to={`/habitat/${habitatDetail.name}`}>
                            <Button className='buttonStyle'>
                                {mayPrimera(habitatDetail.name)}
                            </Button>
                        </Link>
                    </span>
                </div>
            }
            <div className='descriptionItem d-flex-row'>
                <span className='descriptionItem-title'>Type:</span>
                <span className='descriptionItem-item d-flex-row'>
                    {
                        types.map((each, i) => {
                            return (
                                <Link to={`/type/${each.type.name}`} key={i} >
                                    <Button className='buttonStyle'>{mayPrimera(each.type.name)}</Button>
                                </Link>
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

        </div >
    )
}

export default Description
