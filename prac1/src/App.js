import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
