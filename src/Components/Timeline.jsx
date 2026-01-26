export default function Timeline() {
  return (
    <section id="schedule" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Event Schedule</h2>
      <div className="max-w-4xl mx-auto grid gap-4 px-4">
        {[
          "Opening Keynote",
          "Quantum Mechanics Workshop",
          "Networking Break",
          "Closing Session",
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
