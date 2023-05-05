import React, { useContext } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import returnArrow from "../../assets/returnArrow.png"


const VolverBack = () => {

    const { setAbilitySearchResult } = useContext(ApiPoke)


    const clearAbility = () => {
        setAbilitySearchResult([])
        window.history.back()
    }

    return (

        <button onClick={() => { clearAbility() }} className='backArrow'>

            <img src={returnArrow} alt="flecha subir" />

        </button>
    )
}

export default VolverBack