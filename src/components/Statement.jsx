import { motion } from 'framer-motion';
import './Statement.css';

const Statement = () => {
  return (
    <section className="statement">
      <div className="statement-container">
        <motion.div
          className="statement-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="statement-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <h2 className="statement-text">
            No diseñamos solo espacios.<br/>
            Diseñamos <span className="statement-emphasis">procesos compartidos.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Statement;
