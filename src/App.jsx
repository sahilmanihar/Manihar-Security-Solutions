import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

export default function App() {
  return (
    <div className="font-poppins bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />

      <Contact />
      <WhatsappButton/>
      <Footer />
    </div>
  );
}
