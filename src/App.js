import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
