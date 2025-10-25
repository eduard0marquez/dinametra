import React, { useState } from "react";
import { Button, Form, Pagination, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getData } from "../../helpers/Appi";
import "./HomePage.css";
import NavBar from "../NavBar/NavBar";
import { BarCh } from "../Graficos/BarCh";
import { PieChart } from "../Graficos/PieChart";







function HomePage() {
  /*Se Crea un objeto llamado objeto cercano el cual es una variable de estado para asignarle un valor de tipo arreglo*/
  const [objetoCercano, setObjetoCercano] = useState([]);
  /*Se Crea un objeto llamado labelss que son los titulos para la grafica de barras*/
  const labelss = objetoCercano.map((datoo) => datoo.name);
  /*Se Crea un objeto llamado dataa que son los datos numericos para la grafica de barras*/
  const dataa = objetoCercano.map(
    (datos) => datos.estimated_diameter.kilometers.estimated_diameter_max
  );
  /*Se Crea una variable llamada dataPieOp que es el arreglo convertido a valor obtenido*/
  const dataPieOp = objetoCercano.map((datoss) =>
    datoss.is_potentially_hazardous_asteroid ? "Sí" : "No"
  );
  /*Se Crea una variable llamada contador que es para contar todos los SI existentes en el arreglo anterior*/
  const contador = dataPieOp.reduce((acumulador, valorActual) => {
    if (valorActual === "Sí") {
      return acumulador + 1;
    }
    return acumulador;
  }, 0);
  /*Se Crea una variable llamada dataPie que es para proporcionar el dato anterior, y la longitud del arreglo origen menos el conteo de Si, en ese caso seran los NO*/
  const dataPie = [contador, dataPieOp.length - contador];

  /*Se declara una variable para que si no esta ejecutada la consulta no la considere como valida y no muestre ni la tabla ni las graficas*/
  const [consulta, setConsulta] = useState();

  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const datos = (dates) => {
    const api = getData(dates["fecha-inicio"], dates["fecha-fin"])
      .then((response) => {
        setObjetoCercano(response.near_earth_objects[dates["fecha-inicio"]]);
        console.log(response.near_earth_objects[dates["fecha-inicio"]]);

        console.log(`data pie: ${dataPie}`);
        setConsulta(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <figure className="text-center title">
        <blockquote className="blockquote">
          <p>Objetos Cercanos a la tierra</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Consulte una lista de asteroides según{" "}
          <cite title="Source Title">
            su fecha de aproximación más cercana a la Tierra.
          </cite>
        </figcaption>
      </figure>
      <div className=" formularioo">
        <Form onSubmit={handleSubmit(datos)}>
          <legend className="tabletitle">
            Rango de fechas para ver los objetos cercanos a la tierra
          </legend>
          <div className="fechas row">
            <div className="fecha col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 ">
              <input type="date" required {...register("fecha-inicio")} />
              <label className="titulo">Fecha Inicial</label>
            </div>
            <div className="fecha col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 ">
              <input type="date" required {...register("fecha-fin")} />
              <label className="titulo">Fecha Final</label>
            </div>

            <Button
              variant="primary"
              type="submit"
              className="col-5 col-md-2 col-lg-2 col-xl-2 col-xxl-2 buton"
            >
              Consultar
            </Button>
          </div>
        </Form>
      </div>
      <div className="tabla">
        {/* en caso que consulta sea nula o falsa no muestra nada , de lo contrario muestra la tabla */}
        {consulta ? (
          <Table title="Grafica de barras con el diametro de cada objeto cercano a la tierra">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <td>Diametro Estimado(KM)</td>
                <td>Es potencialmente peligroso</td>
              </tr>
            </thead>
            <tbody>
              {/* se recorre el arreglo para que muestre en pantalla las veces iguales al arreglo con los valores indicados */}
              {objetoCercano.map((objeto) => (
                <tr key={objeto.id}>
                  <td>{objeto.id}</td>
                  <td>{objeto.name}</td>
                  <td>
                    {objeto.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
                      3
                    )}
                    KM
                  </td>
                  <td>
                    {objeto.is_potentially_hazardous_asteroid ? "Sí" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </div>
      {/* en caso que consulta sea nula o falsa no muestra nada , de lo contrario muestran las graficas */}
      {consulta ? (
        <div className="graficos row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-5 mb-2 ">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>Grafico de Barras</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Grafico que muestra la dimencion de{" "}
                <cite title="Source Title">
                  los objetos cercanos a la Tierra en KM.
                </cite>
              </figcaption>
            </figure>
            <div className="graph " style={{ width: "100%" }}>
              <div
                style={{ width: "100%", height: "100%" }}
                className="bar"
                title="Grafica de barras con el diametro de cada objeto cercano a la tierra"
              >
                <BarCh labels={labelss} data={dataa} />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-0">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>Grafico de Pastel</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                En el Grafico se muestra cuantos objetos{" "}
                <cite title="Source Title">
                  son o no potencialmente peligrosos para la Tierra.
                </cite>
              </figcaption>
            </figure>

            <div className="graph" style={{ whidth: "100%" }}>
              <div
                style={{ width: "100%", height: "100%" }}
                className="bar"
                title="Grafica de Pai contando los objetos que son o no potencialmente peligrosos para la tierra"
              >
                <PieChart data={dataPie} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default HomePage;
