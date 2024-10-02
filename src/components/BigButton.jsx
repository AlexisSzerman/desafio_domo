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


BigButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string, 
};


BigButton.defaultProps = {
  type: 'button',
  onClick: () => {}, 
  className: '', 
};

export default BigButton;
