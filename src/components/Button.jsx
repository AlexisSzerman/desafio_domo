import '../styles/Button.css'; // Importa el archivo CSS para aplicar el estilo
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
  };