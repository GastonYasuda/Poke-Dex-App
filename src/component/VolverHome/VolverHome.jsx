import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { ApiPoke } from '../../context/PokeApiContext'


const VolverHome = () => {

    const { setAbilityInfoFlavorTxt, setAbilityInfoNameTxt, setAbilityInfoEffectTxt } = useContext(ApiPoke)


    const clearAbility = () => {
        window.history.back()

        setAbilityInfoFlavorTxt()
        setAbilityInfoEffectTxt()
        setAbilityInfoNameTxt()
    }

    return (

        <Button colorScheme='red' variant='solid' onClick={() => { clearAbility() }}>
            VOLVER
        </Button>
    )
}

export default VolverHome