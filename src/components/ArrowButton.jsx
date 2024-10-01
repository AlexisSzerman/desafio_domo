import '../styles/ArrowButton.css'; // Importa el archivo CSS para aplicar el estilo
import PropTypes from 'prop-types';


const ArrowButton = ({ text, type = "button" }) => {

  return (
    <button
      type={type}
      className="btn arrow-btn fw-bold"   >
      {text} <span className="arrow">&rarr;</span>
    </button>
  );
};

export default ArrowButton;


// Validación de las props
ArrowButton.propTypes = {
    text: PropTypes.string.isRequired, // text es obligatorio y debe ser una cadena de texto
    type: PropTypes.string,            // type es opcional, debe ser una cadena de texto
  };
  
  // Valores por defecto para las props opcionales
ArrowButton.defaultProps = {
    type: 'button',
  };
