import { motion } from 'framer-motion';
import { useState } from 'react';
import TeamModal from './TeamModal';
import './Team.css';

import teamImg1 from '../assets/imagenEquipo1.jpg';
import teamImg2 from '../assets/imagenEquipo2.jpg';
import teamImg3 from '../assets/imagenEquipo3.png';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  
  const team = [
    {
      name: "Arq. Fernanda Barrantes",
      role: "Arquitecta",
      image: teamImg1,
      description: "Fundadora del estudio. Especializada en diseño residencial y espacios comerciales con enfoque en la integración sensible entre arquitectura y contexto. Apasionada por el acompañamiento cercano a cada cliente.",
      quote: "Me gusta pensar la arquitectura desde lo que se habita, no desde lo que se muestra."
    },
    {
      name: "Ing. Laura Mercado",
      role: "Ingeniera Civil",
      image: teamImg2,
      description: "Responsable del desarrollo técnico y estructural. Aporta soluciones constructivas innovadoras garantizando viabilidad y calidad en cada proyecto. Su experiencia asegura el éxito en la ejecución.",
      quote: "La estructura no es lo que se ve. Es lo que permite que todo lo demás suceda."
    },
    {
      name: "Agrim. Carolina Vargas",
      role: "Ingeniera en Agrimensura",
      image: teamImg3,
      description: "Encargada de relevamientos y documentación técnica del territorio. Trabaja con precisión y rigor profesional, asegurando que cada medición sea la base sólida de nuestros proyectos.",
      quote: "Cada medida cuenta una historia del lugar. Mi trabajo es escucharla con precisión."
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
    <section className="team">
      <div className="team-container">
        <motion.div 
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title-large">Equipo</h2>
          <p className="team-intro">
            Profesionales comprometidas con la calidad, la cercanía y el acompañamiento en cada etapa.
          </p>
        </motion.div>

        <div className="team-list">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="team-member"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedMember(member)}
            >
              <div 
                className="member-visual"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="member-info">
                <div className="member-header">
                  <div>
                    <h3 className="member-area">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>
                  <div className="member-icon">→</div>
                </div>
                <p className="member-bio">{member.description}</p>
                <div className="member-quote">
                  <span className="quote-mark">"</span>
                  <p className="quote-text">{member.quote}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <TeamModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </section>
  );
};

export default Team;
