import React, { useContext } from 'react'
import { ApiPoke } from '../../context/PokeApiContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa';



const Buscador = ({ inputCharacter, setInputCharacter }) => {

    const { } = useContext(ApiPoke)



    // const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const handleChange = (e) => {
        console.log(e.target.value);
        setInputCharacter(e.target.value)
    }

    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Search by Name or Id"
                onChange={handleChange}
            />
            <Button variant="outline-secondary" id="button-addon2" >
                <Link to={`/character/${inputCharacter}`} >
                    <FaSearch />
                </Link>
            </Button>
        </InputGroup>
    )
}

export default Buscador
