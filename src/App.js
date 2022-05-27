import './App.css';
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path ='/' element={<Home/>}/>
          <Route path='*' element={<h1>404. Pagina no encontrada</h1>}/>
        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
