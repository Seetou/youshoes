import React from "react";
import styled from "styled-components";
import spinner from "../Images/spinner.svg";

const LoadingSpinner = () => {
  return (
    <SpinnerWrapper>
      <img src={spinner} alt="" />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;

const SpinnerWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  img {
    width: 10%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
