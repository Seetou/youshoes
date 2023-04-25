import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import background from "../Images/model-red-dress-header-min.webp";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import FilterAsideOptions from "../Components/FilterAsideOptions";
import { motion } from "framer-motion";

const Clothes = () => {
  const [clothesDatas, setClothesDatas] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minRange, setMinRange] = useState();
  const [maxRange, setMaxRange] = useState();
  const minRef = useRef(null);
  const maxRef = useRef(null);

  let filteredClothes;

  // FUNCTIONS

  const handleSearch = (e) => {
    e.preventDefault();
    setFilteredDatas(
      clothesDatas.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleRangeSubmit = (e) => {
    e.preventDefault();

    if (!minRange || !maxRange || minRange > maxRange) {
      return;
    } else {
      filteredClothes = clothesDatas.filter(
        (item) => item.price >= minRange * 10 && item.price <= maxRange * 10
      );

      setFilteredDatas(filteredClothes);
    }
  };

  // RESET

  const handleRangeReset = (e) => {
    e.preventDefault();
    if (!minRange || !maxRange) return;
    setMinRange(null);
    setMaxRange(null);
    minRef.current.value = "";
    maxRef.current.value = "";
    setFilteredDatas(clothesDatas);
  };

  // SORT

  const handleSortByHighPrice = () => {
    if (filteredClothes) {
      setFilteredDatas([...filteredClothes].sort((a, b) => a.price < b.price));
    }
    setFilteredDatas([...filteredDatas].sort((a, b) => a.price < b.price));
  };

  const handleSortByLowPrice = () => {
    if (filteredClothes) {
      setFilteredDatas([...filteredClothes].sort((a, b) => a.price > b.price));
    } else {
      setFilteredDatas([...filteredDatas].sort((a, b) => a.price > b.price));
    }
  };

  const fetchClothes = async () => {
    setLoading(true);
    try {
      const clothesresponse = await axios.get(
        "https://api.escuelajs.co/api/v1/products/?categoryId=1"
      );
      const clothes = await clothesresponse.data;
      setClothesDatas(clothes);
      setFilteredDatas(clothes);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClothes();
  }, []);

  return (
    <ClothesWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="clothes__container">
        {/* HEADER */}
        <div className="clothes__header">
          <div className="clothes__header_info">
            <h1>Get ready for the sunshine.</h1>
            <h2>
              Warm weather and cold ice cream. It is that time of year again,
              folks! Summer is here, and that means it is time to update your
              seasonal wardrobe.
            </h2>
            <h3>
              Get <span>30% off</span> your next order !
            </h3>
            <Link className="btn clothes-header-btn">Shop now</Link>
          </div>
          <div className="clothes__header__image__container">
            <img src={background} alt="Woman model in red dress" />
          </div>
        </div>
        {/* END HEADER */}
        <div className="clothes__show_container">
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

          <div className="clothes__items__maping">
            <div className="clothes-length">
              <h2>
                (
                {filteredClothes
                  ? filteredClothes.length
                  : filteredDatas.length}
                ) Products found
              </h2>
            </div>
            <div className="clothes__grid">
              {!loading &&
                filteredDatas.map((item) => {
                  return <ProductCard key={item.id} item={item} />;
                })}
            </div>
            <p className="end-of-list-text">It's all we got for now</p>
          </div>
        </div>
      </div>
    </ClothesWrapper>
  );
};

export default Clothes;

const ClothesWrapper = styled(motion.section)`
  width: 100vw;
  margin-top: 2rem;

  .clothes__container {
    width: 80%;
    margin: 0 auto;
    max-width: 1920px;

    .clothes__header {
      display: flex;
      align-items: center;
      justify-content: center;

      .clothes__header_info {
        width: 50%;
        align-self: stretch;
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

        .clothes-header-btn {
          padding: 0.5rem 3rem;
          margin-top: 2rem;
        }
      }

      .clothes__header__image__container {
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0 5px 5px 0;
        }
      }
    }

    .clothes__show_container {
      display: flex;
      gap: 2rem;
      margin-top: 2rem;

      .clothes__items__maping {
        width: 100%;

        .clothes-length {
          width: 100%;
          padding-left: 1rem;
          margin-bottom: 1rem;
          h2 {
            font-size: 1rem;
            font-weight: 400;
          }
        }

        .clothes__grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          justify-items: flex-end;
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

  @media (width > 75em) {
    .clothes__container {
      .clothes__header {
        .clothes__header_info {
          height: 450px;
          min-height: 450px;
          max-height: 450px;

          h1 {
            font-size: 2.8rem;
          }
        }

        .clothes__header__image__container {
          img {
            height: 450px;
            object-position: top;
          }
        }
      }
    }
  }

  @media (max-width: 75em) {
    .clothes__container {
      .clothes__header {
        .clothes__header_info {
          width: 100%;
          min-height: 354px;
          padding: 2rem;

          h1 {
            font-size: 2rem;
          }
        }
      }

      .clothes__header__image__container {
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

    .clothes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .clothes__items__maping {
        .clothes__grid {
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }

  @media (max-width: 50em) {
    .clothes__container {
      width: 95%;
      .clothes__header {
        flex-direction: column;
        .clothes__header_info {
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

          .clothes-header-btn {
            font-size: 1.2rem;
          }
        }
      }

      .clothes__header__image__container {
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

    .clothes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .clothes__items__maping {
        .clothes__grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }

  @media (max-width: 37.5em) {
    .clothes__container {
      .clothes__header {
        .clothes__header_info {
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

      .clothes__header__image__container {
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

    .clothes__show_container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;

      .clothes__items__maping {
        .clothes__grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1rem;
        }
      }
    }
  }
`;
