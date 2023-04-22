import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { ApiPoke } from '../../context/PokeApiContext';
import { Link } from 'react-router-dom';



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

                <input type="text" onChange={handleChange} />

                <Link to={`/character/${inputCharacter}`} >
                    SEARCH
                </Link>


            </form >
        </>
    )
}

export default Buscador
