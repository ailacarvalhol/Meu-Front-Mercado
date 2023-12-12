import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Historic from "./pages/historic";
import React from "react";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ResponsiveAppBar />}>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="historic" element={<Historic />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}





