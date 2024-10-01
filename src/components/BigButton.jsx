import PropTypes from 'prop-types';
import '../styles/BigButton.css'; 

const BigButton = ({ text, type = "button", onClick, className = "" }) => {
  return (
    <button
      type={type}
      className={`btn big-btn fw-bold ${className}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// Validación de las props
BigButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string, // Permitir que se pase la clase desde el exterior
};

// Valores por defecto para las props opcionales
BigButton.defaultProps = {
  type: 'button',
  onClick: () => {}, // Función vacía por defecto
  className: '', // Clase vacía por defecto
};

export default BigButton;
