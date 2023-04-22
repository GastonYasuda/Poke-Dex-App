import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Character from './view/Character/Character';
import PokeApiContext from './context/PokeApiContext';
import Ability from './view/Ability/Ability';
import ItemListContainer from './view/ItemListContainer/ItemListContainer';

function App() {
  return (
    <PokeApiContext>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/character/:characterId' element={<Character />} />
          <Route path='/ability/:abilityId' element={<Ability />} />




        </Routes>



      </BrowserRouter>
    </PokeApiContext>

  )
}

export default App;
