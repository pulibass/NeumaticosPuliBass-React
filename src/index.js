import React from 'react'; // esta es la encarga de compilar el codigo react y lo saca a un archivo .js
import ReactDOM from 'react-dom/client'; //esta libreria se encarga de interactuar con el DOM
import './css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Componentes/header';
import Footer from './Componentes/footer';
/* import Inicio from './Componentes/inicio'; */
import Nosotros from './Componentes/nosotros';
import Contacto from './Componentes/contacto';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
//SPA SINGLE PAGE APPLICATION
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*  <Header />
    <App /> */}
    {/*  <Header /> */}
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/" element={<App />} />
        <Route index element={<App />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="inicio" element={<App />} />



      </Routes>
      <Footer />

      <Outlet />


    </BrowserRouter>
    {/*  <Inicio />
    <Nosotros /> */}

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();