import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Navbar from './componentes/navbar/navbar';
import Slider from './componentes/slider/slider';
import Texto from './componentes/texto/texto';
import Cards from './componentes/cards/cards';
import Footer from './componentes/footer/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
      <Router>
        <Slider/>
      </Router>
      <Router>
        <Texto/>
      </Router>
      <Router>
        <div className='tarjetas'>
        <Cards/>
        <Cards/>
        <Cards/>
        </div>
      </Router>
      <Router>
        <div className='footer'>
        <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
