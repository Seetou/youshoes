import React, { useContext } from "react";
import { CartContext } from "../ContextProviders/CartContextProvider";
import styled from "styled-components";

const CartBackdrop = () => {
  const { openCartTab, setOpenCartTab } = useContext(CartContext);
  return openCartTab && <CartBackdropWrapper></CartBackdropWrapper>;
};

export default CartBackdrop;

const CartBackdropWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
`;
