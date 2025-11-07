import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ asegúrate de guardar el logo en src/assets/logo.png

export default function AppNavbar() {
  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(90deg, #a21caf 0%, #7e22ce 50%, #4c1d95 100%)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
      }}
      variant="dark"
      sticky="top"
    >
      <Container>
        {/* LOGO + NOMBRE */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center fw-bold text-white"
        >
          <img
            src={logo}
            alt="Logo"
            height="40"
            className="me-2 rounded-circle"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              padding: "4px",
              boxShadow: "0 0 10px rgba(255,255,255,0.4)",
            }}
          />
          <span style={{ fontSize: "1.3rem", letterSpacing: "0.5px" }}>
            Bazar Online
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              as={Link}
              to="/sales"
              className="text-white fw-semibold mx-2"
              style={{ transition: "0.3s" }}
            >
              Compras
            </Nav.Link>

            <Nav.Link
              href="https://twitter.com/intent/tweet?text=Visita%20Bazar%20Online"
              target="_blank"
              className="text-white fw-semibold mx-2"
              style={{ transition: "0.3s" }}
            >
              Compartir
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
