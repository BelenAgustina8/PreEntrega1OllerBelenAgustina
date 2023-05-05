import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContaier from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext, CartProvider } from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element= {<ItemListContaier />}/>
            <Route path='/category/:categoryId' element= {<ItemListContaier />}/>
            <Route path='/item/:itemId' element= {<ItemDetailContainer />}/>
            <Route path='/cart' element= {<Cart />}/>
            <Route path='/checkout' element= {<Checkout />}/>
            <Route path='*' element= {<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
