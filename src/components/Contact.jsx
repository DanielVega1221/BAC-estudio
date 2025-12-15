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
      <div className="contact-decoration">
        <div className="contact-decoration-circle" />
        <div className="contact-decoration-line contact-decoration-line-1" />
        <div className="contact-decoration-line contact-decoration-line-2" />
      </div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title-large">Contanos<br/>tu proyecto</h2>
          <p className="section-description">
            Completá el formulario y nos pondremos en contacto para conocer más sobre tu idea.
          </p>
        </motion.div>

        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px", amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
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
              placeholder="tu@email.com"
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
              placeholder="+54 9 ..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Tipo de proyecto</label>
            <input
              type="text"
              id="project"
              name="project"
              placeholder="Vivienda, comercial, relevamiento..."
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Contanos tu proyecto</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describí brevemente tu idea, necesidades y cualquier detalle que consideres importante..."
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`submit-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar consulta'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
