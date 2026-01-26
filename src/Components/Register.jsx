export default function Register() {
  return (
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
  );
}
