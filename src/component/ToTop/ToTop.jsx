import React from 'react'
import upArrow from "../../assets/upArrow.png"


const ToTop = () => {

    const toTop = () => {
        window.scrollTo(0, 0)
    }

    return (
            <div className="upArrow" onClick={toTop}>
                <img src={upArrow} alt="pokeNav" />
            </div>
    )
}

export default ToTop
