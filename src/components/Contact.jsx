import { motion } from 'framer-motion';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // esto solo simula el envío, después tenés que conectar con un backend real
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado. Te contactaremos pronto.');
    
    setIsLoading(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="section-title-large">Contanos<br/>tu proyecto</h2>
            <div className="section-line" />
            <p className="section-description">
              Nos encantaría conocer tu idea y acompañarte en el proceso.
            </p>
          </div>

          <div>
            <div className="info-item">
              <h3 className="info-title">Ubicación</h3>
              <p className="info-text">Chilecito, La Rioja</p>
              <p className="info-text">Catamarca</p>
            </div>

            <div className="info-item">
              <h3 className="info-title">Email</h3>
              <p className="info-text">estudio@bacestudio.com</p>
            </div>

            <div className="info-item">
              <h3 className="info-title">Teléfono</h3>
              <p className="info-text">+54 9 3825 000000</p>
            </div>
          </div>
        </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </motion.form>
      </div>
    </section>
  );
};

export default Contact;
