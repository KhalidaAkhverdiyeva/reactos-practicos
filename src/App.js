import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './component/CustomNavbar';
import Home from '../src/component/Home/home';
import About from '../src/component/About/about';
import Services from '../src/component/Services/services';
import Contact from '../src/component/Contact/contact';
import './index.css';


function App() {
  return (
    <Router>
      <header>
        <CustomNavbar />
      </header>
      <Routes>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
      </Routes>

      <main>

        <card />

      </main>
    </Router>
  );
}
export default App;