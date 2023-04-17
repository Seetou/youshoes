import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { GlobalContext } from "../ContextProviders/GlobalContextProvider";
import GoogleButton from "react-google-button";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { menuLinks } from "../Utils/data";
import { v4 as uuidv4 } from "uuid";

const MobileNavigation = () => {
  const { openMobileMenu, setOpenMobileMenu, closeMobileMenu } =
    useContext(GlobalContext);
  return (
    openMobileMenu && (
      <MobileNavigationWrapper $openMobileMenu>
        <button className="close-mobile-navigation" onClick={closeMobileMenu}>
          <AiFillCloseCircle />
        </button>
        <div className="mobile-navigation-container">
          <Link to={"/"} className="logo-title" onClick={closeMobileMenu}>
            You Shoes
          </Link>
          <div className="mobile-navigation-links">
            <ul>
              {menuLinks.map((links) => (
                <li key={uuidv4()}>
                  <NavLink to={links.url} onClick={closeMobileMenu}>
                    {links.page}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <button className="mobile-btn btn-login">Login</button>
          <GoogleButton />
        </div>
      </MobileNavigationWrapper>
    )
  );
};

export default MobileNavigation;

const MobileNavigationWrapper = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background: var(--header-black-clr);
  z-index: 9999;
  opacity: ${(props) => (props.$openMobileMenu ? 1 : 0)};
  display: ${(props) => (props.$openMobileMenu ? "block" : "none")};
  transform: scale(${(props) => (props.$openMobileMenu ? 1 : 0)});
  transition: all 0.4s ease-in-out;

  .close-mobile-navigation {
    background: none;
    border: none;
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;

    svg {
      font-size: 3rem;
      color: white;
    }
  }

  .mobile-navigation-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo-title {
      color: var(--primary-clr);
      font-weight: 600;
      font-size: 3rem;
    }
    .mobile-navigation-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ul {
        list-style: none;

        li {
          margin: 2rem 0;
          text-align: center;
          a {
            font-size: 2rem;
            color: var(--header-clr);
            transition: all 0.2s ease-in-out;
            &.active,
            &:hover {
              color: var(--primary-clr);
            }
          }
        }
      }
    }

    .mobile-btn.btn-login {
      font-size: 1rem;
      font-weight: 600;
      padding: 0.8rem 1rem;
      background: var(--secondary-clr);
      color: white;
      border: none;
      width: 240px;
      margin: 1rem 0;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
        filter: brightness(90%);
        color: white;
      }
    }
  }
`;
