import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import About_us from "./pages/About_us";
import Contact_us from "./pages/Contact_us";
import OurWork from "./pages/our_work";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <Router>
      <main className="font-sans min-h-screen flex flex-col">
        <Navbar />

        {/* Page content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about_us" element={<About_us />} />
            <Route path="/our_work" element={<OurWork />} />
            <Route path="/projects" element={<div>Projects Page</div>} />
            <Route path="/contact_us" element={<Contact_us />} />
          </Routes>
        </div>

        {/* Global footer */}
        <Footer />
      </main>
    </Router>
  );
}

export default App;
