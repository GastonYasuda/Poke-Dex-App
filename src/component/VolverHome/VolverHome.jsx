import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'


const VolverHome = () => {
    return (

        <Button colorScheme='red' variant='solid'>
            <Link to={'/'} >VOLVER</Link>
        </Button>
    )
}

export default VolverHome