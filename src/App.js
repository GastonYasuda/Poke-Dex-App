import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/styles.scss";
import Character from './view/Character/Character';
import PokeApiContext from './context/PokeApiContext';
import ItemListContainer from './view/ItemListContainer/ItemListContainer';
import PokeByGeneration from './view/PokeByGeneration/PokeByGeneration';

function App() {
  return (
    <PokeApiContext>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/character/:characterId' element={<Character />} />
          <Route path='/generation/:generationId' element={<PokeByGeneration />} />

        </Routes>

      </BrowserRouter>
    </PokeApiContext>
  )
}

export default App;
