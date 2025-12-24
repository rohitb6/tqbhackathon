import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/About1";
import Brands from "./pages/Brands";
import Location from "./pages/Location";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/location" element={<Gallery />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </StrictMode>
);
