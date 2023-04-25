import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import hang from "../Images/hang.png";

const Page404 = () => {
  return (
    <Page404Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pagenotfound-container">
        <div className="image-container">
          <img src={hang} alt="Page not found" />
        </div>
        <h1>Oops! Nothing here...</h1>
      </div>
    </Page404Wrapper>
  );
};

export default Page404;

const Page404Wrapper = styled(motion.section)`
  width: 100vw;

  .pagenotfound-container {
    width: 100%;

    height: 100%;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    margin-bottom: 20rem;

    h1 {
      font-size: 3rem;
      font-weight: 400;
      color: var(--header-black-clr);
      text-align: center;
    }

    .image-container {
      width: 50%;
      height: 100%;
      max-width: 600px;

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 31.25em) {
    .pagenotfound-container {
      h1 {
        font-size: 2rem;
      }
    }
  }
`;
