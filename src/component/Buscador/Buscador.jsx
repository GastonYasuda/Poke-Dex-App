import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import BuscadorSearch from '../BuscadorSearch/BuscadorSearch';
import Button from 'react-bootstrap/esm/Button';

const Buscador = () => {


    const [searchPoke, setSearchPoke] = useState("")



    const handleChange = (e) => {
        setSearchPoke((e.target.value).toLowerCase())
    }

    return (
        <>
            <InputGroup className="mb-3" >
                <Form.Control
                    placeholder="Search Pokemon by Name"
                    onChange={handleChange}
                />

                <Button variant="outline-secondary" id="button-addon2" >
                    <BuscadorSearch searchPoke={searchPoke} />
                </Button>
            </InputGroup>

        </>
    )
}

export default Buscador
