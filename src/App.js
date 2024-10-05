import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import { ToastContainer } from "react-toastify";
import Culture from "./components/Culture";
import Mission from "./components/Mission";
import History from "./components/History";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navbar activeSection={activeSection} scrollTo={scrollTo} />
        <main>
          <Routes>
            {/* Route for the Home Page (which includes multiple sections) */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Mission />
                  <Services />
                  <Values />
                  <Culture />
                  <History />
                  <Contact />
                </>
              }
            />
            {/* Separate Route for the Careers Page */}
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </Router>
  );
}
