// src/api.js
//const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:7015";
const API_BASE = import.meta.env.VITE_API_BASE ?? "https://localhost:7015";


export async function searchItems(q) {
  const res = await fetch(`${API_BASE}/api/items?q=${encodeURIComponent(q)}`);
  if (!res.ok) throw new Error("Error al buscar productos");
  return res.json();
}

export async function getItem(id) {
  const res = await fetch(`${API_BASE}/api/items/${id}`);
  if (!res.ok) throw new Error("Producto no encontrado");
  return res.json();
}

export async function addSale({ productId, productName, price, date }) {
  const res = await fetch(`${API_BASE}/api/sales`, { //  ruta correcta
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, productName, price, date }),
  });
  if (!res.ok) throw new Error("No se pudo registrar la compra");
  return res.json();
}


export async function getSales() {
  const res = await fetch(`${API_BASE}/api/sales`);
  if (!res.ok) throw new Error("Error al cargar las compras");
  return res.json();
}
