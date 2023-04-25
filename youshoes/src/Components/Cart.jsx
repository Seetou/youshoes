import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CartContext } from "../ContextProviders/CartContextProvider";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { shoesImages, clothesImages } from "../Utils/data";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {
  const {
    openCartTab,
    itemsList,
    removeItem,
    handleIncrementProduct,
    handleDecrementProduct,
    productQuantity,
    cartTotal,
  } = useContext(CartContext);

  return (
    <>
      {openCartTab && (
        <CartWrapper>
          <div className="cart__container">
            {itemsList.length === 0 ? (
              <h3>You have no items in your cart.</h3>
            ) : (
              <>
                <h2 className="cart-title">Your Cart</h2>
                <div className="cart__list__wrapper">
                  {itemsList.map((item) => {
                    return (
                      <article key={`${item.id} ${uuidv4()}`}>
                        <div className="item-image-container">
                          <img
                            src={
                              item.category.name === "Shoes"
                                ? shoesImages[
                                    Math.floor(
                                      Math.random() * shoesImages.length
                                    )
                                  ]
                                : clothesImages[
                                    Math.floor(
                                      Math.random() * clothesImages.length
                                    )
                                  ]
                            }
                            alt={item.title}
                          />
                        </div>
                        <div className="item-details-container">
                          <h2 className="item-title">{item.title}</h2>

                          <h4 className="item-price">
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(item.price / 10)}
                          </h4>
                          <div className="item-quantity-container">
                            {/* <h4 className="item-quantity">Quantity:</h4> */}
                            <div className="item-quantity-controlers">
                              <button
                                onClick={() => handleDecrementProduct(item)}
                              >
                                <FaMinusCircle />
                              </button>
                              <h3 className="input">
                                {productQuantity[item.id]}
                              </h3>
                              <button
                                onClick={() => handleIncrementProduct(item)}
                              >
                                <FaPlusCircle />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="item-remover-container">
                          <button onClick={() => removeItem(item)}>
                            <MdDelete />
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
                <div className="cart-total-container">
                  <h2 className="cart-total-title">Total:</h2>
                  <span>{cartTotal}</span>
                </div>
                <Link className="place-order-btn">Place Order</Link>
              </>
            )}
          </div>
        </CartWrapper>
      )}
    </>
  );
};

export default Cart;

const CartWrapper = styled.div`
  min-width: 300px;
  width: 400px;
  /* min-height: 300px; */
  padding: 1rem;
  position: absolute;
  z-index: 999;
  right: 10%;
  top: 100px;
  background: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  .cart__container {
    h3,
    h2 {
      font-size: 1rem;
      font-weight: 400;
    }

    h3 {
      text-align: center;
    }

    .cart__list__wrapper {
      margin-top: 1rem;
      overflow-y: scroll;
      max-height: 400px;
      article {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 1rem 0;
        background: var(--header-clr);
        padding: 1rem 0;
        border-radius: 5px;

        .item-image-container {
          width: 100px;
          height: 80px;
          border-radius: 5px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
          }
        }

        .item-details-container {
          .item-title {
            font-size: 1rem;
            font-weight: 600;
          }

          .item-price {
            font-size: 1rem;
            font-weight: 400;
          }

          .item-quantity-container {
            .item-quantity-controlers {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin-top: 5px;

              button {
                border: none;
                background: none;
                cursor: pointer;

                svg {
                  color: var(--secondary-clr);
                  font-size: 1rem;
                }
              }

              .input {
                width: 30px;
                margin: 0 0.5rem;
                font-size: 1rem;
                font-weight: 400;
                text-align: center;
                color: #0000009d;
              }
            }
          }
        }

        .item-remover-container {
          display: flex;
          align-items: center;
          button {
            margin: auto 0;
            border: none;
            background: none;
            cursor: pointer;

            svg {
              font-size: 1.5rem;
              color: #ef233c;
              transition: all 0.2s ease-in-out;

              &:hover {
                filter: brightness(50%);
              }
            }
          }
        }
      }
    }
    .cart-total-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;

      .cart-total-title {
        font-size: 1rem;
        font-weight: 400;
      }

      span {
        font-size: 1.3rem;
        font-weight: 600;
      }
    }

    .place-order-btn {
      font-size: 1rem;
      text-transform: uppercase;
      color: white;
      background: var(--header-black-clr);
      padding: 0.5rem 2rem;
      border-radius: 5px;
      margin-top: 1rem;
      display: inline-block;
      width: 100%;
      text-align: center;
    }
  }

  @media (width <= 31.25em) {
    right: 0%;
    width: 100%;
  }
`;
