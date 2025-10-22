
import { Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  /*Estructura de React Hook Form */
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  //Se ejecuta al enviar el formulario
  const Ingresar = async (data) => {
    //Se valida la informacion del formulario, si el usuario o contraseña son incorrectos
    if (data.email != "dinametra@dinametra.com" || data.password != "123456") {
      //Si no son correctos manda una alerta de error con sweetalert2
      Swal.fire({
        icon: "error",
        title: `¡Oops! ${"Usuario o contraseña incorrecta."}`,
        text: " favor de verificar.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } else {
      //Si son correctos manda una alerta de exito con sweetalert2
      Swal.fire({
        icon: "success",
        title: `¡ ${`Bienvenido de nuevo Dinametra`}!`,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      //Se guarda el usuario en el localstorage
      localStorage.setItem("user", JSON.stringify(data.email));
      //Se redirecciona al home
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit(Ingresar)}>
        <Image
          className="mb-4 log"
          src="https://cdn.prod.website-files.com/60b3da0d84c6fc314ee1893f/6827b128ff884362ad86ad23_dinametra.svg"
          alt="Logo"
        />

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            alt="email"
            {...register("email")}
            required
          />

          <label>Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            alt="contraseña"
            {...register("password")}
            required
          />

          <label>Constraseña</label>
        </div>

        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          alt="Boton Iniciar Sesion"
        >
          Iniciar Sesion
        </button>
        <p className="mt-5 mb-3 text-body-secondary">
          &copy; Eduardo Marquez 2025
        </p>
      </form>
    </div>
  );
}

export default Login;
