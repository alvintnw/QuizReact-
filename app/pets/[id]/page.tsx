async function getPet(id: any) {
  const res = await fetch(`http://localhost:3000/api/pets/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function PetDetail({ params }: any) {
  const pet = await getPet(params.id);

  return (
    <div className="container mt-5">
      <h2>Detail Hewan</h2>
      <div className="card p-4 mt-3">
        <h3>{pet.name}</h3>
        <p>Jenis: {pet.species}</p>
        <p>Harga: Rp {pet.price}</p>
        <p>Deskripsi: {pet.description}</p>

        <a href="/pets" className="btn btn-secondary mt-3">Kembali</a>
      </div>
    </div>
  );
}
