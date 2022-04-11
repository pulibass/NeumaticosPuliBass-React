import '../css/style.css';

export default function Cart() {
    return (

        <main className="main-cart">

            <div data-aos="flip-left" className="titulos">
                <h4>/CARRO DE COMPRAS</h4>
                <h1>MI CARRITO</h1>
            </div>

            <div className="carrito">
                <h2>Carrito</h2>

                <div className="titulos">
                    <div className="titulo-carrito">
                        <p>Producto</p>
                    </div>
                    <div className="titulo-carrito">
                        <p>Precio</p>
                    </div>
                    <div className="titulo-carrito">
                        <p>Sub Total</p>
                    </div>
                    <div className="titulo-carrito">
                        <p>Cantidad</p>
                    </div>
                </div>
                <div id="contenedorCarro" className="contenedor-productos">
                    <div className="linea">
                    </div>
                </div>
                <div className="compra">
                    <div className="total">
                        <h4 id="compra">Total: $</h4>
                    </div>
                    <div className="boton-comprar">
                        <button id="comprar">comprar</button>
                    </div>
                </div>
            </div>
        </main>

    )
}