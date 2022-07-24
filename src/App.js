import './scss/style.scss'
import Navbar from './components/Navbar';
// import Counter from './components/Counter';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <Counter /> */}
      <ItemListContainer greeting='Acá iría el catálogo'/>
    </div>
  );
}

export default App;
