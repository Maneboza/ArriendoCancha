import "./NavBarMenu.css";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../../img/logo2.png";
import logo1 from "../../img/img3.png";

export const NavBarMenu = () => {
  return (
    <Navbar className="navbar" expand={false}>
      <Container fluid>
        {/* Title */}
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alt="logo" />{" "}
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
          {/* Close Button - Expand */}
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${false}`}
            ></Offcanvas.Title>
            <img src={logo1} className="sidebar-logo" alt="sidebar-logo" />
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="sidebar-link" href="/">
                Home
              </Nav.Link>
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
  );
};
