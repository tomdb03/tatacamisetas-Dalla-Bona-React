import './scss/style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartDiv from './components/CartDiv';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './notification/Notification';

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenido a Tata Camisetas'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado filtrado de'} />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartDiv />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1 style={{marginTop: 75}}>404 NOT FOUND</h1>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;