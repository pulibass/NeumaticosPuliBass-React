import '../css/style.css'

import imagenNeumatico from '../img/cubiertas/rueda-pirelli.jpg'
import imagenPremium from '../img/iconos/premium.png'
import imagenIntermedio from '../img/iconos/intermid.png'
import imagenBasico from '../img/iconos/basic.png'
import imagenMedium from '../img/iconos/medium.png'
import imagenGalicia from '../img/ofertas/tarjeta-galicia.jpg'
import imagenMacro from '../img/ofertas/tarjeta-macro.jpg'
import imagenNaranja from '../img/ofertas/tarjeta-naranja.jpg'

export default function Inicio() {
    return (
        <main className="main-index">

            <section>
                <div data-aos="flip-left" className="titulos-index">
                    <h4>/INICIO</h4>
                    <h1>NEUMÁTICOS MÁS VENDIDOS</h1>
                </div>

            </section>


            <section className="container-grid-index">


                <div data-aos="flip-left" className="grid-producto-index">
                    <div className="calidad">
                        <img src={imagenPremium} alt="premium-stars" />
                    </div>
                    <div className="neumatico-descripcion">
                        <div className="img4-index">
                            <img src={imagenNeumatico} alt="rueda-pirelli" />
                        </div>
                        <div className="descripcion-producto">
                            <h5>175/65R14 82T</h5>
                            <h5>CINTURATO P1</h5>
                        </div>
                    </div>
                </div>


                <div data-aos="flip-right" className="grid-producto-index">
                    <div className="calidad">
                        <img src={imagenBasico} alt="premium-stars" />
                    </div>
                    <div className="neumatico-descripcion">
                        <div className="img4-index">
                            <img src={imagenNeumatico} alt="rueda-pirelli" />
                        </div>
                        <div className="descripcion-producto">
                            <h5>175/65R14 82T</h5>
                            <h5>FORMULA ENERGY</h5>
                        </div>
                    </div>
                </div>


                <div data-aos="flip-left" className="grid-producto-index">
                    <div className="calidad">
                        <img src={imagenMedium} alt="premium-stars" />
                    </div>
                    <div className="neumatico-descripcion">
                        <div className="img4-index">
                            <img src={imagenNeumatico} alt="rueda-pirelli" />
                        </div>
                        <div className="descripcion-producto">
                            <h5>175/65R14 82T</h5>
                            <h5>P400 EVO</h5>
                        </div>
                    </div>
                </div>


                <div data-aos="flip-right" className="grid-producto-index">
                    <div className="calidad">
                        <img src={imagenIntermedio} alt="premium-stars" />
                    </div>
                    <div className="neumatico-descripcion">
                        <div className="img4-index">
                            <img src={imagenNeumatico} alt="rueda-pirelli" />
                        </div>
                        <div className="descripcion-producto">
                            <h5>175/65R14 90T</h5>
                            <h5>CHRONO</h5>
                        </div>
                    </div>
                </div>


                <div data-aos="flip-left" className="grid-producto-index">
                    <div className="calidad">
                        <img src={imagenPremium} alt="premium-stars" />
                    </div>
                    <div className="neumatico-descripcion">
                        <div className="img4-index">
                            <img src={imagenNeumatico} alt="rueda-pirelli" />
                        </div>
                        <div className="descripcion-producto">
                            <h5>175/70R14 84T</h5>
                            <h5>CINTURATO P1</h5>
                        </div>
                    </div>
                </div>


                <div data-aos="flip-right" className="grid-producto-index">
                    <div className="calidad">
                        <img src={imagenBasico} alt="premium-stars" />
                    </div>
                    <div className="neumatico-descripcion">
                        <div className="img4-index">
                            <img src={imagenNeumatico} alt="rueda-pirelli" />
                        </div>
                        <div className="descripcion-producto">
                            <h5>175/65R14 82T</h5>
                            <h5>CINTURATO P1</h5>
                        </div>
                    </div>
                </div>


                <div data-aos="flip-left" className="grid-producto-index">
                    <div className="calidad">
                        <img src={imagenPremium} alt="premium-stars" />
                    </div>
                    <div className="neumatico-descripcion">
                        <div className="img4-index">
                            <img src={imagenNeumatico} alt="rueda-pirelli" />
                        </div>
                        <div className="descripcion-producto">
                            <h5>175/70R14 88H</h5>
                            <h5>XL SCORPION ATR</h5>
                        </div>
                    </div>

                </div>


                <div data-aos="flip-right" className="grid-producto-index">
                    <div className="calidad">
                        <img src={imagenMedium} alt="premium-stars" />
                    </div>
                    <div className="neumatico-descripcion">
                        <div className="img4-index">
                            <img src={imagenNeumatico} alt="rueda-pirelli" />
                        </div>
                        <div className="descripcion-producto">
                            <h5>175/65R14 82T</h5>
                            <h5>XL SCORPION ATR</h5>
                        </div>
                    </div>
                </div>

            </section>



            <section data-aos="fade-up" data-aos-anchor-placement="center-bottom"
                className="carrusel w-75 d-flex justify-content-center">


                <div id="carouselExampleFade" className="carousel slide carousel-fade w-100" data-bs-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={imagenNaranja} className="d-block w-100" alt="tarjeta-naranja" />
                        </div>
                        <div className="carousel-item">
                            <img src={imagenGalicia} className="d-block w-100" alt="tarjeta-galicia" />
                        </div>
                        <div className="carousel-item">
                            <img src={imagenMacro} className="d-block w-100" alt="tarjeta-macro" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-secondary " aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-secondary " aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>



        </main>

    )
}