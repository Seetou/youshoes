import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { shoesImages, clothesImages } from "../Utils/data";

const CatalogPreview = () => {
  const [isloading, setIsLoading] = useState(true);
  const [clothesArr, setClothesArr] = useState([]);
  const [shoesArr, setShoesArr] = useState([]);
  const [loacalData, setLocalData] = useState([]);
  const localClothes = localStorage.getItem("localClothes");
  const localShoes = localStorage.getItem("localShoes");

  const navigate = useNavigate();

  const fetchDatas = async () => {
    setIsLoading(true);

    try {
      const clothesresponse = await axios.get(
        "https://api.escuelajs.co/api/v1/products/?categoryId=1"
      );
      const clothes = await clothesresponse.data;
      setClothesArr(clothes);

      const shoesresponse = await axios.get(
        "https://api.escuelajs.co/api/v1/products/?categoryId=4"
      );
      const shoes = await shoesresponse.data;
      setShoesArr(shoes);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);
  return (
    <CatalogPreviewWrapper>
      <h2 className="section__title">Our Catalog</h2>

      {!isloading && (
        <>
          <div className="catalogpreview__container">
            <div className="preview-container">
              {/* <div className="side-items-preview">
                {clothesArr.slice(20, 24).map((item) => {
                  return (
                    <img
                      key={item.id}
                      src={
                        clothesImages[
                          Math.floor(Math.random() * clothesImages.length)
                        ]
                      }
                      alt={item.title}
                    />
                  );
                })}
              </div> */}
              <div className="main-item">
                <img
                  src={
                    clothesImages[
                      Math.floor(Math.random() * clothesImages.length)
                    ]
                  }
                  alt={clothesArr[0].title}
                  className="main-item-preview"
                />
                <button
                  className="catalog-btn"
                  onClick={() => navigate("/clothes")}
                >
                  Clothes
                </button>
              </div>
            </div>
            <div className="preview-container">
              {/* <div className="side-items-preview">
                {shoesArr.slice(20, 24).map((item) => {
                  return (
                    <img
                      key={item.id}
                      src={
                        shoesImages[
                          Math.floor(Math.random() * shoesImages.length)
                        ]
                      }
                      alt={item.title}
                    />
                  );
                })}
              </div> */}
              <div className="main-item">
                <img
                  src={
                    shoesImages[Math.floor(Math.random() * shoesImages.length)]
                  }
                  alt={shoesArr[0].title}
                  className="main-item-preview"
                />
                <button
                  className="catalog-btn"
                  onClick={() => navigate("/shoes")}
                >
                  Shoes
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </CatalogPreviewWrapper>
  );
};

export default CatalogPreview;

const CatalogPreviewWrapper = styled.section`
  width: 100vw;
  max-width: 100%;
  padding-top: 2rem;
  padding-bottom: 4rem;

  .section__title {
    margin: 0 auto;
    display: block;
    width: 80%;
    font-size: 2rem;
    font-weight: 300;
    max-width: 1920px;
  }

  .catalogpreview__container {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-evenly;
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    max-width: 1920px;

    .preview-container {
      width: 100%;
      /* gap: 1rem;
      display: flex;
      align-items: center;
      justify-content: center; */

      background: var(--header-clr);
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

      .main-item {
        width: 100%;
        height: 300px;

        position: relative;
        display: flex;
        align-items: center;

        &:hover {
          img {
            filter: brightness(50%);
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
          transition: all 0.3s ease-in-out;
        }

        .catalog-btn {
          position: absolute;
          margin: 0 auto;
          left: 50%;
          transform: translateX(-50%);
          padding: 1rem 3rem;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          font-weight: 600;
          background: white;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
            rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
          transition: all 0.3s ease-in-out;
          font-size: 1rem;

          &:hover {
            background: var(--secondary-clr);
            color: var(--header-clr);
          }
        }
      }

      .side-items-preview {
        width: 400px;
        height: 100px;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          object-fit: contain;
        }
      }
    }
  }

  @media (width <= 31.25em) {
    .catalogpreview__container {
      flex-direction: column;
    }
  }
`;
