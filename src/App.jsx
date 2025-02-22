import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";  
import Navbar from "./Navbar";
import About from "./components/About";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";
import OrderConfirmation from "./components/OrderConfirmation";
import "./styles.css";

const App = () => {
  const [cart, setCart] = useState([]);  

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container">
      <Navbar />
      <Routes>
      <Route path="/about" element={<About />} /> 
        <Route
          path="/product-list"
          element={<ProductList addToCart={addToCart} />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCart cart={cart} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </div>
  );
};

export default App;
