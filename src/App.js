import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/styles.scss";
import Character from './view/Character/Character';
import PokeApiContext from './context/PokeApiContext';
import ItemListContainer from './view/ItemListContainer/ItemListContainer';
import PokeByGeneration from './view/PokeByGeneration/PokeByGeneration';
import PokeByHabitat from './view/PokeByHabitat/PokeByHabitat';
import PokeByType from './view/PokeByType/PokeByType';
import ToTop from './component/ToTop/ToTop';
import MainHeader from './component/MainHeader/MainHeader';

function App() {
  return (
    <PokeApiContext>
      <BrowserRouter>
      
        <MainHeader />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/character/:characterId' element={<Character />} />
          <Route path='/generation/:generationId' element={<PokeByGeneration />} />
          <Route path='/habitat/:habitatId' element={<PokeByHabitat />} />
          <Route path='/type/:typeId' element={<PokeByType />} />


        </Routes>

        <ToTop />

      </BrowserRouter>
    </PokeApiContext>
  )
}

export default App;
