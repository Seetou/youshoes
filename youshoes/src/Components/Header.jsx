import React from "react";
import styled from "styled-components";
import mainProduct from "../Images/puma-sneaker-header.png";
import productBg from "../Images/blob.svg";
import vansSneaker from "../Images/vans-sneaker.png";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

const Header = () => {
  const defOptions = {
    scale: 1,
    transition: true,
    glare: true,
    "max-glare": 1,
    "glare-prerender": true,
  };
  return (
    <HeaderWrapper>
      <div className="header__flexbox">
        <div className="header__intro">
          <h1>
            Your style, your look,
            <span>you shoes.</span>
          </h1>
          <h3>
            Embrace your style with leggings, shorts, t-shirts and sneakers from
            the new collection. Compose your look, opt for sporty, contemporary
            and colorful pieces and proudly display your style.
          </h3>
          <Link className="btn btn-header" to={"/shoes"}>
            See more
          </Link>
        </div>

        <Tilt options={defOptions} className="header__illustration">
          {/* <img className="productBg" src={productBg} alt="" /> */}
          <img className="sneakerImg" src={vansSneaker} alt="" />
        </Tilt>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100vw;
  background: var(--header-black-clr);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header__flexbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    gap: 1rem;
    max-width: 1920px;

    .header__intro {
      width: 100%;

      h1 {
        color: var(--header-clr);
        font-size: 4rem;
        font-weight: 600;
        width: 100%;

        span {
          color: var(--primary-clr);
          display: block;
        }
      }

      h3 {
        color: var(--header-clr);
        font-size: 2rem;
        font-weight: 300;
        margin-top: 2rem;
      }
    }

    .header__illustration {
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transform: perspective(5000px);
      position: relative;
      background: url(${productBg});
      /* background: url(${productBg}), rgba(0, 0, 0, 0.144); */
      /* background: rgba(0, 0, 0, 0.144); */
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      border-radius: 15px;
      padding: 4rem;
      cursor: pointer;

      /* 
      img {
        display: block;
      } */

      /* .productBg {
        width: 60%;
        text-align: center;
        border: &px solid red;
        transform: translateZ(20px);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 98;
      } */

      .sneakerImg {
        width: 60%;
        position: absolute;
        top: 20%;
        left: 10%;
        transform: translate(-20%, -10%);
        z-index: 99;
        transform: translateZ(100px);
      }
    }
  }

  /* >1200PX */

  @media (min-width: 75em) {
    height: 100%;

    .header__flexbox {
      margin: 5rem auto;

      .header__intro {
        h1 {
          font-size: 3rem;
        }

        h3 {
          font-size: 1.5rem;
        }
      }

      .header__illustration {
        padding: 20rem 0;
        .sneakerImg {
          width: 80%;
          left: 0;
        }
      }
    }
  }

  /* 800PX to 1200PX */

  @media (min-width: 50em) {
    /* background: lightcoral; */
    height: 100%;

    .header__flexbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-top: 5rem;

      .header__intro {
        h1 {
          font-size: 3.5rem;
          text-align: center;
        }

        h3 {
          font-size: 1.5rem;
          text-align: center;
        }

        .btn.btn-header {
          display: block;
          margin: 0 auto;
          width: 30%;
          text-align: center;
          margin-top: 3rem;
        }
      }

      .header__illustration {
        height: 400px;

        .sneakerImg {
          width: 80%;
          position: absolute;
          top: 20%;
          left: 10%;
          transform: translate(-20%, -10%);
          z-index: 99;
          transform: translateZ(100px);
        }
      }
    }
  }

  /* < 800PX */

  @media (max-width: 49.938em) {
    height: 100%;
    .header__flexbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-top: 5rem;

      .header__intro {
        h1 {
          font-size: 3.5rem;
          text-align: center;
        }

        h3 {
          font-size: 1.5rem;
          text-align: center;
        }

        .btn.btn-header {
          display: block;
          margin: 0 auto;
          width: 50%;
          text-align: center;
          margin-top: 3rem;
        }
      }

      .header__illustration {
        height: 400px;

        .sneakerImg {
          width: 80%;
          position: absolute;
          top: 20%;
          left: 10%;
          transform: translate(-20%, -10%);
          z-index: 99;
          transform: translateZ(100px);
        }
      }
    }
  }

  /* <= 500PX */
  @media (max-width: 31.25em) {
    height: 100%;
    .header__flexbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-top: 5rem;

      .header__intro {
        h1 {
          font-size: 3.5rem;
          text-align: center;
        }

        h3 {
          font-size: 1.5rem;
          text-align: center;
        }

        .btn.btn-header {
          display: block;
          margin: 0 auto;
          width: 80%;
          text-align: center;
          margin-top: 3rem;
        }
      }

      .header__illustration {
        height: 400px;

        .sneakerImg {
          width: 100%;
          position: absolute;
          top: 20%;
          left: 0%;
          transform: translate(-20%, -10%);
          z-index: 99;
          transform: translateZ(100px);
        }
      }
    }
  }
`;
