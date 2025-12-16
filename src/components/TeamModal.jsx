import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import './ProjectModal.css';

const TeamModal = ({ member, onClose }) => {
  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [member]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
        <motion.div
          className="modal-content modal-team"
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
            <div 
              className="modal-visual modal-visual-team"
              style={{ backgroundImage: `url(${member.image})` }}
            >
              <div className="modal-image-overlay" />
            </div>

            <div className="modal-info">
              <h2 className="modal-title">{member.name}</h2>
              <p className="modal-role">{member.role}</p>

              <div className="modal-divider" />

              <div className="modal-story">
                <div className="story-intro">
                  <p className="story-lead">
                    {member.description}
                  </p>
                </div>

                <h3 className="story-title">Trayectoria</h3>
                <p className="story-text">
                  Con más de 10 años de experiencia en el diseño y desarrollo de proyectos, 
                  mi trabajo se caracteriza por una búsqueda constante del equilibrio entre 
                  funcionalidad y belleza. He desarrollado proyectos residenciales, comerciales 
                  y de gran escala en toda la región, siempre con foco en la calidad constructiva 
                  y el cuidado de cada detalle.
                </p>

                <h3 className="story-title">Mi mirada profesional</h3>
                <p className="story-text">
                  "Creo que la arquitectura debe ser una respuesta honesta al contexto, al clima, 
                  a la forma de vida del cliente. No se trata de imponer estilos, sino de escuchar, 
                  comprender y proponer. Cada proyecto es una conversación, un proceso de 
                  co-creación donde las necesidades del cliente se encuentran con las posibilidades 
                  del sitio y la técnica."
                </p>

                <p className="story-text">
                  "Me interesa una arquitectura que envejezca bien, que sea atemporal sin ser 
                  aburrida, que dialogue con su entorno sin disolverse en él. Busco materialidades 
                  nobles, sistemas constructivos racionales y espacios que acompañen la vida 
                  cotidiana sin protagonismos innecesarios."
                </p>

                <div className="story-expertise">
                  <h4 className="expertise-title">Áreas de especialización</h4>
                  <ul className="expertise-list">
                    <li>Diseño arquitectónico residencial y comercial</li>
                    <li>Dirección integral de proyectos</li>
                    <li>Remodelaciones y ampliaciones</li>
                    <li>Asesoramiento en materialidad sustentable</li>
                  </ul>
                </div>

                <div className="story-contact">
                  <p className="contact-text">¿Tenés un proyecto en mente?</p>
                  <p className="contact-subtext">Agendemos una reunión para conocer tu idea y ver cómo podemos ayudarte.</p>
                  <button 
                    className="contact-link contact-button" 
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
                    Ir al formulario
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

export default TeamModal;
