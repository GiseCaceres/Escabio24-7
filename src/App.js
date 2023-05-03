import React from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./CSS/style.css";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import CartContextProvider from "./components/Context";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <CartContextProvider
        children={
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Aside />} />
              <Route path="/aside" element={<Aside />} />
              <Route path="/Cards/:category" element={<Card />} />
              <Route path="/producto/:id" element={<ItemDetail />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        }
      />
    </div>
  );
}

export default App;
