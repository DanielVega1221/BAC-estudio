import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import logoBAC from '../assets/logoBAC.png';
import './Intro.css';

const Intro = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onComplete(), 800);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* las líneas que se dibujan en la pantalla de intro */}
          <div className="intro-grid">
            <motion.div 
              className="intro-grid-line intro-grid-v1"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div 
              className="intro-grid-line intro-grid-v2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div 
              className="intro-grid-line intro-grid-h1"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div 
              className="intro-grid-line intro-grid-v3"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div 
              className="intro-grid-line intro-grid-h2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.3, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div 
              className="intro-grid-line intro-grid-h3"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* el logo grande que aparece al cargar */}
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.img 
              src={logoBAC} 
              alt="BAC Estudio" 
              className="intro-logo"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            
            <motion.div
              className="intro-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                Arquitectura · Ingeniería · Obra
              </motion.p>
            </motion.div>
          </motion.div>

          {/* la barrita de carga que crece de a poco */}
          <motion.div 
            className="intro-loader"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, delay: 0.3, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
