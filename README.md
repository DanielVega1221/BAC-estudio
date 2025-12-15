# BAC Estudio - Landing Page

landing page para el estudio de arquitectura de fer en chilecito, la rioja.

## stack

- react 19
- vite
- framer motion

## comandos

```bash
npm install          # instalar dependencias
npm run dev          # levantar dev server (localhost:5173)
npm run build        # compilar para producción
npm run preview      # ver la build
```

## estructura

```
src/
  components/     → todos los componentes de la página
  assets/         → logo y recursos
  App.css         → estilos globales y variables
```

## features

- parallax en hero
- scroll progress bar
- intersection observer para active states
- grid bento con filtros en proyectos
- hover quotes en equipo
- modales animados
- back to top
- responsive completo

## qué cambiar

**textos:** editás directo en los .jsx de cada componente

**imágenes:** cambiar backgrounds en los .css o agregar urls

**colores:** variables en App.css (`:root`)

**proyectos:** array en Projects.jsx

**equipo:** array en Team.jsx

**formulario:** falta conectar con backend (emailjs, formspree, etc)

## más info

leé `COMO-FUNCIONA.txt` para entender bien cómo está armado todo

---

cliente: bac estudio - arq. fernanda barrantes  
estilo: minimalismo editorial arquitectónico
