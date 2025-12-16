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
            <div className="modal-visual" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="modal-image-overlay" />
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
                    {project.lead}
                  </p>
                </div>

                <h3 className="story-title">El desafío</h3>
                <p className="story-text">
                  {project.challenge}
                </p>

                <h3 className="story-title">La propuesta</h3>
                <p className="story-text">
                  {project.proposal}
                </p>

                <h3 className="story-title">El resultado</h3>
                <p className="story-text">
                  {project.result}
                </p>

                <div className="story-details">
                  <div className="detail-item">
                    <span className="detail-label">Superficie</span>
                    <span className="detail-value">{project.surface}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Año</span>
                    <span className="detail-value">{project.year}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duración</span>
                    <span className="detail-value">{project.duration}</span>
                  </div>
                </div>

                <div className="story-services">
                  <h4 className="services-title">Servicios desarrollados</h4>
                  <ul className="services-list">
                    {project.services && project.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
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
