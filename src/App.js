import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Detail from './pages/Detail';
import Error from './pages/Error';
import ProductList from './pages/ProductList'
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App ">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ProductList />} />
            <Route path='/item/:id' element={<Detail />} />
            <Route path='*' element={<Error />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
