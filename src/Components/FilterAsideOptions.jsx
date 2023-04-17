import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const FilterAsideOptions = ({
  setMinRange,
  setMaxRange,
  handleRangeSubmit,
  handleRangeReset,
  handleSortByHighPrice,
  handleSortByLowPrice,
  handleSearch,
  minRef,
  maxRef,
}) => {
  // RENDER
  return (
    <FilterAsideWrapper>
      <FormWrapper>
        <div className="form-search">
          <input
            className="form__search-bar"
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
      </FormWrapper>
      <div className="filters-options">
        <h2 className="filters-title">Filters</h2>
        <div className="filters-options-price">
          <h3>Price:</h3>
          <form className="filters-options-price-range-container">
            <div className="inputsWrapper">
              <div>
                <label htmlFor="minrange">Min</label>
                <input
                  type="number"
                  min="1"
                  max="2000"
                  step="1"
                  name="minrange"
                  ref={minRef}
                  onChange={(e) => setMinRange(Number(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="maxrange">Max</label>
                <input
                  type="number"
                  min="1"
                  max="2000"
                  step="1"
                  name="maxrange"
                  ref={maxRef}
                  onChange={(e) => setMaxRange(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="price-btns-wrapper">
              <button type="submit" onClick={handleRangeSubmit}>
                Apply
              </button>
              <button onClick={handleRangeReset}>Reset</button>
            </div>
          </form>
        </div>
        <div className="filters-options-sort">
          <h3>Sort By:</h3>
          <div className="filters-options-btns">
            <button onClick={handleSortByHighPrice}>High Price</button>
            <button onClick={handleSortByLowPrice}>Low Price</button>
          </div>
        </div>
      </div>
    </FilterAsideWrapper>
  );
};

export default FilterAsideOptions;

// STYLES

const FilterAsideWrapper = styled.aside`
  width: 30%;
  height: auto;
  padding: 0 1rem;
  border-radius: 5px;

  .filters-options {
    .filters-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 2rem;
      border-bottom: 1px solid var(--primary-clr);
    }

    .filters-options-price {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;

      h3 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
      }

      .filters-options-price-range-container {
        width: 100%;
        .inputsWrapper {
          display: flex;
          width: 100%;
          gap: 0.5rem;

          label,
          input {
            display: inline-block;
            width: 100%;
            margin: 0;
          }

          label {
            font-size: 0.8rem;
            margin-bottom: 0.2rem;
          }

          input {
            width: 100%;
            border: none;
            border: 1px solid var(--primary-clr);
            border-radius: 5px;
            padding: 0.5rem;

            &:focus {
              outline: none;
              border: 1px solid var(--secondary-clr);
            }
          }
        }
      }

      .price-btns-wrapper {
        display: flex;
        gap: 0.5rem;

        button {
          margin-top: 0.5rem;
          text-transform: uppercase;
          border-radius: 0;
          outline: none;
          border: none;
          padding: 0.5rem 2rem;
          background: var(--primary-clr);
          cursor: pointer;
          width: 100%;
          transition: all 0.2s ease-in-out;

          &:hover {
            background: var(--secondary-clr);
            color: var(--header-clr);
          }
        }
      }
    }

    .filters-options-sort {
      margin-top: 1rem;

      h3 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
      }

      .filters-options-btns {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: flex-start;
        justify-content: flex-start;

        button {
          outline: none;
          font-size: 0.8rem;
          border: 1px solid var(--header-black-clr);
          background: transparent;
          padding: 0.5rem 2rem;
          cursor: pointer;

          &:hover,
          &:active {
            background: var(--primary-clr);
          }
        }
      }
    }
  }

  @media screen and (min-width: 31.25em) and (max-width: 75em) {
    width: 100%;
    padding: 0;

    .filters-options-price-range-container {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      gap: 1rem;

      .price-btns-wrapper {
        width: 100%;
      }
    }
  }

  @media (width < 75em) {
    width: 100%;

    .filters-options-price-range-container {
      .inputsWrapper {
        justify-content: center;
      }
    }
  }
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  .form-search {
    width: 100%;

    .form__search-bar {
      width: 100%;
      border: none;
      border: 1px solid var(--primary-clr);
      border-radius: 5px;
      padding: 0.5rem;

      &:focus {
        outline: none;
        border: 1px solid var(--secondary-clr);
      }
    }
  }
`;
