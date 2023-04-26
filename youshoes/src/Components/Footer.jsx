import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer__container">
        <p>
          Disclaimer : This site has no commercial purpose and is not affiliated
          with any brand.
          <span>
            Please note: This site uses an editable public API. Therefore, it is
            possible that some products do not appear on the page. Normally,
            there are 39 shoes and 42 clothes.{" "}
          </span>
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100vw;
  max-width: 100%;
  background: var(--header-black-clr);
  padding: 20rem 1rem;

  .footer__container {
    p {
      color: var(--header-clr);
      font-size: 1rem;
      text-align: center;
    }
  }
`;
