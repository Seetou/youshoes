import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../ContextProviders/GlobalContextProvider";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import axios from "axios";

const Bestsellers = () => {
  const { loading, setLoading } = useContext(GlobalContext);
  const [bestsellersArray, setBestsellersArray] = useState([]);
  const [loacalData, setLocalData] = useState([]);

  const bestsellers = localStorage.getItem("bestsellers");
  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products/?categoryId=4"
      );
      const data = await response.data;
      setBestsellersArray(data.slice(0, 10));
      setLocalData(data.slice(0, 10));
      setLoading(false);
      if (!loading)
        localStorage.setItem("bestsellers", JSON.stringify(loacalData));
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <BestsellersWrapper>
      <h2 className="section__title">Our bestsellers</h2>
      <div className="bestsellers__container">
        <Splide
          className="inner__container"
          options={{
            rewind: true,
            perPage: 4,
            perMove: 1,
            drag: "free",
            gap: "1rem",
            classes: {
              prev: "splide__arrow--prev bestsellers-class-prev",
              next: "splide__arrow--next bestsellers-class-next",
              pagination: "splide__pagination bestsellers-class-pagination",
              page: "splide__pagination__page bestsellers-class-page",
            },

            breakpoints: {
              1200: {
                perPage: 3,
                perMove: 1,
                gap: "1rem",
              },

              900: {
                perPage: 2,
                perMove: 1,
                gap: "1rem",
              },

              600: {
                perPage: 1,
                perMove: 1,
                gap: "1rem",
              },
            },
          }}
        >
          {!loading &&
            bestsellersArray.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  <ProductCard item={item} />
                </SplideSlide>
              );
            })}
        </Splide>
      </div>
    </BestsellersWrapper>
  );
};

export default Bestsellers;

const BestsellersWrapper = styled.section`
  width: 100vw;
  max-width: 100%;
  padding-top: 2rem;

  .section__title {
    margin: 0 auto;
    display: block;
    width: 80%;
    font-size: 2rem;
    font-weight: 300;
    max-width: 1920px;
  }

  .bestsellers__container {
    overflow-x: hidden;
    width: 80%;
    margin: 2rem auto;
    padding-bottom: 1rem;
    max-width: 1920px;

    .inner__container {
      display: flex;
      width: 100%;

      .splide__arrow--prev.bestsellers-class-prev,
      .splide__arrow--next.bestsellers-class-next {
        background: var(--primary-clr);

        svg {
          fill: white;
        }
      }

      .splide__pagination.bestsellers-class-pagination {
        bottom: -1rem;
      }

      .splide__pagination__page.bestsellers-class-page {
        background: var(--primary-clr);
      }
    }
  }
`;
