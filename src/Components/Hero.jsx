export default function Hero() {
  return (
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
  );
}
