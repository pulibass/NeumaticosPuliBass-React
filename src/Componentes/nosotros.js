import '../css/style.css';

import imagenLocal from "../img/local/LOCAL.jpeg"
import imagenCollage from "../img/local/LOCAL-COLLAGE.png"

export default function Nosotros() {
    return (
        <main className="main-nosotros">

            <section data-aos="flip-left" className="titulos">

                <div>
                    <h4>/NOSOTROS</h4>
                    <h1>NOSOTROS</h1>
                </div>

            </section>


            <section data-aos="fade-up" data-aos-duration="3000" className="contenedor-nosotros">

                <img className="foto-local" src={imagenLocal} alt="LOCAL" />


                <div data-aos="zoom-in" className="textos-nosotros">

                    <div className="texto-logo">
                        <h4>NEUMATICOS</h4>
                        <h4>PULIBASS</h4>
                    </div>

                    <div data-aos="zoom-in" className="textos-descripcion">

                        <h2>DESDE 1985</h2>
                        <h5>SOMOS UNA EMPRESA DEDICADA DE LLENO AL CUIDADO DE TU VEHICULO.</h5>
                        <h5>BRINDANOLES UN SERVICIO EXCLUSIVO</h5>
                        <h5> CONTAMOS CON EL RESPALDO DE IMPORTANTES MARCAS Y LA ULTIMA TECNOLOGIA DEL MERCADO.
                        </h5>
                    </div>
                </div>


                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="fotos-local">

                    <img src={imagenCollage} alt="local-collage" />
                </div>

            </section>


        </main>
    )
}