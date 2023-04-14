import React, { useState } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Buscador from '../../component/Buscador/Buscador'

const Home = () => {

    const [searchValue, setSearchValue] = useState("")


    return (
        <>
            <Buscador/>
            <ItemListContainer searchValue={searchValue} />
        </>

    )
}

export default Home