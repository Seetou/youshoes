import React from "react";
import styled from "styled-components";
import gif1 from "../videos/youshoes-spirit-express1.gif";
import gif2 from "../videos/youshoes-spirit-express2.gif";

const HeroSpirit = () => {
  return (
    <HeroSpiritWrapper>
      <h2 className="section__title">Express yourself without fear.</h2>
      <div className="heroSpirit__container">
        <div className="hero__card">
          <img src={gif1} alt="" />
          <div className="hero__card_info">
            <h3>Your style, your look</h3>
            <p>
              The <span>You Shoes</span> spirit is about expressing yourself
              without fear, making your voice heard and showing the world who
              you really are.
            </p>
          </div>
        </div>
        <div className="hero__card">
          <img src={gif2} alt="" />
          <div className="hero__card_info">
            <h3>Your style, your look</h3>
            <p>
              The <span>You Shoes</span> spirit is about expressing yourself
              without fear, making your voice heard and showing the world who
              you really are.
            </p>
          </div>
        </div>
      </div>
    </HeroSpiritWrapper>
  );
};

export default HeroSpirit;

const HeroSpiritWrapper = styled.section`
  width: 100vw;
  padding: 6rem 0;
  background: var(--header-clr);

  .section__title {
    margin: 0 auto;
    display: block;
    width: 80%;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
  }

  .heroSpirit__container {
    width: 80%;
    margin: 0 auto;
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .hero__card {
      border-radius: 5px;
      position: relative;

      img {
        border-radius: 5px;
        width: 100%;
        transition: all 0.5s ease-in-out;
      }

      .hero__card_info {
        position: absolute;
        bottom: 0;
        padding: 1rem;
        transition: all 0.5s ease-in-out;

        h3 {
          font-weight: 400;
          font-size: 1.2rem;
        }

        p {
          font-size: 0.7rem;
        }
      }

      &:hover {
        img {
          filter: brightness(40%);
        }

        .hero__card_info {
          color: white;
        }
      }
    }
  }

  @media (width <= 75em) {
    .section__title {
      font-size: 2.5rem;
    }
  }

  @media (width < 50em) {
    .section__title {
      font-size: 2.5rem;
    }

    .heroSpirit__container {
      flex-direction: column;
    }
  }
`;
