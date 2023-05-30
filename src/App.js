import './App.css';
<<<<<<< HEAD
import More from './components/More';
import Pulses from './components/Pulses';
import Spices from './components/Spices';
import Cart from './components/Cart';

=======
import Aboutus from './components/Aboutus';
// import { Contactus } from './components/Contactus';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import Pricelist from './components/Pricelist';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import Contactus from './components/Contactus';
import Spices from './components/Spices';
import Pulses from './components/Pulses';
import More from './components/More';
>>>>>>> 780275772f416fa072cfb7a85285cc5b9713b5e3

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    
     
=======
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
         <Route path='/Spices' element={<Spices />} />
         <Route path='/Pulses' element={<Pulses />} />
         <Route path='/More' element={<More />} />
        <Route path='/Pricelist' element={<Pricelist />} />
        <Route path='/Contactus' element={<Contactus />} />
        <Route path='/Aboutus' element={<Aboutus />} />
      </Routes>
>>>>>>> 780275772f416fa072cfb7a85285cc5b9713b5e3
    </div>
  );
}

export default App;
