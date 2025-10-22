import React from "react";
import "./NotFound.css";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();
    const Home = () => {
        navigate("/", { replace: true });
    }
    return (
      <div className="error">
        <Image className="gif"
          src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyeDZhbWEyMWxpMzU1OWZvc2MyNjZjNzV5d3IzcngxNW4zdG5kOHEwZCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/JY5dig6xQ9S7u/source.gif"
          alt="Imagen de error 404"
        />
        <h1>Error 404</h1>
        <h2 className="oops">¡OOPS!</h2>
        <p className="mensaje">Página no encontrada</p>
        <Button onClick={Home} alt="Regresar al Inicio">Regresar al Inicio</Button>
      </div>
    );
}

export default NotFound;
