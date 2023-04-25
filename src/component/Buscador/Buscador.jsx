import React, { useContext } from 'react'
import { ApiPoke } from '../../context/PokeApiContext';
import { Link } from 'react-router-dom';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'





const Buscador = ({ inputCharacter, setInputCharacter }) => {

    const { } = useContext(ApiPoke)



    // const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const handleChange = (e) => {
        console.log(e.target.value);
        setInputCharacter(e.target.value)
    }



    return (
        <>
            <form >
                <InputGroup>
                    <InputRightElement>


                        <Button >
                            <Link to={`/character/${inputCharacter}`} >
                                <SearchIcon color='gray.300' />
                            </Link>
                        </Button>

                    </InputRightElement>


                    <Input
                        type="text"
                        onChange={handleChange}
                    />
                </InputGroup>





            </form >
        </>
    )
}

export default Buscador
