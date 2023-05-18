import React from 'react'
import pokeball from '../../assets/pokeball.png'
import VolverBack from '../VolverBack/VolverBack'
import VolverHome from '../VolverHome/VolverHome'

const RouteError = () => {
    return (
        <>
            <VolverBack />
            <VolverHome />
            <div className='routerError d-flex-col-center'>
                <img src={pokeball} alt="pokeball" />
                <span> The entered POKEMON was not found.<br />Please, try again. </span>
            </div>
        </>
    )
}

export default RouteError
