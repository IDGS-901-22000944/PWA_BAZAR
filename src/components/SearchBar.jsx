import { Form, InputGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function SearchBar({ initial = "" }) {
  const [q, setQ] = useState(initial);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    navigate({ pathname: "/items", search: `?${createSearchParams({ search: q.trim() })}` });
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <Form.Control
          placeholder="Buscar producto..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <Button type="submit">Buscar</Button>
      </InputGroup>
    </Form>
  );
}
