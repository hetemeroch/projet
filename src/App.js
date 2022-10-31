import logo from './logo.svg';
import './App.css';
import Myconpteur from './compteur';
import Menu from './composants/menu';
import Contact from './composants/contact';
import Service from './composants/service';
import Home from './composants/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Menu/>
     <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/Contact" element = {<Contact/>}/>
      <Route path="/Service" element = {<Service/>}/>
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
