import EditPetForm from "./EditPetForm";

async function getPet(id: any) {
  const res = await fetch(`http://localhost:3000/api/pets/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function EditPetPage({ params }: any) {
  const pet = await getPet(params.id);

  return (
    <div className="container mt-5">
      <h2>Edit Data Hewan</h2>
      <EditPetForm pet={pet} />
    </div>
  );
}
