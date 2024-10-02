import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-light text-dark text-center py-4 mt-5"> {/* Agregado mt-5 para margen superior */}
      <div className="container">
        <h6>Creado por</h6>
        <h4>Alexis Szerman</h4>
        <p>
          Email: alexszer1986@gmail.com <br />
          Cel: +549-11-4160-1797<br />
          <a href="https://www.linkedin.com/in/alexis-szerman/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin me-2"></i> 
          </a>
          <a href="https://github.com/AlexisSzerman/desafio_domo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> 
          </a>
          <br />
        </p>
        <Button 
          text="Descargar CV"
          onClick={() => window.open('https://drive.usercontent.google.com/u/0/uc?id=1riNeR6WoKa3-OmfQebOadSslmgVxlP_7&export=download', '_blank')} 
        /> 
        <p className="mt-4">
          El desarrollo de esta maqueta fue muy interesante porque en general copiar algo supone todo un desafío. Me gustó el concepto de hacer una copia de alta fidelidad, de ahí que con IA regeneré la imagen de fondo para que quede lo más original posible y en Illustrator vectoricé el logo para después poder hacerle una animación simple. Gracias a que los componentes de Bootstrap son responsive se puede generar una version móvil de forma rápida y efectiva, agregando algunos retoques. Espero les guste mi versión y puedan contactarme. Gracias por la oportunidad!
        
        </p>
      </div>
    </footer>
  );
};

export default Footer;

