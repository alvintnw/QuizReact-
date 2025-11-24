"use client";

import { useState } from "react";

export default function NewPetPage() {
  const [form, setForm] = useState({
    name: "",
    species: "",
    age: 0,
    price: 0,
    description: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch("/api/pets", {
      method: "POST",
      body: JSON.stringify(form),
    });

    window.location.href = "/pets";
  }

  return (
    <div className="container mt-5">
      <h2>Tambah Hewan Baru</h2>

      <form onSubmit={handleSubmit} className="mt-3">
        <input className="form-control mb-2" 
          placeholder="Nama" 
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input className="form-control mb-2" 
          placeholder="Jenis" 
          onChange={(e) => setForm({ ...form, species: e.target.value })}
        />

        <input className="form-control mb-2" 
          placeholder="Umur" 
          type="number"
          onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}
        />

        <input className="form-control mb-2" 
          placeholder="Harga"
          type="number"
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
        />

        <textarea className="form-control mb-2"
          placeholder="Deskripsi"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button className="btn btn-primary">Simpan</button>
      </form>
    </div>
  );
}
