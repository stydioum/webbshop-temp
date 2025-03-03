import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./Navbar";
import About from "./components/About";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";
import OrderConfirmation from "./components/OrderConfirmation";
import "./styles.css";

const App = () => {
  return (
    <CartProvider>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
