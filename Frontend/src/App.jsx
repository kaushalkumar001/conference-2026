import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";   // ✅ Import hooks properly
import Home from "../Pages/Home";
import Navbar from "./components/Navbar";
import Contact from "../Pages/Contact";
import ScrollToHash from "./ScrollToHash";
import Loader from "../src/components/Loader.jsx"; // also fixed path
import RegisterPopup from "./components/RegisterPopup.jsx"; // also fixed path
import "./App.css";
import Login from "../Pages/Login.jsx"; // also fixed path

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;