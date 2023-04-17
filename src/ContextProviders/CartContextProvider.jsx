import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const count = 1;

  const [openCartTab, setOpenCartTab] = useState(false);
  const [itemsList, setItemsList] = useState([]);
  const [productQuantity, setProductQuantity] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  const handleIncrementProduct = (product) => {
    if (productQuantity[product.id] < 10) {
      setProductQuantity({
        ...productQuantity,
        [product.id]: productQuantity[product.id] + 1,
      });
    }
  };

  const handleDecrementProduct = (product) => {
    if (productQuantity[product.id] > 1) {
      setProductQuantity({
        ...productQuantity,
        [product.id]: productQuantity[product.id] - 1,
      });
    }
  };

  const getTotal = () => {
    const total = itemsList.map(
      (item) => item.price * productQuantity[item.id]
    );

    setCartTotal(
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(total.reduce((a, b) => a + b, 0) / 10)
    );
  };

  const addToCart = (product) => {
    const currentProduct = itemsList.find((item) => item.id === product.id);
    if (currentProduct) {
      handleIncrementProduct(product);
    } else {
      setItemsList([...itemsList, product]);
      setProductQuantity({
        ...productQuantity,
        [product.id]: 1,
      });
    }
  };

  const removeItem = (product) => {
    setItemsList(itemsList.filter((item) => item.id !== product.id));
    setProductQuantity((prev) => {
      const copy = { ...prev };
      delete copy[product.id];
      return copy;
    });
  };

  useEffect(() => {
    getTotal();
  }, [productQuantity]);

  return (
    <CartContext.Provider
      value={{
        openCartTab,
        setOpenCartTab,
        itemsList,
        setItemsList,
        addToCart,
        removeItem,
        handleIncrementProduct,
        handleDecrementProduct,
        productQuantity,
        cartTotal,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
