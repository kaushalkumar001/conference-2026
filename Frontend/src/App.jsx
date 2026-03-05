import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";   // ✅ Import hooks properly
import Home from "../Pages/Home";
import Navbar from "./components/Navbar";
import Contact from "../Pages/Contact";
import ScrollToHash from "./ScrollToHash"; // also fixed path
import "./App.css";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
    <div className="loading">
      <svg width="64px" height="48px">
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
        <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
      </svg>
    </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;