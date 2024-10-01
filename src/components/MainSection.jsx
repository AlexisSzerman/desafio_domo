import Button  from './Button';
import ArrowButton from './ArrowButton';
import BigButton from './BigButton';

const MainSection = () => {
  return (
    <div className="container-fluid p-0" style={{ height: '100vh' }}>
      <div className="row g-0" style={{ height: '100%' }}>
        {/* Columna izquierda */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center gradient text-white">
        <Button text='Welcome to Businezz X' className='btn-variant' />
          <h2>Join us in growing your business.</h2>
          <p>Elevate your business with Businezz X, a professional Webflow template.</p>
{/*           <a href="#contact" className="btn btn-light">Contact us</a> */}
        <ArrowButton text='Contact us'/>
        </div>

        {/* Columna derecha (Formulario con imagen de fondo) */}
        <div
          className="col-md-6 d-flex flex-column justify-content-center align-items-center text-dark p-5"
          style={{
            backgroundImage: `url('src/assets/office.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        >
          <form style={{ width: '100%', maxWidth: '400px', backgroundColor: 'rgba(255, 255, 255)', padding: '30px' }}>
            <Button text='Book your free consultation'/>
          <h4 className='my-4 fw-bold'>Get a free consultation</h4>
            <div className="row">
                <div className='col'>
              <input type="text" className="form-control form-control-lg" id="name" placeholder="Name" />
            </div>
            <div className="col">
              <input type="email" className="form-control form-control-lg" id="email" placeholder="contact@email.com" />
            </div>
                </div>
            <div className="mb-3">
              <textarea className="form-control form-control-lg" id="message" rows="3" placeholder="Please type your message here..."></textarea>
            </div>
{/*             <button type="submit" className="btn btn-outline-primary btn-lg">Get in Touch</button> */}
            <BigButton text='Get in Touch'/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainSection;


