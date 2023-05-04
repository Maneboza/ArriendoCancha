import "./NavBarMenu.css";
// import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import logoName from "../../imagenes/logos/logoHome.png";
import {Nav, Navbar, Container} from "react-bootstrap";

export const NavBarMenu = () => {
  return (

    <Container fluid>
      <nav className="navbar navbar-expand-lg navbar-dark">

          <Navbar.Brand href="/">
            <img className="logo" src={logoName} alt="logoName" />
          </Navbar.Brand> 
      
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav"  >
            <ul className="navbar-nav">
              <Nav.Link className="link" href="/">
                  Inicio 
              </Nav.Link>
              <Nav.Link className="link " href="#1">
                  Servicios 
              </Nav.Link>
              <Nav.Link className="link " href="#2">
                  Planes 
              </Nav.Link>
            </ul>

            <ul className="navbar-nav ms-auto">
              <Nav.Link className="link-like-bt" href="/login">
                Inicia Sesión 
              </Nav.Link>
              <Nav.Link className="link-like-bt" href="/register">
                Registro
              </Nav.Link>

              </ul>
          </div>

          {/* ESTA PARTE ES DEL MENU DESPLEGABLE
          <Navbar.Toggle className="" aria-controls={`offcanvasNavbar-expand-${false}`}/>
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-${false}`} aria-labelledby={`offcanvasNavbarLabel-expand-${false}`} placement="end">
  
              Close Button - Expand
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${false}`}
              ></Offcanvas.Title>
              <img src={""} className="sidebar-logo" alt="sidebar-logo" />
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="sidebar-link" href="/login">
                    Inicio Sesión
                </Nav.Link>
                <Nav.Link className="sidebar-link" href="/signup">
                    Registro
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas> */}

      </nav>
      </Container>
);
};




/* 


<Navbar className="navbar" expand={true}>
      <Container fluid>

        <Navbar.Brand href="/">
          <img className="logo" src={""} alt="logo" />{" "}
        </Navbar.Brand>

        <div className="links">
          <Nav.Link href="/">
            Nosotros
          </Nav.Link>
          <Nav.Link href="/" >
            Servicios
          </Nav.Link>
          <Nav.Link href="/">
            Contacto
          </Nav.Link>
        </div>


        <Navbar.Toggle
          className=""
          aria-controls={`offcanvasNavbar-expand-${false}`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="end"
        >
          Close Button - Expand
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${false}`}
            ></Offcanvas.Title>
            <img src={""} className="sidebar-logo" alt="sidebar-logo" />
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">

              <Nav.Link className="sidebar-link" href="/login">
                Inicia Sesión
              </Nav.Link>
              <Nav.Link className="sidebar-link" href="/signup">
                Crear Cuenta
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar> 
); */