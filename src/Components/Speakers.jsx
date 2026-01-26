export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Alice Newton",
      topic: "Quantum Computing",
      desc: "Exploring computation at the quantum level.",
    },
    {
      name: "Dr. Brian Maxwell",
      topic: "Astrophysics",
      desc: "Understanding black holes and galaxies.",
    },
    {
      name: "Dr. Clara Bose",
      topic: "Particle Physics",
      desc: "Inside the world of fundamental particles.",
    },
  ];

  return (
    <section id="speakers" className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Speakers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {speakers.map((s, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <h3 className="font-bold text-xl">{s.name}</h3>
            <p className="italic">{s.topic}</p>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
