import React from 'react'
import pokeball from '../../assets/pokeball.png'

const RouteError = () => {
    return (
        <div className='routerError d-flex-col-center'>
            <img src={pokeball} alt="fdsf" />
            <span> NO SE A ENCONTRADO EL POKEMON INGRESADO, <br />INTENTE DE NUEVO</span>
        </div>
    )
}

export default RouteError
