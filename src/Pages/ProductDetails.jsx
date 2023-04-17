import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaShippingFast, FaShare } from "react-icons/fa";
import { MdLocalShipping, MdArrowCircleLeft } from "react-icons/md";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import LoadingSpinner from "../Components/LoadingSpinner";
import axios from "axios";
import styled from "styled-components";
import ProductCard from "../Components/ProductCard";
import { CartContext } from "../ContextProviders/CartContextProvider";
import { shoesImages, clothesImages } from "../Utils/data";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const productID = useParams();

  const [productInfos, setProductInfos] = useState([]);
  const [recommandedProducts, setRecommandedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  const CategoriesID = [1, 4];
  const getRandomCategory = Math.floor(Math.random() * CategoriesID.length);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${productID.id}`
      );
      const product = await response.data;
      setProductInfos(product);
      // Fetch random category between Shoes & Clothes
      const randomCategory = await axios.get(
        `https://api.escuelajs.co/api/v1/products/?categoryId=${CategoriesID[getRandomCategory]}`
      );
      const responseCategory = await randomCategory.data;
      setRecommandedProducts(responseCategory.slice(0, 10));

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productID]);

  return (
    <ProductWrapper
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <div className="productDetails__container">
        <div className="productDetails-back-control">
          <Link
            className="goback-btn"
            to={
              productInfos?.category?.name === "Shoes" ? "/shoes" : "/clothes"
            }
          >
            <MdArrowCircleLeft />
            Back
          </Link>
          <div className="liner"></div>
        </div>
        {!isLoading ? (
          <div className="productDetails-content">
            <article className="product__item">
              <div className="product__item-image-container">
                <img
                  src={
                    productInfos.category.name === "Shoes"
                      ? shoesImages[
                          Math.floor(Math.random() * shoesImages.length)
                        ]
                      : clothesImages[
                          Math.floor(Math.random() * clothesImages.length)
                        ]
                  }
                  alt={productInfos.title}
                />
              </div>
              <div className="product__item-text-container">
                <h1>{productInfos.title}</h1>
                <h3>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(productInfos.price / 10)}
                </h3>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus dolorum minima sapiente. Dolorem aperiam dolor
                  quam error consectetur adipisci molestias voluptatibus, ipsam,
                  enim recusandae tempora, cumque facere voluptate hic
                  blanditiis? Nam iusto sapiente possimus, nostrum ad
                  consectetur porro tenetur harum aperiam, dolorem in voluptatum
                  quasi, laudantium tempore doloribus laboriosam. Nam
                  perferendis dolore tempore voluptate maiores quia mollitia
                  ipsa. Soluta, illo. Aliquid voluptas accusantium minima quos
                  vero, ab vel eius sed in optio molestiae ipsum, iusto nesciunt
                  ex commodi beatae quas sequi nostrum nemo nihil sapiente!
                  Voluptatibus quam enim nihil maxime.
                </p>
                <p className="category">
                  Category:
                  <span>{productInfos.category.name}</span>
                </p>

                <div className="addtocart-btn">
                  <button onClick={() => addToCart(productInfos)}>
                    Add to cart
                  </button>
                </div>
                <div className="shipping-details-container">
                  <div className="ship-info">
                    <FaShippingFast />
                    <h3>Express Shipping</h3>
                    <p>Fast shipping for orders above $50</p>
                  </div>
                  <div className="ship-info">
                    <MdLocalShipping />
                    <h3>Free Shipping</h3>
                    <p>Free standard shipping for members</p>
                  </div>
                  <div className="ship-info">
                    <FaShare />
                    <h3>Free Returns</h3>
                    <p>Free 60-day returns for members</p>
                  </div>
                </div>
              </div>
            </article>

            <div className="featured-products-container">
              <h2>Recommended for you</h2>
              <div className="featured-products">
                <Splide
                  className="featured-products-inner-container"
                  options={{
                    rewind: true,
                    perPage: 5,
                    perMove: 5,
                    drag: "free",
                    gap: "1rem",
                    classes: {
                      prev: "splide__arrow--prev featured-class-prev",
                      next: "splide__arrow--next featured-class-next",
                      pagination:
                        "splide__pagination featured-class-pagination",
                      page: "splide__pagination__page featured-class-page",
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
                  {recommandedProducts.map((item) => (
                    <SplideSlide key={item.id}>
                      <ProductCard item={item} />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </ProductWrapper>
  );
};

export default ProductDetails;

const ProductWrapper = styled(motion.section)`
  width: 100vw;

  .productDetails__container {
    width: 80%;
    margin: 5rem auto;
    max-width: 1920px;

    .productDetails-back-control {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .goback-btn {
        border: none;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        color: white;
        background: var(--header-black-clr);
        padding: 0.2rem 2rem;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        svg {
          transition: all 0.3s ease-in-out;
        }

        &:hover {
          svg {
            transform: translateX(-5px);
          }
        }
      }
      .liner {
        width: 100%;
        height: 1px;
        background: rgba(211, 211, 211, 0.884);
      }
    }

    .productDetails-content {
      .product__item {
        display: flex;
        align-items: flex-start;
        margin-top: 2rem;
        gap: 2rem;

        .product__item-text-container {
          max-width: 800px;
        }

        .product__item-image-container {
          overflow: hidden;
          max-width: 800px;
          max-height: 600px;
          width: 800px;
          height: 600px;

          border-radius: 5px;

          img {
            border-radius: 5px;
            object-fit: contain;
            width: 100%;
            height: 100%;
            transition: all 0.3s ease-in-out;

            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }

      .product__item-text-container {
        width: 100%;

        h1 {
          font-size: 2rem;
          font-weight: 600;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        p {
          font-size: 1rem;
          margin-top: 2rem;

          span {
            margin-left: 0.5rem;
            padding: 0.2rem;
          }
        }

        .addtocart-btn {
          margin-top: 2rem;
          button {
            border: none;
            background: var(--header-black-clr);
            color: white;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            border-radius: 5px;

            &:hover {
              background: var(--secondary-clr);
              color: white;
            }
          }
        }

        .shipping-details-container {
          display: flex;
          align-items: flex-start;
          justify-content: space-evenly;
          gap: 2rem;
          margin-top: 4rem;
          border-top: 1px solid rgba(211, 211, 211, 0.884);
          padding-top: 2rem;

          .ship-info {
            width: 100%;
            svg {
              font-size: 1.5rem;
            }
            h3 {
              font-size: 1rem;
            }
            p {
              font-size: 0.8rem;
              margin: 0;
            }
          }
        }
      }

      .featured-products-container {
        width: 100%;
        margin-top: 5rem;
        padding-bottom: 1rem;
        overflow-x: hidden;

        h2 {
          font-size: 1.5rem;
          font-weight: 300;
        }

        .featured-products {
          width: 100%;
          margin-top: 2rem;
          .featured-products-inner-container {
            .splide__arrow--prev.featured-class-prev,
            .splide__arrow--next.featured-class-next {
              background: var(--primary-clr);

              svg {
                fill: white;
              }
            }

            .splide__pagination.featured-class-pagination {
              bottom: -1rem;
            }

            .splide__pagination__page.featured-class-page {
              background: var(--primary-clr);
            }
          }
        }
      }
    }
  }

  @media (width < 75em) {
    .productDetails__container {
      .productDetails-content {
        .product__item {
          flex-direction: column;

          .product__item-image-container {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  @media (width < 31.25em) {
    .productDetails__container {
      .productDetails-content {
        .shipping-details-container {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
      }
    }
  }
`;
