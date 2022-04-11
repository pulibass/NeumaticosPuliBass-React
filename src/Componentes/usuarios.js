import '../css/style.css'

export default function Usuarios() {
    return (

        <main className="main-usuarios">

            <section data-aos="flip-left" className="titulos">

                <div>
                    <h4>/USUARIO</h4>
                    <h1>CREA TU USUARIO O INGRESA</h1>
                </div>

            </section>


            <section className="contenedor-usuarios">


                <section data-aos="fade-left" className="usuario-registrado">

                    <form>

                        <div className="form-floating mb-3 inputs-texts">
                            <input type="text" className="form-control" id="input-name-user" placeholder="usuario" />
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                                className="svg-inline--fa fa-user icono-usuarios" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
                                </path>
                            </svg>
                            <label htmlFor="floatingInput">Usuario</label>
                        </div>

                        <div className="form-floating">
                            <input type="password" className="form-control" id="input-password-user" placeholder="Password" />
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="key"
                                className="svg-inline--fa fa-key icono-usuarios" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M336 0c-97.2 0-176 78.8-176 176c0 14.71 2.004 28.93 5.406 42.59l-156 156C3.371 380.6 0 388.8 0 397.3V496C0 504.8 7.164 512 16 512l96 0c8.836 0 16-7.164 16-16v-48h48c8.836 0 16-7.164 16-16v-48h57.37c4.242 0 8.312-1.688 11.31-4.688l32.72-32.72C307.1 349.1 321.3 351.1 336 351.1c97.2 0 176-78.8 176-176S433.2 0 336 0zM376 176c-22.09 0-40-17.91-40-40S353.9 96 376 96S416 113.9 416 136S398.1 176 376 176z">
                                </path>
                            </svg>
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>

                        <div className="olvido-contraseña">
                            <a href="   ">¿Olvidaste tu contraseña?</a>
                        </div>

                        <div className="boton-ingreso">
                            <button id="btn-ingresar" type="submit">ingresar</button>
                        </div>

                        <div className="redes-contacto">

                            <div className="ingreso-facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-facebook icon-facebook " viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                <button type="submit">continuar con facebook</button>
                            </div>

                            <div className="ingreso-google">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-google icon-google" viewBox="0 0 16 16">
                                    <path
                                        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                </svg>
                                <button type="submit">ingresar con google</button>
                            </div>

                        </div>
                    </form>

                </section>

                <section>
                    <div className="linea-divisoria"></div>
                </section>

                <section data-aos="fade-right" className="usuario-nuevo">

                    <form>

                        <div className="contenedor-text">

                            <div className="nuevo-usuario">
                                <label htmlFor="nombre-usuario-nuevo">NOMBRE</label>
                                <input type="text" id="nombre-usuario-nuevo" name="nombre-usuario-nuevo" required
                                    placeholder="Nombre" />
                            </div>
                            <div className="nuevo-usuario">
                                <label htmlFor="apellido-usuario-nuevo">APELLIDO</label>
                                <input type="text" id="apellido-usuario-nuevo" name="apellido-usuario-nuevo" required
                                    placeholder="Apellido" />
                            </div>

                            <div className="nuevo-usuario">
                                <label htmlFor="usuario">USUARIO</label>
                                <input type="text" id="usuario" name="usuario" placeholder="@usuario" />
                            </div>
                            <div className="nuevo-usuario">
                                <label htmlFor="contraseña">CONTRASEÑA</label>
                                <input type="password" id="contraseña" name="contraseña" placeholder=".................." />
                            </div>

                        </div>

                        <div className="contenedor-fecha">
                            <label className="titulo-fecha" htmlFor="fecha">FECHA DE NACIMIENTO</label>
                            <input type="date" id="fecha" name="fecha" />
                        </div>

                        <div className="contenedor-sexo">

                            <label htmlFor="sexo">SELECCIONA TÚ GENERO</label>
                            <select name="sexo" id="sexo">
                                <option value="Seleccione">Seleccione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Personalizado">Personalizado</option>
                            </select>

                        </div>

                        <div className="politicas-usuario">
                            <h6>Al hacer clic en "Registrarte", aceptas nuestras Condiciones, la Política de datos y
                                la
                                Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes
                                desactivar cuando quieras.</h6>
                        </div>

                        <div className="boton-ingreso-nuevo">
                            <button type="submit">REGISTRARTE</button>
                        </div>

                    </form>

                </section>

            </section>

        </main>
    )
}