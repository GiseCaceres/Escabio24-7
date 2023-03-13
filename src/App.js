import React from "react";
import Aside from "./components/aside";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./CSS/style.css";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Aside />} />
          <Route path="/Cards/:category" element={<Card />} />

          {/* <Main />
           */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
