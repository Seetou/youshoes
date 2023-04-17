import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { FaUser, FaBars, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../ContextProviders/CartContextProvider";
import { GlobalContext } from "../ContextProviders/GlobalContextProvider";
import { menuLinks } from "../Utils/data";
import { v4 as uuidv4 } from "uuid";

const Navigation = () => {
  const { openCartTab, setOpenCartTab, itemsList, productQuantity } =
    useContext(CartContext);
  const { openMobileMenu, setOpenMobileMenu } = useContext(GlobalContext);

  return (
    <NavigationWrapper>
      <div className="navigation__container">
        <Link to={"/"} className="logo-title">
          You Shoes
        </Link>
        <div className="navigation__links">
          <ul>
            {menuLinks.map((links) => (
              <li key={uuidv4()}>
                <NavLink to={links.url}>{links.page}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navigation__shopping-components">
          <button
            className="btn btn-header-cart"
            onClick={() => setOpenCartTab(!openCartTab)}
          >
            <FaShoppingCart />
            Cart ({Object.values(productQuantity).reduce((a, b) => a + b, 0)})
          </button>
          <button className="btn btn-header-login">
            <FaUser /> Login
          </button>
        </div>
        {/* MOBILE MENU BUTTON */}
        <div className="mobile-buttons-container">
          <button onClick={() => setOpenCartTab(!openCartTab)}>
            <FaShoppingCart />
            <span>
              {Object.values(productQuantity).reduce((a, b) => a + b, 0)}
            </span>
          </button>
          <button
            onClick={() => {
              setOpenMobileMenu(true);
              document.body.style.overflow = "hidden";
            }}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Navigation;

const NavigationWrapper = styled.nav`
  width: 100vw;
  padding: 2rem 0;
  background: var(--header-black-clr);

  .navigation__container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    padding: 1rem 0;
    max-width: 1920px;

    .logo-title {
      color: var(--primary-clr);
      font-weight: 600;
      font-size: 2rem;
    }

    .navigation__links ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;

      & li {
        display: inline-block;
        font-size: 1.5rem;
        & a {
          color: var(--header-clr);
          transition: all 0.2s ease-in-out;
          &.active,
          &:hover {
            color: var(--primary-clr);
          }
        }
      }
    }

    .navigation__shopping-components {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;

      .btn-header-cart {
        padding: 0.3rem 3rem;
        background: transparent;
        border: 1px solid var(--primary-clr);
        color: var(--header-clr);
        font-weight: 200;
      }

      .btn-header-login {
        gap: 0.5rem;
        padding: 0.3rem 3rem;
        background: var(--secondary-clr);
        text-transform: uppercase;
        color: var(--header-clr);
        font-weight: 200;
      }
    }

    .mobile-buttons-container {
      display: none;
    }
  }

  @media screen and (max-width: 75em) {
    .navigation__links,
    .navigation__shopping-components {
      display: none !important;
    }

    .mobile-buttons-container {
      display: flex !important;
      align-items: center;
      justify-content: flex-end;

      button {
        border: none;
        outline: none;
        background: none;
        cursor: pointer;
        position: relative;
        margin: 0 1rem;

        span {
          color: white;
          display: inline-block;
          background: #ae2012;
          border-radius: 100%;
          border: 1px solid white;
          font-size: 0.8rem;
          padding: 0.05rem 0.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -10px;
          right: -10px;
        }

        svg {
          font-size: 1.6rem;
          color: white;
          &:hover {
            color: var(--secondary-clr);
          }
        }
      }
    }
  }
`;
