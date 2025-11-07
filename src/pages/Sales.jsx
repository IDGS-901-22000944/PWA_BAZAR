import { useEffect, useState } from "react";
import { getSales } from "../api.js";
import { Table, Spinner, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // 

export default function Sales() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate(); //

  useEffect(() => {
    (async () => {
      try {
        const data = await getSales();
        setSales(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Compras Registradas</h3>
        {/*  Botón para volver a la página principal */}
        <Button variant="secondary" onClick={() => navigate("/")}>
           Volver al inicio
        </Button>
      </div>

      <Table striped hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((s, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{s.productName}</td>
              <td>${s.price}</td>
              <td>{new Date(s.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
