import Home from './Components/Home';
import Beers from './Components/Beers';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import apiBeers from './utils/apiBeers'

function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newBeers = await apiBeers.getAllBeers()
      setBeers(newBeers)
    }
    fetchData()
  }, [])

  return (
    <>
    <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/beers' element={ <Beers beers={beers}/> }/>
        <Route path='/random-beer' element={ <RandomBeer/> }/>
        <Route path='/new-beer' element={<NewBeer/>}/>
    </Routes>  
    </>
  );
}

export default App;
