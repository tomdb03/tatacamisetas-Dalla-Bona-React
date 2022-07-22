import './scss/style.scss'
import Navbar from './components/Navbar';
// import Counter from './Counter';
import ItemListContainer from './components/ItemListContainer';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
