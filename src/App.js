import './scss/style.scss'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Counter from './components/Counter';

function App() {
  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }

  return (
    <div className="App"> 
      <Navbar />
      <ItemListContainer greeting='Catálogo'/>
      <Counter stock={10} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;