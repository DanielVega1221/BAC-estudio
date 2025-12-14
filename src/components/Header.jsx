import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import logoBAC from '../assets/logoBAC.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionClass = entry.target.className.split(' ')[0];
            setActiveSection(sectionClass);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`.${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="scroll-progress-bar"
        style={{ scaleX: scrollProgress / 100 }}
      />
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logoBAC} alt="BAC Estudio" className="logo-image" />
        </motion.div>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('process')} className={`nav-link ${activeSection === 'process' ? 'active' : ''}`}>Proceso</button>
          <button onClick={() => scrollToSection('services')} className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Servicios</button>
          <button onClick={() => scrollToSection('projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Proyectos</button>
          <button onClick={() => scrollToSection('team')} className={`nav-link ${activeSection === 'team' ? 'active' : ''}`}>Equipo</button>
          <button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contacto</button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
