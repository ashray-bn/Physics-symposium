import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Speakers from "./components/Speakers";
import FAQ from "./components/FAQ";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Speakers />
      <FAQ />
      <Register />
      <Footer />
    </>
  );
}
