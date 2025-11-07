import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchItems } from "../api.js";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import SearchBar from "../components/SearchBar.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Results() {
  const [params] = useSearchParams();
  const q = params.get("search") || "";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

useEffect(() => {
  (async () => {
    try {
      setLoading(true);
      const data = await searchItems(q);
      setItems(data.products || []); // 
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  })();
}, [q]);


  return (
    <>
      <SearchBar initial={q} />
      <h5 className="mt-3">Resultados para "{q}"</h5>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <Row className="mt-3 g-3">
        {items.map((p) => (
          <Col key={p.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard p={p} />
          </Col>
        ))}
      </Row>
    </>
  );
}
