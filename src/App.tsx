import React from 'react';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Signup from './Components/Signup';

import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import Formm from './Formm';


function App() {
  return (
    <div className="App">
      <nav>
      <h3>UNIT.COM.VN</h3>
      <ul className='nav-link'>
        <li><Link  className='nav-link' to="/">Home</Link></li>
        <li><Link  className='nav-link' to="/SU">SignUp</Link></li>
        <li><Link  className='nav-link' to="/SO">Field</Link></li>
        <li><Link className='nav-link' to="/AB">About</Link></li>
      </ul>
      </nav>
      <Routes>
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/SU" element={ <Signup /> }></Route>
      <Route path="/SO" element={ <Formm /> }></Route>
      <Route path="/AB" element={ <About /> }></Route>
     </Routes>
      
    </div>
  );
}

export default App;
