import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <span>Cerrar</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="modal-body">
            <div className="modal-visual">
              <div className="modal-image-placeholder" />
            </div>

            <div className="modal-info">
              <div className="modal-meta">
                <span className="modal-number">{String(project.id).padStart(2, '0')}</span>
                <span className="modal-category">{project.category}</span>
              </div>

              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-location">{project.location}</p>

              <div className="modal-divider" />

              <div className="modal-story">
                <div className="story-intro">
                  <p className="story-lead">
                    Un proyecto pensado desde la escucha, donde cada detalle responde 
                    a la forma de habitar y las necesidades reales del cliente.
                  </p>
                </div>

                <h3 className="story-title">El desafío</h3>
                <p className="story-text">
                  El cliente buscaba un espacio que equilibrara privacidad y conexión 
                  con el entorno. La topografía presentaba desafíos interesantes que 
                  convertimos en oportunidades: aprovechamos las visuales, respetamos 
                  la vegetación existente y diseñamos una implantación que dialogara 
                  naturalmente con el terreno.
                </p>

                <h3 className="story-title">La propuesta</h3>
                <p className="story-text">
                  El diseño propone volúmenes simples y puros, con una materialidad 
                  honesta que envejece con dignidad. Los espacios interiores se organizan 
                  buscando fluidez y flexibilidad, permitiendo que la luz natural recorra 
                  toda la planta. La estructura expuesta se convierte en parte del lenguaje 
                  arquitectónico.
                </p>

                <h3 className="story-title">El resultado</h3>
                <p className="story-text">
                  Un espacio contemporáneo que se integra a su contexto sin imponerse. 
                  La arquitectura se retira para dar protagonismo a la vida que sucede 
                  dentro. Cada ambiente fue pensado para acompañar los rituales cotidianos 
                  con la calidez y funcionalidad que el habitar requiere.
                </p>

                <div className="story-details">
                  <div className="detail-item">
                    <span className="detail-label">Superficie</span>
                    <span className="detail-value">180 m²</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Año</span>
                    <span className="detail-value">2024</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duración</span>
                    <span className="detail-value">14 meses</span>
                  </div>
                </div>

                <div className="story-services">
                  <h4 className="services-title">Servicios desarrollados</h4>
                  <ul className="services-list">
                    <li>Anteproyecto y proyecto ejecutivo</li>
                    <li>Cálculo estructural y cómputos</li>
                    <li>Dirección técnica de obra</li>
                    <li>Asesoramiento en materialidad</li>
                  </ul>
                </div>

                <div className="story-cta">
                  <p className="cta-text">¿Te gustaría desarrollar un proyecto similar?</p>
                  <button 
                    className="cta-button" 
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        const contactSection = document.querySelector('.contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 300);
                    }}
                  >
                    Conversemos sobre tu idea
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
