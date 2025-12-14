import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Vivienda Unifamiliar",
      location: "Chilecito, La Rioja",
      category: "vivienda",
      size: "medium"
    },
    {
      id: 2,
      title: "Complejo Comercial",
      location: "Catamarca",
      category: "comercial",
      size: "wide"
    },
    {
      id: 3,
      title: "Residencia Privada",
      location: "La Rioja",
      category: "vivienda",
      size: "medium"
    },
    {
      id: 4,
      title: "Desarrollo Urbano",
      location: "Chilecito",
      category: "gran-escala",
      size: "medium"
    },
    {
      id: 5,
      title: "Espacio Comercial",
      location: "Catamarca",
      category: "comercial",
      size: "small"
    },
    {
      id: 6,
      title: "Casa de Campo",
      location: "La Rioja",
      category: "vivienda",
      size: "wide-tall"
    },
    {
      id: 7,
      title: "Remodelación Integral",
      location: "Chilecito",
      category: "vivienda",
      size: "medium"
    },
    {
      id: 8,
      title: "Edificio Corporativo",
      location: "Catamarca",
      category: "comercial",
      size: "small"
    },
    {
      id: 9,
      title: "Residencial Valle",
      location: "La Rioja",
      category: "gran-escala",
      size: "wide"
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'vivienda', label: 'Vivienda' },
    { id: 'comercial', label: 'Comercial' },
    { id: 'gran-escala', label: 'Gran escala' }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects">
      <div className="projects-container">
        <motion.div 
          className="projects-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="intro-left">
            <h2 className="section-title-large">Proyectos</h2>
          </div>
          <div className="intro-right">
            <div className="projects-filters">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="projects-grid-bento">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-item project-${project.size}`}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05, 
                  ease: [0.22, 1, 0.36, 1],
                  layout: { duration: 0.4 }
                }}
                onClick={() => setSelectedProject(project)}
              >
                <motion.div 
                  className="project-content"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="project-visual">
                    <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="project-details">
                    <h3 className="project-name">{project.title}</h3>
                    <p className="project-place">{project.location}</p>
                    <span className="project-category">{project.category}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
