import React from "react";
import puma from "../Images/puma-sportwear-model-header.webp";
import nike from "../Images/nike-airMax-new.webp";
import adidas from "../Images/adidas-mode.webp";
import styled from "styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import after from "../Images/arrow_circle_right.svg";
import { Link } from "react-router-dom";

const NewCollection = () => {
  return (
    <NewCollectionWrapper>
      <h2 className="section__title">New collections</h2>
      <div className="newCollection__container">
        <article className="newCollection-card">
          <div className="article__header">
            <h3>Puma 75</h3>
            <p>
              Stay cool with the Players Lounge capsule collection. This line of
              footwear and apparel revisits the classic football aesthetic with
              original styling and authentic materials.
            </p>
            <Link className="btn-newCollection">See more</Link>
          </div>
          <img src={puma} alt="" />
        </article>
        <article className="newCollection-card">
          <div className="article__header">
            <h3>Nike AirMax</h3>
            <p>
              Stay cool with the Players Lounge capsule collection. This line of
              footwear and apparel revisits the classic football aesthetic with
              original styling and authentic materials.
            </p>
            <Link className="btn-newCollection">See more</Link>
          </div>
          <img src={nike} alt="" />
        </article>
        <article className="newCollection-card">
          <div className="article__header">
            <h3>Superstar</h3>
            <p>
              Stay cool with the Players Lounge capsule collection. This line of
              footwear and apparel revisits the classic football aesthetic with
              original styling and authentic materials.
            </p>
            <Link className="btn-newCollection">See more</Link>
          </div>
          <img src={adidas} alt="" />
        </article>
      </div>
    </NewCollectionWrapper>
  );
};

export default NewCollection;

const NewCollectionWrapper = styled.section`
  width: 100vw;
  padding-top: 6rem;

  .section__title {
    margin: 0 auto;
    display: block;
    width: 80%;
    max-width: 1920px;
    font-size: 2rem;
    font-weight: 300;
  }
  .newCollection__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 80%;
    margin: 2rem auto;
    max-width: 1920px;

    .newCollection-card {
      width: 100%;
      display: flex;
      align-items: center;
      /* border: 1px solid var(--header-clr); */
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

      .article__header {
        width: 100%;
        padding: 1rem;

        h3 {
          font-size: 2rem;
          font-weight: 600;
        }
        p {
          font-size: 1rem;
          margin-top: 1rem;
        }

        .btn-newCollection {
          font-size: 1rem;
          color: var(--header-black-clr);
          margin-top: 2rem;
          display: flex;
          align-items: center;
          font-weight: 600;
          gap: 0.5rem;
          transition: all 0.2s ease-in-out;

          &::after {
            content: "⭢";
          }

          &:hover {
            color: var(--secondary-clr);
          }
        }
      }
      img {
        width: 50%;
        height: 100%;
        border-radius: 0 5px 5px 0;
        object-fit: cover;
      }
    }
  }

  @media (width <= 75em) {
    .newCollection__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (width <= 37.5em) {
    .newCollection__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .newCollection-card {
        .article__header {
          h3 {
            font-size: 1.2rem;
          }

          p {
            font-size: 0.95rem;
          }
        }

        img {
          width: 100%;
        }
      }
    }
  }

  @media (width <= 31.25em) {
    .newCollection__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .newCollection-card {
        flex-direction: column;
        .article__header {
          h3 {
            font-size: 1.2rem;
          }

          p {
            font-size: 0.95rem;
          }
        }

        img {
          width: 100%;
          border-radius: 0 0 5px 5px;
        }
      }
    }
  }
`;
