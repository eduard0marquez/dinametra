import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getData } from "../../helpers/Appi";

function HomePage() {
    const [objetoCercano,setObjetoCercano]=useState([])
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const datos = (data) => {
    const api = getData()
        .then((response) => {
            setObjetoCercano(response.near_earth_objects["2015-09-07"]);
        console.log(response.near_earth_objects["2015-09-07"]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
  return (
    <div>
      <Form onSubmit={handleSubmit(datos)}>
        <div>
          <input type="date" {...register("fecha-inicio")} />
        </div>

        <input type="date" {...register("fecha-fin")} />
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
                          <td>Diametro Estimado(KM)</td>
                          <td>Es potencialmente peligroso</td>
            </tr>
          </thead>
          <tbody>
            {objetoCercano.map((objeto) => (
              <tr>
                    <td>{objeto.id}</td>
                    <td>{objeto.name}</td>
                    <td>{objeto.estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)} KM</td>
                    <td>{objeto.is_potentially_hazardous_asteroid ? "Sí" : "No"}</td>
                    
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Button variant="danger" onClick={Logout}>
        Cerrar Sesión
      </Button>
    </div>
  );
}

export default HomePage;
