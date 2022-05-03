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

            <a className="logo" href="/inicio"><img src={logo} alt="lOGO PAGINA" /></a>

            <input type="checkbox" id="checkbtn" />
            <label className="menu-hamb" htmlFor="checkbtn">
                <i className="fas fa-bars fa-2x"></i>
            </label>

            <label className="cruz-boton" htmlFor="checkbtn">
                <i className="far fa-times-circle fa-2x"></i>
            </label>

            <nav>
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
                        <Link to="/usuarios"><img className="img-iconos" src={usuarioIcon}
                            alt="icono-usuario" />Usuarios</Link>
                    </li>
                </ul>
            </nav>
            <div className="cart">
                <Link to="/cart"><span className='countcart' id='countcart'>0</span><img className="img-iconos" src={cartIcon}
                    alt="icono-cart" /></Link>
            </div>

        </header>
    );

}