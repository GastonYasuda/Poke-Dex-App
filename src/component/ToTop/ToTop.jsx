import React from 'react'
import upArrow from "../../assets/upArrow.png"

const ToTop = () => {
    return (
        <button className="upArrow">
            <a href="#top">
                <img src={upArrow} alt="flecha subir" />
            </a>
        </button>
    )
}

export default ToTop
