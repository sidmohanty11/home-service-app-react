import React, {useState} from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import HomeServices from './components/HomeServices/HomeServices';
import Header from './components/Layout/Header';
import CartProvider from './store/CartProvider';

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCart = () => {
    setCartShow(true);
  }

  const hideCart = () => {
    setCartShow(false);
  }

  return (
    <CartProvider>
    <div className="App">
      {cartShow && <Cart onClose={hideCart}/>}
      <Header onShowCart={showCart} onHideCart={hideCart} />
      <main>
        <HomeServices />
      </main>
      </div>
    </CartProvider>
  );
}

export default App;
