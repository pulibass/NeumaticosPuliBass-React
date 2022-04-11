import '../css/style.css';

export default function Contacto() {
    return (
        <main className="main-contacto">

            <section data-aos="flip-left" className="titulos">

                <div>
                    <h4>/CONTACTO</h4>
                    <h1>CONTACTANOS</h1>
                </div>

            </section>


            <section className="container-contacto">

                <section className="ubicacion-contacto">

                    {/*  <iframe data-aos="flip-down"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6713708654656!2d-64.25657228572219!3d-31.395623781411036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329f3aaa96a7c7%3A0x711469e06f257d3a!2sAv.%20Col%C3%B3n%205500%2C%20X5003DFN%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1632694481436!5m2!1ses!2sar"
                        style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                </section>

                <section className="contenedor-contacto">

                    <section data-aos="fade-right" className="parrafos">
                        <p className="p1">Escribinos y sacate todas las dudas.</p>
                        <p className="p2">tenemos un equipo dedicado a la atencion al cliente disponible las 24hs.</p>



                        <p className="p4">NEUMATICOS
                            <span>PULIBASS</span>
                        </p>

                    </section>

                    <section data-aos="fade-left" data-aos-duration="3000" className="sucursal-info">


                        <div data-aos="fade-left" className="info">
                            <h5>Sucursal Principal</h5>
                            <h3>Av. Colón 5500. Córdoba Argentina</h3>

                            <h4>Telefono:</h4>
                            <h4>0351-4888888</h4>
                            <h4>Whatsapp:</h4>
                            <h4>351-2646228</h4>
                            <h4>neumaticospulibass@pirelli.com.ar</h4>
                        </div>

                        <div className="cv">
                            <h3>Envianos tu Curriculum</h3>
                            <p>envía tu CV a: info@pirelli.com.ar.com</p>
                        </div>


                    </section>

                    <section data-aos-duration="3000" className="contacto-section">


                        <form onsubmit="cargar(event)" data-aos="fade-right" id="formularioContact">
                            <div className="inputs-texts">
                                <div>
                                    <label for="nombre">Nombre</label>
                                </div>
                                <input type="text" id="nombre" name="nombre" required placeholder="ingrese nombre" />
                            </div>

                            <div className="inputs-texts">
                                <div>
                                    <label for="apellido">Apellido</label>
                                </div>
                                <input type="text" id="apellido" name="apellido" required placeholder="ingrese apellido" />
                            </div>

                            <div className="inputs-texts">
                                <div>
                                    <label for="email">Email</label>
                                </div>
                                <input type="email" id="email" name="email" required placeholder="mail@mail.com" />
                            </div>

                            <div className="inputs-texts">
                                <div>
                                    <label for="telefono">Telefono</label>
                                </div>
                                <input type="text" id="telefono" name="telefono" required placeholder="ej: 351 2222222" />
                            </div>

                            <div className="inputs-select-radio">
                                <label for="ciudad">Ciudad</label>
                                <select name="ciudad" id="ciudad" required>
                                    <option label="Seleccione" selected></option>
                                    <option value="alta-gracia">Alta Gracia</option>
                                    <option value="cordoba">Córdoba</option>
                                    <option value="cruz-del-eje">Cruz del Eje</option>
                                    <option value="la-calera">La Calera</option>
                                    <option value="rio-cuarto">Rio Cuarto</option>
                                    <option value="villa-allende">Villa Allende</option>
                                    <option value="villa-carlos-paz">Villa Carlos Paz</option>
                                    <option value="villa-maria">Villa Maria</option>
                                </select>
                            </div>



                            <div className="inputs-select-radio">
                                <label for="producto">producto</label>
                                <select name="producto" id="producto" required>
                                    <option label="Seleccione" selected></option>
                                    <option value="cubiertas">Cubiertas</option>
                                    <option value="amortiguadores">Amortiguadores</option>
                                    <option value="frenos">Frenos</option>
                                    <option value="mecanica">Mecanica General</option>
                                </select>
                            </div>

                            <div className="comentario">
                                <label for="comentario">Dejanos tu pregunta</label>
                                <textarea name="comentario" id="comentario" placeholder="Escriba aqui su comentario"
                                    cols="30" rows="10" required> </textarea>
                            </div>

                            <div className="terminos">
                                <label for="terminos">Acepta los terminos y condiciones</label>
                                <input type="checkbox" name="terminos" id="terminos" required />
                            </div>

                            <div className="button">
                                <button id="reset" type="reset">Limpiar Formulario</button>
                                <button type="" id="btnSubmit" value="enviar">Enviar</button>
                            </div>

                            <div className="contenedor-load" id="load">
                                <div className="lds-ripple">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>


                        </form>

                    </section>
                </section>
            </section>

        </main>

    )
}