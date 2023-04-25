import React from "react";
import styled from "styled-components";
import image from "../Images/youshoes-about-eco.webp";
import { FiArrowRightCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <article className="about__container">
        <div className="about-header">
          <div className="about-header-info">
            <h1>About us</h1>
            <p>
              As a leading European online platform for fashion and lifestyle we
              deliver to customers in 25 countries. In our fashion store, they
              can find a wide assortment from more than 7,000 brands.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel
              dolorum tenetur, nihil asperiores aliquam nobis, tempore magnam,
              provident excepturi deleniti dicta. Minima voluptas repudiandae
              adipisci porro, voluptatum laborum nulla? Amet non numquam
              asperiores laboriosam nobis aspernatur omnis aliquam nostrum iure
              repudiandae velit hic consectetur saepe cum corporis dolorem ipsam
              dignissimos totam sequi, sit repellendus? Nihil, hic corporis.
              Nemo, eligendi! Consequatur a est omnis distinctio adipisci ad
              eveniet commodi. Dolorum dolore necessitatibus ea, incidunt odio
              modi enim nostrum quos odit ducimus suscipit architecto minima
              tenetur eius! Vero dolores similique delectus. Adipisci voluptas
              vero nisi quidem ipsam totam tenetur ducimus modi laboriosam sed
              debitis culpa ea, ratione odit nesciunt assumenda sapiente
              voluptatem quasi. Necessitatibus laboriosam, soluta molestiae qui
              earum quaerat eum.
            </p>
          </div>

          <div className="about-image">
            <img src={image} alt="a shirt hang" />
          </div>
        </div>

        <div className="about-more">
          <div className="about-more-details">
            <h2>Who we are</h2>
            <FiArrowRightCircle />
          </div>
          <div className="about-more-details">
            <h2>What we do</h2>
            <FiArrowRightCircle />
          </div>
          <div className="about-more-details">
            <h2>Brands & Retailers</h2>
            <FiArrowRightCircle />
          </div>
        </div>
      </article>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled(motion.section)`
  width: 100vw;
  margin-top: 5rem;
  margin-bottom: 15rem;

  .about__container {
    width: 80%;
    margin: 0 auto;
    max-width: 1920px;

    .about-header {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      gap: 1rem;

      .about-header-info {
        width: 100%;

        h1 {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        p {
          font-size: 1rem;
          margin-top: 0.5rem;
          line-height: 1.5rem;
        }
      }

      .about-image {
        width: 50%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          object-fit: contain;
          box-shadow: 24px 24px 0px 1px var(--primary-clr);
        }
      }
    }

    .about-more {
      margin: 5rem 0;
      display: flex;
      gap: 1rem;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      .about-more-details {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        border: 1px solid var(--header-black-clr);
        padding: 2rem 3rem;
        border-radius: 5px;

        h2 {
          font-size: 2rem;
          font-weight: 400;
        }

        svg {
          font-size: 1.5rem;
        }
      }
    }
  }
  /* @media (62.5 <= width <= 75em)  */

  @media (max-width: 75em) {
    .about__container {
      .about-header {
        width: 100%;
        flex-direction: column;
        gap: 2rem;
      }

      .about-image {
        width: 100%;
        align-self: center;
        max-width: 400px;
      }

      .about-more {
        flex-direction: column;
      }
    }
  }

  @media (max-width: 62.5em) {
    .about__container {
      .about-header {
        width: 100%;
        flex-direction: column;
        gap: 2rem;
      }

      .about-image {
        width: 100%;
        align-self: center;
        max-width: 400px;
      }

      .about-more {
        flex-direction: column;

        .about-more-details {
          padding: 1rem 2rem;
          h2 {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
