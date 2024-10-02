import ArrowButton from './ArrowButton';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex align-items-center">
                {/* Logo SVG Animado */}
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1000 1000"
                    style={{ enableBackground: 'new 0 0 1000 1000', width: '50px', height: '50px' }} 
                    xmlSpace="preserve"
                >
                    <style type="text/css">
                        {`
                            .st0 {
                                fill: none;
                                stroke: #002A41;
                                stroke-width: 10;
                                stroke-dasharray: 500;
                                stroke-dashoffset: 500;
                                animation: draw 2s forwards;
                            }

                            .fill {
                                fill: #002A41;
                                opacity: 0;
                                animation: fill 2s forwards 2s;
                            }

                            @keyframes draw {
                                to {
                                    stroke-dashoffset: 0;
                                }
                            }

                            @keyframes fill {
                                to {
                                    opacity: 1;
                                }
                            }
                        `}
                    </style>

                    <path className="st0" d="M676.2,427.1L848.2,255L707.8,103.1H151.8v504.3L313,427.1l-2.2-167.4l319.9-1.4L151.8,756.5v140.4h524.4
                        C1063.1,670.5,676.2,427.1,676.2,427.1z M634.9,768.6H376.3v-26.1l193.9-193.8c0,0,90.8-31.8,136.2,64.5S634.9,768.6,634.9,768.6z"/>
                    <path className="fill" d="M676.2,427.1L848.2,255L707.8,103.1H151.8v504.3L313,427.1l-2.2-167.4l319.9-1.4L151.8,756.5v140.4h524.4
                        C1063.1,670.5,676.2,427.1,676.2,427.1z M634.9,768.6H376.3v-26.1l193.9-193.8c0,0,90.8-31.8,136.2,64.5S634.9,768.6,634.9,768.6z"/>
                </svg>

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
                <ArrowButton text="Free Consultation" />
            </div>
        </nav>
    );
};

export default Header;


