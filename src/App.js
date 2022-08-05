import './scss/style.scss'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App"> 
      <Navbar />
      <ItemListContainer greeting='Catálogo'/>
    </div>
  );
}

export default App;