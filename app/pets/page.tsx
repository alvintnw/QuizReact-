async function fetchPets() {
  const res = await fetch("http://localhost:3000/api/pets", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pets");
  }

  return res.json();
}

export default async function PetsPage() {
  const pets = await fetchPets();

  return (
    <div className="container mt-5">
      <h2>Daftar Hewan</h2>
      <a href="/pets/new" className="btn btn-primary my-3">Tambah Hewan</a>

      <div className="row">
        {pets.map((p: any) => (
          <div key={p.id} className="col-md-4">
            <div className="card p-3 mb-3">
              <h4>{p.name}</h4>
              <p>Jenis: {p.species}</p>
              <p>Harga: Rp {p.price}</p>

              <a href={`/pets/${p.id}`} className="btn btn-info btn-sm me-2">Detail</a>
              <a href={`/pets/${p.id}/edit`} className="btn btn-warning btn-sm me-2">Edit</a>

              {/* DELETE BUTTON */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await fetch(`/api/pets/${p.id}`, { method: "DELETE" });
                  window.location.reload();
                }}
              >
                <button className="btn btn-danger btn-sm mt-2">Delete</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
