import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function HomePage() {
    const navigatee = useNavigate();
    const Logout = () => {
        localStorage.removeItem("user");
      Swal.fire({
        icon: "success",
          title: `¡ ${`La sesión se cerro correctamente`}!`,
        text: "Hasta pronto .",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
          timerProgressBar: true,
        
      });
      navigatee("/auth", { replace: true });
    };
    return <div>
      <Button variant="danger" onClick={Logout}>Cerrar Sesión</Button>
  </div>;
}

export default HomePage;
