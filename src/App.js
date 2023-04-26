import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Character from './view/Character/Character';
import PokeApiContext from './context/PokeApiContext';
import ItemListContainer from './view/ItemListContainer/ItemListContainer';

function App() {
  return (
    <PokeApiContext>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/character/:characterId' element={<Character />} />




        </Routes>



      </BrowserRouter>
    </PokeApiContext>

  )
}

export default App;
