// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AppNavbar from "./components/AppNavbar.jsx";
import Home from "./pages/Home.jsx";
import Results from "./pages/Results.jsx";
import ItemDetail from "./pages/ItemDetail.jsx";
import Sales from "./pages/Sales.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppNavbar />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Results />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);
