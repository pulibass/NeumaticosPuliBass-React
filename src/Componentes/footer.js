import '../css/style.css';


import iconoInstagram from '../img/logos/instagram.png';
import iconoFacebook from '../img/logos/facebook.png';
import iconoTwitter from '../img/logos/gorjeo.png';
import logoFiat from '../img/logos/FIAT-LOGO.png';
import logoRenault from '../img/logos/RENAULT-LOGO.png';
import logoBmw from '../img/logos/BMW-LOGO.jpg';
import logoCitroen from '../img/logos/CITROEN-LOGO.png';
import logoAudi from '../img/logos/AUDI-LOGO.jpg';
export default function Footer() {
    return (

        <footer>

            <div className="container-footer">

                <div className="descripcion-footer">


                    <div className="titulo-informativo">
                        <h2>Dirección</h2>

                    </div>

                    <h3>Av. Colón 5500. Córdoba, Argentina.</h3>
                    <h3>Horarios:</h3>
                    <h3>Lunes a Viernes:</h3>
                    <h3>09:00 a 14:30 y 15:30 a 19:00</h3>
                    <h3>Sábados:</h3>
                    <h3>09:00 a 13:00</h3>
                </div>

                <div className="links-footer">

                    <div className="titulo-informativo">
                        <h2>Información</h2>

                    </div>
                    <ul>
                        <li><a href="./pages/nosotros.html">Nosotros</a></li>
                        <li><a href="./pages/contacto.html">Contacto</a></li>
                        <li><a href="./pages/usuario.html">Usuarios</a></li>
                    </ul>
                </div>

                <div className="dataweb-redes">
                    <div className="titulo-informativo">

                        <h2>Seguinos</h2>

                    </div>
                    <div className="texto-redes">
                        <h5>Buscanos en todas las redes como</h5>
                        <h5>PULIBASS NEUMATICOS</h5>
                        <h5>y participa de todos los sorteos</h5>
                    </div>

                    <div className="redes">
                        <a href="https://twitter.com/?lang=es/" target="_blank" rel="noopener noreferrer">
                            <img className="icon-redes" src={iconoTwitter} alt="twitter" />
                        </a>
                        <a href=" https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img className="icon-redes" src={iconoFacebook} alt="facebbok" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img className="icon-redes" src={iconoInstagram} alt="instagram" />
                        </a>
                    </div>
                </div>

                <div className="datawebdiv">
                    <img src="./img/logos/usuario-financiero.svg" alt="" />
                    <img src="./img/logos/DATAWEB.jpg" alt="" />

                </div>

                <div className="logos-autos">

                    <div className="marcas-autos">
                        <img src={logoFiat} alt="logo-fiat" />
                        <img src={logoRenault} alt="logo-renault" />
                        <img src={logoCitroen} alt="logo-citroen" />
                        <img src={logoBmw} alt="logo-bmw" />
                        <img src={logoAudi} alt="logo-audi" />
                    </div>

                    <h5>copyright © Eduardo Ahumada Diseño Web</h5>

                </div>
            </div>


        </footer>

    )
}