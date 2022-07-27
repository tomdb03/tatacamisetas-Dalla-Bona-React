import './scss/style.scss'
import { useState } from 'react'
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }

  return (
    <div className="App"> 
      <Navbar />
      <ItemListContainer greeting='Hola comision 34695'/>
      <Counter stock={10} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
