import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { ApiPoke } from '../../context/PokeApiContext'


const VolverHome = () => {

    const { setAbilitySearchResult } = useContext(ApiPoke)


    const clearAbility = () => {
        setAbilitySearchResult([])
        window.history.back()
    }

    return (

        <Button onClick={() => { clearAbility() }}>
            VOLVER
        </Button>
    )
}

export default VolverHome