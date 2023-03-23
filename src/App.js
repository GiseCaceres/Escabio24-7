import React from "react";
import Aside from "./components/aside";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./CSS/style.css";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Aside />} />
          <Route path="/aside" element={<Aside />} />
          <Route path="/Cards/:category" element={<Card />} />
          <Route path="/producto/:id" element={<ItemDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
