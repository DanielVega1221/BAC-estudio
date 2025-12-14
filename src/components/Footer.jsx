import logoBACFooter from '../assets/logoBACFooter.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <img src={logoBACFooter} alt="BAC Estudio" className="footer-logo" />
            <p className="footer-text">
              Arquitectura · Ingeniería · Obra
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <a href="mailto:estudio@bacestudio.com" className="footer-link">estudio@bacestudio.com</a>
            <a href="tel:+5493825000000" className="footer-link">+54 9 3825 000000</a>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Ubicación</h4>
            <p className="footer-text">Chilecito, La Rioja</p>
            <p className="footer-text">Catamarca</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} BAC Estudio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
