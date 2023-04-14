import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { ApiPoke } from '../../context/PokeApiContext';



const Buscador = () => {

    const { setInputCharacter } = useContext(ApiPoke)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        console.log(data.searchValue);
        setInputCharacter(data.searchValue)
    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("searchValue", { required: true })} />

                {/* DESPUES AGREGAR VALIDACIONES DEL INPUT */}

                {errors.searchValue && <span>This field is required</span>}


                < input type="submit" />

            </form>
        </>
    )
}

export default Buscador
