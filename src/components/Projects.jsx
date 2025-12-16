import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import './Projects.css';

import img1 from '../assets/imagengenerica1.jpg';
import img2 from '../assets/imagengenerica2.webp';
import img3 from '../assets/imagengenerica3.jpeg';
import img4 from '../assets/imagengenerica4.jpg';
import img5 from '../assets/imagengenerica5.webp';
import img6 from '../assets/imagengenerica6.jpg';
import img7 from '../assets/imagengenerica7.jpg';
import img8 from '../assets/imagengenerica8.jpg';
import img9 from '../assets/imagengenerica9.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Vivienda Unifamiliar",
      location: "Chilecito, La Rioja",
      category: "vivienda",
      size: "medium",
      image: img1,
      year: "2024",
      surface: "180 m²",
      duration: "14 meses",
      lead: "Un proyecto pensado desde la escucha, donde cada detalle responde a la forma de habitar y las necesidades reales del cliente.",
      challenge: "El cliente buscaba un espacio que equilibrara privacidad y conexión con el entorno. La topografía presentaba desafíos interesantes que convertimos en oportunidades: aprovechamos las visuales, respetamos la vegetación existente y diseñamos una implantación que dialogara naturalmente con el terreno.",
      proposal: "El diseño propone volúmenes simples y puros, con una materialidad honesta que envejece con dignidad. Los espacios interiores se organizan buscando fluidez y flexibilidad, permitiendo que la luz natural recorra toda la planta.",
      result: "Un espacio contemporáneo que se integra a su contexto sin imponerse. La arquitectura se retira para dar protagonismo a la vida que sucede dentro.",
      services: ["Anteproyecto y proyecto ejecutivo", "Cálculo estructural y cómputos", "Dirección técnica de obra", "Asesoramiento en materialidad"]
    },
    {
      id: 2,
      title: "Complejo Comercial",
      location: "Catamarca",
      category: "comercial",
      size: "wide",
      image: img2,
      year: "2023",
      surface: "450 m²",
      duration: "18 meses",
      lead: "Un espacio comercial que piensa en la experiencia del usuario, donde la circulación fluida y la iluminación natural son protagonistas.",
      challenge: "Diseñar un complejo que albergara múltiples locales manteniendo identidad propia de cada uno, optimizando la circulación pública y creando espacios de permanencia atractivos.",
      proposal: "Planteamos una fachada modular que permite flexibilidad en los locales interiores. Un patio central articula la circulación y genera un espacio de encuentro. La estructura metálica vista dialoga con cerramientos vidriados.",
      result: "Un complejo que funciona como pequeño polo comercial local. Los espacios exteriores cubiertos se convirtieron en lugares de encuentro para la comunidad.",
      services: ["Proyecto ejecutivo completo", "Ingeniería estructural", "Dirección de obra", "Coordinación con especialidades"]
    },
    {
      id: 3,
      title: "Residencia Privada",
      location: "La Rioja",
      category: "vivienda",
      size: "medium",
      image: img3,
      year: "2024",
      surface: "220 m²",
      duration: "16 meses",
      lead: "Una vivienda que abraza el paisaje riojano, diseñada para disfrutar de cada estación del año con confort y privacidad.",
      challenge: "El terreno con pendiente pronunciada y orientación compleja requería una solución que aprovechara las vistas sin comprometer la intimidad. El clima extremo demandaba estrategias bioclimáticas efectivas.",
      proposal: "Escalonamiento en tres niveles siguiendo la topografía. Galerías profundas protegen del sol intenso. Patios interiores generan microclimas y ventilación cruzada. Materialidad térmica en muros de masa.",
      result: "Una casa que respira con el clima. Las galerías se habitan tanto como los interiores. La orientación estudiada permite disfrutar del sol en invierno y sombra en verano.",
      services: ["Proyecto arquitectónico completo", "Estudio bioclimático", "Cálculo estructural", "Dirección de obra"]
    },
    {
      id: 4,
      title: "Desarrollo Urbano",
      location: "Chilecito",
      category: "gran-escala",
      size: "medium",
      image: img4,
      year: "2023",
      surface: "3.500 m²",
      duration: "24 meses",
      lead: "Un proyecto integral que piensa la ciudad desde la escala humana, priorizando espacios públicos de calidad y conexión con el entorno.",
      challenge: "Urbanizar un sector periférico respetando la trama existente, generando densidad apropiada sin perder escala barrial. Crear espacios verdes significativos en zona árida.",
      proposal: "Loteo con manzanas reducidas que fomentan circulación peatonal. Plaza central como corazón del barrio. Forestación con especies nativas de bajo requerimiento hídrico. Infraestructura completa integrada al diseño.",
      result: "Un barrio que funciona como comunidad. Los espacios públicos son apropiados por los vecinos. La escala permite conocerse y generar identidad de pertenencia.",
      services: ["Anteproyecto urbano", "Proyecto ejecutivo de infraestructura", "Relevamiento topográfico", "Dirección técnica"]
    },
    {
      id: 5,
      title: "Espacio Comercial",
      location: "Catamarca",
      category: "comercial",
      size: "small",
      image: img5,
      year: "2024",
      surface: "85 m²",
      duration: "8 meses",
      lead: "Un local comercial que maximiza cada metro cuadrado, donde el diseño potencia la experiencia de compra y la identidad de marca.",
      challenge: "Espacio reducido en planta baja con altura generosa. Necesidad de exhibición, depósito, atención y área de trabajo en superficie limitada.",
      proposal: "Aprovechamos la altura con entrepiso técnico que libera planta baja. Mobiliario integrado a la arquitectura optimiza espacio. Iluminación cenital realza productos. Materiales nobles y duraderos.",
      result: "Un local compacto que se siente espacioso. La luz natural se convierte en protagonista. El cliente valora la funcionalidad lograda sin resignar estética.",
      services: ["Proyecto y dirección de obra", "Diseño de mobiliario integrado", "Asesoramiento lumínico", "Gestión de permisos"]
    },
    {
      id: 6,
      title: "Casa de Campo",
      location: "La Rioja",
      category: "vivienda",
      size: "wide-tall",
      image: img6,
      year: "2023",
      surface: "280 m²",
      duration: "20 meses",
      lead: "Una casa que dialoga con el valle, donde interior y exterior se confunden y cada espacio enmarca el paisaje como un cuadro vivo.",
      challenge: "Implantación en terreno de gran dimensión con vistas privilegiadas. Programa extenso que incluye áreas sociales amplias, sector de huéspedes independiente y espacios de trabajo desde casa.",
      proposal: "Volumetría en L abraza patio de acceso protegido. Estar social abre completamente al valle con carpintería plegable. Dormitorios buscan intimidad hacia zona arbolada. Galería perimetral como espacio de transición.",
      result: "Una casa para habitar el paisaje. Las visuales fueron cuidadosamente estudiadas desde cada ambiente. La galería se usa todo el año y se convirtió en el espacio más valorado.",
      services: ["Proyecto completo", "Cálculo estructural hormigón y madera", "Dirección de obra", "Paisajismo y equipamiento exterior"]
    },
    {
      id: 7,
      title: "Remodelación Integral",
      location: "Chilecito",
      category: "vivienda",
      size: "medium",
      image: img7,
      year: "2024",
      surface: "150 m²",
      duration: "10 meses",
      lead: "Dar nueva vida a una construcción existente, respetando su historia mientras se adapta a las necesidades contemporáneas de habitar.",
      challenge: "Vivienda antigua con distribución obsoleta, instalaciones precarias y problemas de humedad. Necesidad de modernizar sin perder carácter original.",
      proposal: "Mantuvimos muros estructurales y cubierta, renovando completamente instalaciones. Redistribución interior logra espacios más amplios. Nuevas aberturas mejoran iluminación. Tratamiento de humedades desde fundación.",
      result: "Una casa que parece nueva pero conserva su alma. Los clientes valoran haber mantenido materialidad original donde era posible. La funcionalidad mejoró radicalmente.",
      services: ["Relevamiento y diagnóstico", "Proyecto de remodelación", "Coordinación estructural", "Dirección de obra"]
    },
    {
      id: 8,
      title: "Edificio Corporativo",
      location: "Catamarca",
      category: "comercial",
      size: "small",
      image: img8,
      year: "2023",
      surface: "320 m²",
      duration: "12 meses",
      lead: "Un espacio de trabajo que promueve la colaboración y el bienestar, donde la luz natural y las visuales al exterior son prioridad.",
      challenge: "Oficinas para empresa en crecimiento que requiere flexibilidad futura. Lote urbano estrecho y profundo. Necesidad de estacionamiento y accesibilidad universal.",
      proposal: "Planta baja con cocheras y acceso. Dos niveles de oficinas con planta libre divisible. Núcleo de servicios concentrado permite flexibilidad. Fachada con parasoles móviles controla asoleamiento.",
      result: "Oficinas luminosas que se adaptan al crecimiento de la empresa. Los espacios comunes promueven encuentro. La terraza en último nivel se usa como extensión del trabajo.",
      services: ["Proyecto arquitectónico", "Ingeniería estructural e instalaciones", "Gestión de habilitaciones", "Dirección de obra"]
    },
    {
      id: 9,
      title: "Residencial Valle",
      location: "La Rioja",
      category: "gran-escala",
      size: "wide",
      image: img9,
      year: "2022",
      surface: "5.200 m²",
      duration: "30 meses",
      lead: "Un conjunto residencial que propone una nueva forma de vivir en comunidad, equilibrando privacidad de cada unidad con generosos espacios compartidos.",
      challenge: "Desarrollar vivienda colectiva de calidad manteniendo costos accesibles. Terreno irregular con desnivel significativo. Crear identidad de conjunto sin perder individualidad.",
      proposal: "Agrupamiento de viviendas adosadas escalonadas según topografía. Espacios comunes (quincho, juegos, huerta) como articuladores. Orientaciones estudiadas para cada unidad. Materialidad simple y durable.",
      result: "Un barrio donde los vecinos se conocen. Los espacios comunes están en uso permanente. Las viviendas mantienen privacidad pero fomentan encuentro. La diversidad de tipologías permite diferentes perfiles familiares.",
      services: ["Masterplan y proyecto ejecutivo", "Cálculo estructural", "Relevamiento topográfico", "Dirección técnica integral"]
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
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.03, 
                  ease: [0.22, 1, 0.36, 1],
                  layout: { duration: 0.3 }
                }}
                onClick={() => setSelectedProject(project)}
              >
                <motion.div 
                  className="project-content"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="project-visual" style={{ backgroundImage: `url(${project.image})` }}>
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
