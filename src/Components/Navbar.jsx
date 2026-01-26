export default function Navbar() {
  return (
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
  );
}
