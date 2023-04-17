import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { shoesImages, clothesImages } from "../Utils/data";

const ProductCard = forwardRef((props, ref) => {
  const { id, price, images, title, category } = props.item;
  return (
    <Card ref={ref}>
      <Link to={`/product/${id}`}>
        <div className="card-header">
          <img
            src={
              category.name === "Shoes"
                ? shoesImages[Math.floor(Math.random() * shoesImages.length)]
                : clothesImages[
                    Math.floor(Math.random() * clothesImages.length)
                  ]
            }
            alt={title}
          />
        </div>
      </Link>

      <div className="card-info">
        <h3>{title}</h3>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price / 10)}
        </p>
      </div>
    </Card>
  );
});

export default ProductCard;

const Card = styled.article`
  .card-header {
    /* width: 300px;
    height: 225px;
    max-height: 225px;
    border-radius: 5px; */
    width: 100%;
    height: 100%;

    &:hover {
      img {
        filter: brightness(80%);
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }
  }

  .card-info {
    padding: 0.5rem;
    h3 {
      font-size: 0.8rem;
      font-weight: 600;
    }

    p {
      font-size: 0.8rem;
      font-weight: 400;
      margin-top: 0.2rem;
    }
  }
`;
