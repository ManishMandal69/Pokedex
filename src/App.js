import './App.css';
// import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailsOfPokemon from './pages/DetailsOfPokemon';
import Bookmark from './pages/Bookmark';
import Header from './components/Header';
import PokeCard from './components/PokeCard';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/pokemon/:id' element={<DetailsOfPokemon/>}/>
        <Route exact path='/bookmark' element={<Bookmark/>}/>
        {/* <Route exact path='/pokecard' element={<PokeCard/>}/> */}
      </Routes>
    </Router>
  
    </>
  );
}

export default App;
