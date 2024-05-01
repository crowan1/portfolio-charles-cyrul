import './App.css';
import Background from './components/background/background';
import Header from './components/header/header';
import Présentation from './components/main/Présentation/Présentation'
import About from './components/main/About/About';
import Skills from './components/main/Skills/Skills';
import Projects from './components/main/Projects/Projects';
import Contact from './components/main/Contact/Contact';
import Footer from './components/main/Footer/Footer';

function App() {
  return (
    <div>
      <Background/>
      <Header/>
      <Présentation id="presentationSection" />
      <About id="aboutSection" />
      <Skills id="skillsSection" />
      <Projects id="projectsSection" />
      <Contact id="contactSection" />
      <Footer/>
    </div>
  );
}


export default App;
