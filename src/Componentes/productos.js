import React from 'react';
import '../css/style.css';
import data from '../Componentes/productos.json';

export default class Productos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            neumaticos: data,
            ofertas: true
        }

        let productosArray = [];

        console.log(productosArray)

    }
    buttonCompra = (evt) => {
        alert("se hizo click en el producto con id " + evt.currentTarget.id);
        /*  for (const iterator of this.state.neumaticos) {
             iterator.push(this.productosArray)
             console.log(iterator)
         } */
    }


    cambiarEstado = () => {

        if (this.state.ofertas) {
            this.setState({ ofertas: false });
        } else {
            this.setState({ ofertas: true });
        }
    }


    render() {
        return (
            <main className="main-productos">
                <section data-aos="flip-left" className="titulos">
                    <div>
                        <h4>/PRODUCTOS</h4>
                        <h1>NUESTROS PRODUCTOS</h1>
                    </div>

                    <div className="select-productos">
                        <select onChange={this.cambiarEstado} name="" id="selectProducts">
                            <option value="producto">PRODUCTOS</option>
                            <option value="oferta">OFERTAS</option>
                        </select>
                    </div>
                </section>

                <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="contenedor-productos">
                    <a id="cubiertas"></a>
                    <div id="titulosProductos">
                    </div>

                    <div className="container-cards">
                        <div className="card" id="card">
                            {
                                this.state.neumaticos.map((element) => {


                                    if (this.state.ofertas === element.producto) {
                                        return <div className='tarjeta-contenido'>

                                            <div className="imagen"><img id="img-producto" src={element.img} alt="" /></div>
                                            <h2 className="title-producto">{element.title}<span>{element.subTitle}</span></h2>
                                            <div className="seccion2">
                                                <p className="precio-producto">{element.price}</p>
                                                <button onClick={this.buttonCompra} id={element.id}>Agregar</button>
                                            </div>
                                        </div>
                                    } else if (this.state.ofertas === element.producto) {
                                        return <div className='tarjeta-contenido'>

                                            <div className="imagen"><img id="img-producto" src={element.img} alt="" /></div>
                                            <h2 className="title-producto">{element.title}<span>{element.subTitle}</span></h2>
                                            <div className="seccion2">
                                                <p className="precio-producto">{element.price}</p>
                                                <button onClick={this.buttonCompra} id={element.id}>Agregar</button>
                                            </div>
                                        </div>

                                    }

                                    //if(this.ofertas) ? (alert("hola")):(alert("chau"));



                                })


                            }

                        </div>

                    </div>

                    <div className="linea">
                        <hr />
                    </div>

                </section>

            </main>
        );
    }
}



