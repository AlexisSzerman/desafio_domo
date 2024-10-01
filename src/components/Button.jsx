/* import '../styles/Button.css'; // Importa el archivo CSS para aplicar el estilo
import PropTypes from 'prop-types';


const Button = ({ text, type = "button" }) => {

  return (
    <button
      type={type}
      className="btn custom-btn fw-bold">
      {text}
    </button>
  );
};

export default Button;


// Validación de las props
Button.propTypes = {
    text: PropTypes.string.isRequired, 
    type: PropTypes.string,           
  };
  
  // Valores por defecto para las props opcionales
Button.defaultProps = {
    type: 'button',
  }; */


import PropTypes from 'prop-types';
import '../styles/Button.css'; // Importa el archivo CSS para aplicar el estilo

const Button = ({ text, type = "button", onClick, className = "" }) => {
  return (
    <button
      type={type}
      className={`btn custom-btn fw-bold ${className}`} // Combina las clases pasadas por props con las predeterminadas
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// Validación de las props
Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string, // Permitir que se pase la clase desde el exterior
};

// Valores por defecto para las props opcionales
Button.defaultProps = {
  type: 'button',
  onClick: () => {}, // Función vacía por defecto
  className: '', // Clase vacía por defecto
};

export default Button;
