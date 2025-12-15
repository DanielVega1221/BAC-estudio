import { motion } from 'framer-motion';
import logoBACFooter from '../assets/logoBACFooter.png';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          {/* header */}
          <motion.div 
            className="about-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="section-title-large">Quiénes somos</h2>
            
          </motion.div>

          {/* layout principal */}
          <div className="about-layout">
            {/* columna izquierda - logo y detalles */}
            <motion.div 
              className="about-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="about-brand">
                <img src={logoBACFooter} alt="BAC Estudio" className="about-logo" />
              </div>

              <div className="about-info-grid">
                <div className="about-info-item">
                  <div className="about-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="about-info-title">Alcance</h3>
                    <p className="about-info-text">Chilecito, La Rioja y Catamarca</p>
                  </div>
                </div>

                <div className="about-info-item">
                  <div className="about-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="about-info-title">Especialidades</h3>
                    <p className="about-info-text">Vivienda, comercial y gran escala</p>
                  </div>
                </div>

                <div className="about-info-item">
                  <div className="about-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="about-info-title">Enfoque</h3>
                    <p className="about-info-text">Colaborativo y cercano</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* columna derecha - contenido principal */}
            <motion.div 
              className="about-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="about-statement">
                <div className="about-statement-mark">"</div>
                <p className="about-statement-text">Hacemos de tu proyecto, un éxito</p>
              </div>

              <div className="about-description">
                <p>
                  Somos un estudio multidisciplinario de ingeniería y arquitectura comprometido con transformar 
                  cada proyecto en un éxito. Creemos que la arquitectura nace del diálogo: escuchamos, diseñamos 
                  y acompañamos a nuestros clientes en cada etapa del proceso.
                </p>
                <p>
                  Nuestro enfoque integra arquitectura, ingeniería civil, agrimensura y dirección de obra bajo 
                  una misma visión: crear espacios que respondan a las necesidades reales de quienes los habitan, 
                  con precisión técnica y sensibilidad proyectual.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* elementos decorativos */}
      <div className="about-decoration">
        <div className="about-decoration-line about-decoration-line-1" />
        <div className="about-decoration-circle" />
      </div>
    </section>
  );
};

export default About;
