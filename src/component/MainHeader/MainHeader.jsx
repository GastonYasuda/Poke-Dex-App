import React, { useState } from 'react'
import pokeNav from "../../assets/pokeNav.png";
import Buscador from '../../component/Buscador/Buscador';
import { Link } from 'react-router-dom';


const MainHeader = () => {
    const [inputCharacter, setInputCharacter] = useState("")

    return (
        <section className='main__header d-flex-col-center'>

            <div className='main__header-container '>
                <Link to={'/'} className='d-flex-col-center'>
                    <img src={pokeNav} alt="pokeNav" />
                </Link>

                <Buscador inputCharacter={inputCharacter} setInputCharacter={setInputCharacter} />

            </div>

        </section>
    )
}

export default MainHeader
