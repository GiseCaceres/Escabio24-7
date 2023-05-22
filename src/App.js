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
import Products from "./components/Products";

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
              <Route path="/producto/:category" element={<Products />} />
              <Route path="/producto/:category/:id" element={<Products />} />
              <Route path="/producto" element={<Products />} />
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
