import { Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar.jsx";

export default function Home() {
  return (
    <Row className="justify-content-center text-center">
      <Col xs={12} md={6}>
        <img src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" width="80" alt="" />
        <h1 className="my-3">Bazar Online</h1>
        <SearchBar />
      </Col>
    </Row>
  );
}
