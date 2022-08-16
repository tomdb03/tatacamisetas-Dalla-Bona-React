import './scss/style.scss';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import CartDiv from './components/CartDiv';
import { NotificationProvider } from './notification/Notification';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/cart' element={<CartDiv />} />
              <Route path='/' element={<ItemListContainer greeting={'Bienvenido a Tata Camisetas'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado filtrado de'} />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;