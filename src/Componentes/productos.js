import axios from 'axios';
import React from 'react';
import '../css/style.css';

import data from '../Componentes/productos.json';

export default class Productos extends React.Component {

    constructor(props) {
        super(props);



        this.state = {
            neumaticos: data


        }
    }

    /* 
        cambiarEstado = () => {
            //alert("cambie el objeto");
            let inputRodado = document.getElementById('inputRodado').value;
            this.setState({ rodado: inputRodado });
            console.log(inputRodado)
        }
    
        cambiarAño = () => {
            let inputAño = document.getElementById('inputAño').value;
            this.setState({ año: inputAño })
            console.log(inputAño)
        } */

    render() {
        return (<div>
            {/* <ul>

                {this.state.neumaticos.map((element) => <li key={element.id}> {element.title}  </li>)}

                   <li> Nombre {this.state.neumaticos[0].nombre}   </li>
                <li> Modelo {this.state.neumaticos[0].modelo}   </li>
                <li> Precio {this.state.neumaticos[0].precio}   </li> 
        </ul> */}
            <main className="main-productos">


                {/* <section data-aos="flip-left" classNameName="titulos">

                    <div>
                        <h4>/PRODUCTOS</h4>
                        <h1>NUESTROS PRODUCTOS</h1>
                    </div>

                    <div className="select-productos">
                        <select onChange="cambioProductos()" name="" id="selectProducts">
                            <option value="producto">PRODUCTOS</option>
                            <option value="oferta">OFERTAS</option>
                        </select>
                    </div>
                </section> */}


                <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="contenedor-productos">

                    {/*    <a id="cubiertas"></a>
                    <div id="titulosProductos">
                    </div>

                    <div className="container-cards">

                        <div className="card" id="card">
                            <div className="imagen"><img id="img-producto" src="{productosCard.img}" alt="" /></div>
                            <h2 className="title-producto">{productosCard.title}<span>{productosCard.subTitle}</span></h2>
                            <div className="seccion2">
                                <p className="precio-producto"> $ {productosCard.price}</p>
                                <button id="${productosCard.id}">Agregar</button>
                            </div>

                        </div>

                    </div> */}

                    <div className="linea">
                        <hr />
                    </div>

                </section>




            </main>


        </div>);
    }



}

/* export default function Productos() {


    return (
        <div>
            <p>hola mundo</p>
        </div>)


}
 */




/*  return (
     <main classNameName="main-productos">


         <section data-aos="flip-left" classNameName="titulos">

             <div>
                 <h4>/PRODUCTOS</h4>
                 <h1>NUESTROS PRODUCTOS</h1>
             </div>

             <div classNameName="select-productos">
                 <select onChange="cambioProductos()" name="" id="selectProducts">
                     <option value="producto">PRODUCTOS</option>
                     <option value="oferta">OFERTAS</option>
                 </select>
             </div>
         </section>


         <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" classNameName="contenedor-productos">

             <a id="cubiertas"></a>
             <div id="titulosProductos">
             </div>

             <div classNameName="container-cards">

                 <div classNameName="card" id="card">

                 </div>

             </div>

             <div classNameName="linea">
                 <hr />
             </div>

         </section>




     </main>
 ) */

/*  className Productos{

 } */

