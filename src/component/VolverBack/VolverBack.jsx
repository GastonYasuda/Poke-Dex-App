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

        <button onClick={() => { clearAbility() }} className='backArrow'>

            <img src={returnArrow} alt="flecha subir" />

        </button>
    )
}

export default VolverBack