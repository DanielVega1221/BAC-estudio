import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Arquitectura e Interiorismo",
      description: "Proyectos integrales que vinculan espacio, función y materialidad con sensibilidad y rigor técnico."
    },
    {
      title: "Ingeniería Civil",
      description: "Desarrollo de cálculos estructurales, instalaciones y soluciones técnicas para la viabilidad constructiva."
    },
    {
      title: "Ingeniería en Agrimensura",
      description: "Relevamientos, mensuras y documentación técnica del territorio con precisión profesional."
    },
    {
      title: "Ejecución y seguimiento de obra",
      description: "Dirección, coordinación y control de obra para garantizar calidad, tiempos y presupuesto."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="services">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="section-title-large">Servicios</h2>
          </div>
          <p className="services-intro">
            Ofrecemos una mirada integral del proyecto, desde el concepto inicial hasta su construcción.
          </p>
        </motion.div>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="service-content">
                <h3 className="service-name">{service.title}</h3>
                <p className="service-text">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
