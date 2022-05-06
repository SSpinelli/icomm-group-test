import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Highlights from './components/Highlights';
import myContext from './context';

function App() {
  const [favsItens, setFavsItens] = useState([]);
  const [cartItens, setCartItens] = useState([]);

  const contextValue = {
    favsItens,
    setFavsItens,
    cartItens,
    setCartItens
  }
  return (
    <>
      <myContext.Provider value={ contextValue }>
        <Header />
        <Banner />
        <Highlights />
      </myContext.Provider>
    </>
  );
}

export default App;
