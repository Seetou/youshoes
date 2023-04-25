import React from "react";
import { BrowserRouter } from "react-router-dom";
import Animation from "./Animation";
import Navigation from "./Navigation";
import Footer from "../Components/Footer";
import GlobalContextProvider from "../ContextProviders/GlobalContextProvider";
import CartContextProvider from "../ContextProviders/CartContextProvider";
import Cart from "./Cart";
import MobileNavigation from "./MobileNavigation";

const App = () => {
  return (
    <GlobalContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <MobileNavigation />
          <Navigation />
          <Cart />
          <Animation />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </GlobalContextProvider>
  );
};

export default App;
