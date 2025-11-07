import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem, addSale } from "../api.js";
import { Row, Col, Button, Alert, Spinner } from "react-bootstrap";

export default function ItemDetail() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getItem(id);
        setP(data);
      } catch {
        setMsg("Error al cargar producto");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleBuy = async () => {
    try {
      const res = await addSale({
        productId: p.id,
        productName: p.title,
        price: p.price,
        date: new Date().toISOString(),
      });
      if (res === true) setMsg("✅ Compra registrada correctamente");
    } catch {
      setMsg("❌ Error al registrar la compra");
    }
  };

  if (loading) return <Spinner />;
  if (!p) return <Alert variant="danger">Producto no encontrado</Alert>;

  return (
    <Row>
      <Col md={6}>
        <img src={p.thumbnail} alt={p.title} className="img-fluid" />
      </Col>
      <Col md={6}>
        <h2>{p.title}</h2>
        <p>{p.description}</p>
        <p><strong>${p.price}</strong></p>
        <p>Stock: {p.stock}</p>
        <Button onClick={handleBuy}>Comprar</Button>
        {msg && <Alert className="mt-3">{msg}</Alert>}
      </Col>
    </Row>
  );
}
