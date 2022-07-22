import './scss/style.scss'
import Navbar from './components/Navbar';
// import Counter from './Counter';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <Counter /> */}
      <ItemListContainer greeting='Hola comision 34695'/>
    </div>
  );
}

export default App;
