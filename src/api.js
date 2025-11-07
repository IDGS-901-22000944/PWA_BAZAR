// src/api.js

// URL base del backend (Render)
const API_BASE = "https://bazarexam.onrender.com";

// ==========================
// Buscar productos
// ==========================
export async function searchItems(q) {
  const res = await fetch(`${API_BASE}/api/items?q=${encodeURIComponent(q)}`);
  if (!res.ok) throw new Error("Error al buscar productos");
  return res.json();
}

// ==========================
// Obtener producto por ID
// ==========================
export async function getItem(id) {
  const res = await fetch(`${API_BASE}/api/items/${id}`);
  if (!res.ok) throw new Error("Producto no encontrado");
  return res.json();
}

// ==========================
// Registrar una compra
// ==========================
export async function addSale({ productId, productName, price, date }) {
  const res = await fetch(`${API_BASE}/api/sales`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, productName, price, date }),
  });
  if (!res.ok) throw new Error("No se pudo registrar la compra");
  return res.json();
}

// ==========================
// Obtener todas las compras
// ==========================
export async function getSales() {
  const res = await fetch(`${API_BASE}/api/sales`);
  if (!res.ok) throw new Error("Error al cargar las compras");
  return res.json();
}
