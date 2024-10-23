import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolios from './components/Portfolios';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='p-[20px]'>
      {/* Nav Bar */}
      <NavBar/>
      {/* Hero */}
      <Hero/>
      {/* About Me */}
      <AboutMe/>
      {/* Skills */}
      <Skills/>
      {/* Portfolios */}
      <Portfolios/>
      {/* Companies */}
      <Companies/>
      {/* Contact */}
      <Contact/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
