import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Character from './view/Character/Character';
import Home from './view/Home/Home';
import PokeApiContext from './context/PokeApiContext';

function App() {
  return (
    <PokeApiContext>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character/:characterId' element={<Character />} />
        </Routes>



      </BrowserRouter>
    </PokeApiContext>

  )
}

export default App;
