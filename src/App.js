import './App.css';
import Mainsection from './components/Mainsection';
import Navbar  from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Product/>
     <Mainsection />
    </div>
  );
}

export default App;
