import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="background">
      <div className="Main">
      <Header />
        <div>
          <About />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
