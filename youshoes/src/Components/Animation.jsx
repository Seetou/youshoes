import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Clothes from "../Pages/Clothes";
import Shoes from "../Pages/Shoes";
import Page404 from "../Pages/Page404";
import ProductDetails from "../Pages/ProductDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import { AnimatePresence } from "framer-motion";

const Animation = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Animation;
