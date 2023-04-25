import React from "react";
import Header from "../Components/Header";
import NewCollection from "../Components/NewCollection";
import Bestsellers from "../Components/Bestsellers";
import HeroSpirit from "../Components/HeroSpirit";
import CatalogPreview from "../Components/CatalogPreview";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <NewCollection />
      <Bestsellers />
      <CatalogPreview />
      <HeroSpirit />
    </motion.div>
  );
};

export default Home;
