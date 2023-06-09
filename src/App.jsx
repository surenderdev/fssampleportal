import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About/About';
import Services from './components/Services/Services';
import Navbarcustom from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';  


function App() {
  return (
    <>
      
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbarcustom />
      <Routes>
        <Route path="" element={<Header />}></Route> 
        <Route path='/about' element={<About />}></Route> 
        <Route path='/services' element={<Services />}></Route> 
        <Route path='/contact' element={<Contact />}></Route> 
            
      </Routes>
       <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
