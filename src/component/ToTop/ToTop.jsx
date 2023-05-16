import React from 'react'
import upArrow from "../../assets/upArrow.png"
import pokeNav from "../../assets/pokeNav.png";


const ToTop = () => {
    return (
        <>
            <button className="upArrow">
                <a href="#top">
                </a>
                <img src={pokeNav} alt="pokeNav" />
            </button>
            <img src={upArrow} alt="flecha subir" />
        </>

    )
}

export default ToTop
