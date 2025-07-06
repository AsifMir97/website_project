import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <main className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
