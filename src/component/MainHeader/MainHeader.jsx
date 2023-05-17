import React from 'react'
import pokeNav from "../../assets/pokeNav.png";
import Buscador from '../../component/Buscador/Buscador';
import { Link } from 'react-router-dom';


const MainHeader = () => {


    return (
        <section className='header'>

            <div className='header__container '>
                <Link to={'/'} className=' d-flex-col-center'>
                    <img src={pokeNav} alt="pokeNav" />
                </Link>

                <Buscador />

            </div>

        </section>
    )
}

export default MainHeader
