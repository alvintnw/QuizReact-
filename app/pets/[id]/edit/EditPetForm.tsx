"use client";

import { useState } from "react";

export default function EditPetForm({ pet }: any) {
  const [form, setForm] = useState({
    name: pet.name,
    species: pet.species,
    age: pet.age,
    price: pet.price,
    description: pet.description,
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch(`/api/pets/${pet.id}`, {
      method: "PUT",
      body: JSON.stringify(form),
    });

    window.location.href = "/pets"; // Redirect ke halaman list
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">

      <label className="form-label">Nama Hewan</label>
      <input
        className="form-control mb-3"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <label className="form-label">Jenis</label>
      <input
        className="form-control mb-3"
        value={form.species}
        onChange={(e) => setForm({ ...form, species: e.target.value })}
      />

      <label className="form-label">Umur</label>
      <input
        type="number"
        className="form-control mb-3"
        value={form.age}
        onChange={(e) =>
          setForm({ ...form, age: Number(e.target.value) })
        }
      />

      <label className="form-label">Harga</label>
      <input
        type="number"
        className="form-control mb-3"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: Number(e.target.value) })
        }
      />

      <label className="form-label">Deskripsi</label>
      <textarea
        className="form-control mb-3"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button className="btn btn-primary">Simpan Perubahan</button>
      <a href="/pets" className="btn btn-secondary ms-2">
        Batal
      </a>
    </form>
  );
}
