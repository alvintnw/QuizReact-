export default async function ExplorePage() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await res.json();

  const breeds = Object.keys(data.message);

  return (
    <div className="container mt-5">
      <h2>Explore: Daftar Ras Anjing</h2>

      <ul className="list-group mt-3">
        {breeds.map((b) => (
          <li key={b} className="list-group-item">{b}</li>
        ))}
      </ul>
    </div>
  );
}
