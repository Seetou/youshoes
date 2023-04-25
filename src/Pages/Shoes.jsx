import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import background from "../Images/model-man-with-sneakers-min.webp";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import FilterAsideOptions from "../Components/FilterAsideOptions";
import { motion } from "framer-motion";

const Shoes = () => {
  const [shoesDatas, setShoesDatas] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minRange, setMinRange] = useState();
  const [maxRange, setMaxRange] = useState();
  const minRef = useRef(null);
  const maxRef = useRef(null);

  let filteredShoes;

  // FUNCTIONS

  const handleSearch = (e) => {
    e.preventDefault();
    setFilteredDatas(
      shoesDatas.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleRangeSubmit = (e) => {
    e.preventDefault();

    if (!minRange || !maxRange || minRange > maxRange) {
      return;
    } else {
      filteredShoes = shoesDatas.filter(
        (item) => item.price >= minRange * 10 && item.price <= maxRange * 10
      );

      setFilteredDatas(filteredShoes);
    }
  };

  const handleRangeReset = (e) => {
    e.preventDefault();
    if (!minRange || !maxRange) return;
    setMinRange(null);
    setMaxRange(null);
    minRef.current.value = "";
    maxRef.current.value = "";
    setFilteredDatas(shoesDatas);
  };

  // SORT

  const handleSortByHighPrice = () => {
    if (filteredShoes) {
      setFilteredDatas([...filteredShoes].sort((a, b) => a.price < b.price));
    }
    setFilteredDatas([...filteredDatas].sort((a, b) => a.price < b.price));
  };

  const handleSortByLowPrice = () => {
    if (filteredShoes) {
      setFilteredDatas([...filteredShoes].sort((a, b) => a.price > b.price));
    } else {
      setFilteredDatas([...filteredDatas].sort((a, b) => a.price > b.price));
    }
  };

  const fetchShoes = async () => {
    setLoading(true);
    try {
      const shoesresponse = await axios.get(
        "https://api.escuelajs.co/api/v1/products/?categoryId=4"
      );
      const shoes = await shoesresponse.data;
      setShoesDatas(shoes);
      setFilteredDatas(shoes);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShoes();
  }, []);

  return (
    <ShoesWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="shoes__container">
        {/* HEADER */}
        <div className="shoes__header">
          <div className="shoes__header_info">
            <h1>Customize your so-you shoes.</h1>
            <h2>
              Warm weather and cold ice cream. It is that time of year again,
              folks! Summer is here, and that means it is time to update your
              seasonal wardrobe.
            </h2>
            <h3>
              Get <span>30% off</span> your next order !
            </h3>
            <Link className="btn shoes-header-btn">Shop now</Link>
          </div>
          <div className="shoes__header__image__container">
            <img src={background} alt="Woman model in red dress" />
          </div>
        </div>
        {/* END HEADER */}
        <div className="shoes__show_container">
          <FilterAsideOptions
            setMinRange={setMinRange}
            setMaxRange={setMaxRange}
            handleRangeSubmit={handleRangeSubmit}
            handleRangeReset={handleRangeReset}
            handleSortByHighPrice={handleSortByHighPrice}
            handleSortByLowPrice={handleSortByLowPrice}
            handleSearch={handleSearch}
            minRef={minRef}
            maxRef={maxRef}
          />

          <div className="shoes__items__maping">
            <div className="shoes-length">
              <h2>
                ({filteredShoes ? filteredShoes.length : filteredDatas.length})
                Products found
              </h2>
            </div>
            <div className="shoes__grid">
              {!loading &&
                filteredDatas.map((item) => {
                  return <ProductCard key={item.id} item={item} />;
                })}
            </div>
            <p className="end-of-list-text">It's all we got for now</p>
          </div>
        </div>
      </div>
    </ShoesWrapper>
  );
};

export default Shoes;

const ShoesWrapper = styled(motion.section)`
  width: 100vw;
  margin-top: 2rem;

  .shoes__container {
    width: 80%;
    margin: 0 auto;
    max-width: 1920px;

    .shoes__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .shoes__header_info {
        width: 50%;
        /* align-self: stretch; */
        padding: 5rem 2rem;
        background: var(--accent-clr);
        border-radius: 5px 0 0 5px;

        h1 {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        h2 {
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        h3 {
          font-size: 1rem;
          font-weight: 400;

          span {
            font-weight: 600;
            text-transform: uppercase;
          }
        }

        .shoes-header-btn {
          padding: 0.5rem 3rem;
          margin-top: 2rem;
        }
      }

      .shoes__header__image__container {
        width: 100%;

        img {
          width: 100%;
          max-width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          border-radius: 0 5px 5px 0;
        }
      }
    }

    .shoes__show_container {
      display: flex;
      gap: 2rem;
      margin-top: 2rem;

      .shoes__items__maping {
        width: 100%;

        .shoes-length {
          width: 100%;
          padding-left: 1rem;
          margin-bottom: 1rem;
          h2 {
            font-size: 1rem;
            font-weight: 400;
          }
        }

        .shoes__grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          justify-items: center;
        }

        .end-of-list-text {
          margin: 5rem 0;
          font-size: 0.8rem;
          text-align: center;
          color: var(--font-clr);
        }
      }
    }
  }

  @media (min-width: 75em) {
    .shoes__container {
      .shoes__header {
        .shoes__header_info {
          width: 50%;
          height: 450px;
          min-height: 450px;
          max-height: 450px;
          padding: 2rem;
        }

        .shoes__header__image__container {
          width: 100%;
          img {
            height: 450px;
            min-height: 450px;
            max-height: 450px;
          }
        }
      }
    }
  }

  @media (max-width: 74.938em) {
    .shoes__container {
      .shoes__header {
        .shoes__header_info {
          width: 100%;
          min-height: 354px;
          padding: 2rem;

          h1 {
            font-size: 2rem;
          }
        }
      }

      .shoes__header__image__container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0 5px 5px 0;

        img {
          min-width: 535px;
          min-height: 300px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0 5px 5px 0;
        }
      }
    }

    .shoes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .shoes__items__maping {
        .shoes__grid {
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }

  @media (max-width: 50em) {
    .shoes__container {
      width: 95%;
      .shoes__header {
        flex-direction: column;
        .shoes__header_info {
          width: 100%;
          min-height: 354px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border-radius: 5px 5px 0 0;

          h1 {
            font-size: 3rem;
          }

          h2,
          h3 {
            font-size: 1.5rem;
          }

          h3 {
            margin-top: 2rem;
          }

          .shoes-header-btn {
            font-size: 1.2rem;
          }
        }
      }

      .shoes__header__image__container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0 0 5px 5px;

        img {
          min-width: 535px;
          min-height: 300px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0 0 5px 5px;
        }
      }
    }

    .shoes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .shoes__items__maping {
        .shoes__grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }

  @media (max-width: 37.5em) {
    .shoes__container {
      .shoes__header {
        .shoes__header_info {
          width: 100%;
          min-height: 354px;
          padding: 2rem;

          h1 {
            font-size: 2rem;
          }

          h2,
          h3 {
            font-size: 1.2rem;
          }
        }
      }

      .shoes__header__image__container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0 0 5px 5px;

        img {
          min-width: 535px;
          min-height: 300px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0 0 5px 5px;
        }
      }
    }

    .shoes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .shoes__items__maping {
        .shoes__grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }
`;
