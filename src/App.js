import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import ProductsContainer from './components/firebase/ProductsContainer';
import Checkout from './components/cart/Checkout';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'FutStar- Tu tienda de estrellas'} />} />
            <Route path='/posicion/:posicion' element={<ItemListContainer greeting={'FutStar- Tu tienda de estrellas'} />} />
            <Route path='/shop/:playerId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart/checkout' element={<Checkout/>} />
          </Routes>
          <Footer />
        </BrowserRouter> 
      </CartProvider>
    </>
  );
}

export default App;
