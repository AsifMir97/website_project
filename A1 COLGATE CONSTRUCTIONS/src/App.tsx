import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import About_us from "./pages/About_us";






function App() {
  return (
    <Router>
      <main className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about_us" element={<About_us />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
