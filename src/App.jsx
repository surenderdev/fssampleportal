import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About/About';
import Services from './components/Services/Services';
import Navbarcustom from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';  


function App() {
  return (
    <>
      
      <BrowserRouter basename="/fssampleportal">
      <Navbarcustom />
      <Switch>
        <Route path="/" exact component={<Header />} />
        <Route path='/about' component={<About />} />
        <Route path='/services' component={<Services />} />
        <Route path='/contact' component={<Contact />} />
            
      </Switch>
       <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
