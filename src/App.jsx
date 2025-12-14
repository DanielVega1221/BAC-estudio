import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Statement from './components/Statement';
import Process from './components/Process';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="App">
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      
      <Header />
      <main>
        <Hero />
        <Statement />
        <Process />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
