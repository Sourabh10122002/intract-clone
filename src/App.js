import './App.css';
import Academy from './Pages/Academy';
import AlphaHub from './Pages/AlphaHub';
import CryptoDictionary from './components/CryptoDictionary/CryptoDictionary';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Academy />}></Route>
          <Route path='/alpha-hub' element={<AlphaHub />}></Route>
        </Routes>
        <CryptoDictionary />
        <div className="switcher-wrapper">
          <div className="tab-switcher-container">
            <Link to='/'>
              <div className="essentials-switch-container">Essentials</div>
            </Link>
            <Link to='/alpha-hub'>
              <div className="alpha-hub-switch-container">Alpha Hub</div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
