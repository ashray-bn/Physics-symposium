import { useState } from "react";
export default function App() {
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
  ]
  const faqs = [
    { q: "Who can attend?", a: "Any student interested in physics." },
    { q: "Is it free?", a: "Yes, the event is completely free." },
    { q: "Do I need prior knowledge?", a: "Basic interest is enough." },
    { q: "Will certificates be given?", a: "Yes, to all participants." },
  ];

  const [open, setOpen] = useState(null);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="font-bold text-xl">Physics Symposium</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#schedule" className="hover:text-blue-600">Schedule</a>
            <a href="#speakers" className="hover:text-blue-600">Speakers</a>
            <a href="#faq" className="hover:text-blue-600">FAQs</a>
            <a href="#register" className="hover:text-blue-600">Register</a>
          </div>
        </div>
      </nav>
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-900 to-purple-800 text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Physics Symposium 2026</h1>
        <p className="text-xl mb-6">
          Exploring the Frontiers of Modern Physics
        </p>
        <p className="mb-8">March 15, 2026</p>
        <a
          href="#register"
          className="bg-white text-blue-900 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Register Now
        </a>
      </section>
      <section id="about" className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About the Event</h2>
        <p className="text-center text-gray-700">
          The Physics Symposium brings together students and enthusiasts to
          explore cutting-edge ideas in physics through talks, workshops,
          and discussions led by experts.
        </p>
      </section>
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


      <section id="faq" className="py-16 bg-gray-100 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((f, i) => (
            <div key={i} className="mb-4">
              <button
                className="w-full text-left font-semibold"
                onClick={() => setOpen(open === i ? null : i)}
                >
                {f.q}
              </button>
              {open === i && <p className="mt-2 text-gray-700">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
      <section id="register" className="py-16 max-w-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form className="space-y-4">
          <input className="w-full border p-2" placeholder="Name" />
          <input className="w-full border p-2" placeholder="Email" />
          <input className="w-full border p-2" placeholder="Year / Branch" />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </section>
      <footer className="py-6 text-center bg-gray-900 text-white">
        <p>Contact: spectrum@hyderabad.bits-pilani.ac.in</p>
        <p className="text-sm mt-2">© 2026 Physics Symposium</p>
      </footer>
    </>
  )
}
