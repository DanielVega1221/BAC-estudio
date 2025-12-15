import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className="hero" ref={heroRef}>
      {/* esas líneas verticales y horizontales que se ven al fondo */}
      <div className="hero-grid">
        <motion.div 
          className="grid-vertical"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="grid-horizontal"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="grid-vertical-secondary"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="hero-container">
        {/* acá va todo el texto grande de la izquierda */}
        <div className="hero-left">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Espacios que
            <span className="hero-title-emphasis"> cuentan historias</span>
          </motion.h1>

          <motion.div 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="hero-line-accent" />
            <div>
              <p className="hero-lead">Diseñamos, calculamos y construimos.</p>
              <p className="hero-sub">Arquitectura · Ingeniería · Obra</p>
              <p className="hero-location">Chilecito, La Rioja — Catamarca</p>
            </div>
          </motion.div>
        </div>

        {/* acá van las imágenes de la derecha con el efecto parallax */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: imageY }}
        >
          <div className="hero-image-frame">
            <div className="hero-image-main" />
            <motion.div 
              className="hero-image-accent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </motion.div>
      </div>

      {/* ese textito que dice "scroll" con la línea animada */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
};

export default Hero;
