import React from 'react'
import upArrow from "../../assets/upArrow.png"
import pokeNav from "../../assets/pokeNav.png";


const ToTop = () => {
    return (
        <>
            <button className="upArrow">
                <a href="#top">
                    <img src={upArrow} alt="flecha subir" />
                </a>
                <img src={pokeNav} alt="pokeNav" />
            </button>
            <img src={pokeNav} alt="pokeNav" />
        </>

    )
}

export default ToTop
