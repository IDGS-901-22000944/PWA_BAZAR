import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars.jsx";

export default function ProductCard({ p }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={p.thumbnail} alt={p.title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{p.title}</Card.Title>
        <Card.Text className="flex-grow-1">{p.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <strong>${Number(p.price).toFixed(2)}</strong>
          <RatingStars value={p.rating} />
        </div>
        <Button as={Link} to={`/item/${p.id}`} className="mt-3">
          Ver detalle
        </Button>
      </Card.Body>
    </Card>
  );
}
