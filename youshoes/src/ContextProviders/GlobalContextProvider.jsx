import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        openMobileMenu,
        setOpenMobileMenu,
        closeMobileMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
