import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="Main">
      <Header />
      <div>
        <About />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
