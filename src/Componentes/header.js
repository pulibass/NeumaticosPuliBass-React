//es6
import '../css/style.css';

import logo from '../img/logos/LOGO.png'
import homeIcon from '../img/iconos/home.png'
import nosotrosIcon from '../img/iconos/nosotros.png'
import productIcon from '../img/iconos/producto.png'
import contactoIcon from '../img/iconos/email.png'
import usuarioIcon from '../img/iconos/usuario2.png'
import cartIcon from '../img/iconos/cart.png'

import { Link } from 'react-router-dom';


export default function Header() {

    return (

        <header>

            {/* <!--LOGO--> */}
            <a className="logo" href="../index.html"><img src={logo} alt="lOGO PAGINA" /></a>

            {/* <!--MENU HAMBURGUESA INICIO--> */}
            <input type="checkbox" id="checkbtn" />
            <label className="menu-hamb" htmlFor="checkbtn">
                <i className="fas fa-bars fa-2x"></i>
            </label>

            <label className="cruz-boton" htmlFor="checkbtn">
                <i className="far fa-times-circle fa-2x"></i>
            </label>
            {/* <!--MENU HAMBURGUESA FIN--> */}

            <nav>
                {/* <!--NAV INICIO--> */}
                <ul>
                    <li>
                        <Link to="/inicio"><img className="img-iconos" src={homeIcon}
                            alt="icono-home" />Inicio</Link>
                    </li>
                    <li>
                        <Link to="/productos"><img className="img-iconos" src={productIcon}
                            alt="icono-productos" />Productos</Link>
                    </li>
                    <li>
                        <Link to="/nosotros"><img className="img-iconos" src={nosotrosIcon}
                            alt="icono-nosotros" />Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/contacto"><img className="img-iconos" src={contactoIcon}
                            alt="icono-contacto" />Contacto</Link>
                    </li>
                    <li>
                        <Link to="/usuario"><img className="img-iconos" src={usuarioIcon}
                            alt="icono-usuario" />Usuario</Link>
                    </li>
                </ul>
                {/*  <!--NAV FIN--> */}
            </nav>
            <div className="cart">
                <Link to="/cart"><img className="img-iconos" src={cartIcon}
                    alt="icono-cart" /></Link>
                {/*  <a href="#"><i className="fas fa-shopping-cart fa-2x img-iconos"></i></a> */}
            </div>

        </header>
    );

}