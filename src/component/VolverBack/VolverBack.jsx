import React, { useContext } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import returnArrow from "../../assets/returnArrow.png"


const VolverBack = () => {

    const { setAbilitySearchResult, setEvolutionPokemonResult } = useContext(ApiPoke)


    const clearAbility = () => {
        setAbilitySearchResult([])
        setEvolutionPokemonResult([])
        window.history.back()
    }

    return (

        <div onClick={() => { clearAbility() }} className='backArrow'>

            <img src={returnArrow} alt="chau" />

        </div>
    )
}

export default VolverBack