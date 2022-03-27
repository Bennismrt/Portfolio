import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Projects/>
    </div>
  );
}

export default App;