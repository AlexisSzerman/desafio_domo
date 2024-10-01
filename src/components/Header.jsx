/* const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
      <div className="container-fluid d-flex align-items-center">
        <img className="logo mx-2" src="src/assets/logo.png" alt="logo" />
        <div className="separator"></div>
        <div className="navbar-collapse">
          <ul className="navbar-nav d-flex align-items-center fw-bold fs-5">
            <li className="nav-item home-link">
              <a className="nav-link home-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#pages"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#packages">
                Packages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cart">
                Cart [0]
              </a>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary fw-bold custom-btn"
        >
          Free Consultation <span className="arrow">&rarr;</span>
        </button>
      </div>
    </nav>
  );
};

export default Header; */

import ArrowButton from './ArrowButton'

const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
        <div className="container-fluid d-flex align-items-center">
          <img className="logo mx-2" src="src/assets/logo.png" alt="logo" />
  
          {/* Botón Toggler para dispositivos móviles */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="separator"></div>
  
          {/* Navbar Collapsible */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center fw-bold fs-5">
              <li className="nav-item home-link">
                <a className="nav-link home-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#pages"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#packages">
                  Packages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cart">
                  Cart [0]
                </a>
              </li>
            </ul>
          </div>
  
{/*           <button
            type="button"
            className="btn btn-outline-primary fw-bold custom-btn"
          >
            Free Consultation <span className="arrow">&rarr;</span>
          </button> */}
          <ArrowButton text="Free Consultation" />
        </div>
      </nav>
    );
  };
  
  export default Header;
  
