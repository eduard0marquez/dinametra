import React from "react";
import "./NavBar.css";
import { Container,Nav,Navbar,Dropdown, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.removeItem("user");
        Swal.fire({
              icon: "success",
              title: `¡ ${`La sesión se cerro correctamente`}!`,
              text: "Hasta pronto .",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
            navigate("/auth", { replace: true });
    }
  

    return (
      <>
        <Container className="menu">
          <Navbar className="naveg">
            <Container className="contain">
              <Navbar.Brand className="navbar-brand dist">
                <Link to="/">
                  <img
                    className="logo"
                    src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
                    alt="Logo"
                  />
                </Link>
                <Nav className="iconos">
                  <a onClick={Logout}>
                    <FaSignOutAlt size={35} color="#ff3410" />
                  </a>
                </Nav>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      </>
    );
}

export default NavBar;
