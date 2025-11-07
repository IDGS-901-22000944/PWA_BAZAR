import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="light" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Bazar Online</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/sales">Compras</Nav.Link>
          <Nav.Link
            href="https://twitter.com/intent/tweet?text=Visita%20Bazar%20Online"
            target="_blank"
          >
            Compartir
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
