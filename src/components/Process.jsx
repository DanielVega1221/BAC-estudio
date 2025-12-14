import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Escucha y análisis",
      description: "Comprendemos tus necesidades, el contexto y las posibilidades del proyecto."
    },
    {
      number: "02",
      title: "Diseño y concepto",
      description: "Desarrollamos propuestas que integran funcionalidad, estética y viabilidad técnica."
    },
    {
      number: "03",
      title: "Desarrollo técnico",
      description: "Elaboramos la documentación ejecutiva con precisión y claridad constructiva."
    },
    {
      number: "04",
      title: "Ejecución y seguimiento",
      description: "Acompañamos la obra hasta su materialización, cuidando cada detalle."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="process">
      <div className="process-layout">
        {/* el título "Cómo trabajamos" que se queda pegado mientras haces scroll */}
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title-large">Cómo<br/>trabajamos</h2>
          <div className="section-line" />
          <p className="section-description">
            Integramos arquitectura, ingeniería y ejecución en un proceso continuo y transparente.
          </p>
        </motion.div>

        {/* acá van los 4 pasos con sus números grandes */}
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="process-step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="step-number-large">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
