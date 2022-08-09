import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="projects" element={<Projects />}/>
      </Routes>
    </div>
  );
}

export default App;
