import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { ApiPoke } from '../../context/PokeApiContext'


const VolverHome = () => {

    const { setSearchResult} = useContext(ApiPoke)


    const clearAbility = () => {
        setSearchResult([])

        console.log("TENGO QUE BORRAR");
        window.history.back()
    }

    return (

        <Button onClick={() => { clearAbility() }}>
            VOLVER
        </Button>
    )
}

export default VolverHome