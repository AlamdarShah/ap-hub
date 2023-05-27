import './App.css';
import Aboutus from './components/Aboutus';
import { Contactus } from './components/Contactus';
import { Home } from './components/Home';
import Navbar  from './components/Navbar';
import Pricelist from './components/Pricelist';
import Products from './components/Products';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
     
    <Route path='/' element= {<Home />} /> 
     <Route path='/Products' element={<Products />} />
     <Route path='/Pricelist' element={<Pricelist />}/>
     <Route path='/Aboutus' element={<Aboutus />}/>
     <Route path='/Contactus' element={<Contactus />} />
     </Routes>
    </div>
  );
}

export default App;
