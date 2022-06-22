import './App.css';
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Detail from './pages/Detail';
import Error from './pages/Error';
import ProductList from './pages/ProductList'
import Cart from './pages/Cart';
import ThemeProvider from './context/ThemeContext'
import {CartProvider} from './context/CartContext'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App ">
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path ='/' element={<Home/>}/>
              <Route path ='/category/:category' element={<ProductList/>}/>
              <Route path ='/item/:id' element={<Detail/>}/>
              <Route path='*' element={<Error/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
            <Footer/>        
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
