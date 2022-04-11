import { Link } from "react-router-dom"
export default function Icono(props) {
    return (
        <>

            <Link to={props.link}><img className="img-iconos" src={props.icon}
                alt="icono-home" />{props.titulo}</Link>
        </>
    )
}