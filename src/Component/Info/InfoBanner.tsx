import React from "react";
import styled from "styled-components";

function InfoBanner({ isLazy }: { isLazy: boolean }) {
  return (
    <InfoHeaderS>
      <h3 className={isLazy ? "active" : ""}>
        <span>WILLA</span> is a creative company driven <br />
        by purpose and built on <span>COLLABORATION</span>.
        <br />
        We partner with intentional brands to
        <br />
        build <span>SCALABLE</span> solutions through strategy,
        <br />
        art direction, technology and design.
        <br />
      </h3>
    </InfoHeaderS>
  );
}

export default InfoBanner;

const InfoHeaderS = styled.div`
  padding: 63px 39px 0;
  float: left;
  width: 100%;
  h3 {
    letter-spacing: -2.96px;
    color: #fff;
    float: left;
    width: 100%;
    padding: 0 0 86px;
    margin: 0;
    position: relative;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      background: #fff;
      content: "";
      width: 0px;
      transition: width 0.9s ease-in;
    }
    &.active {
      &::after {
        width: 100%;
      }
    }
    span:hover {
      text-transform: lowercase;
    }

    @media screen and (max-width: 767px) {
      font-size: 32px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 42px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 74px;
  }
`;
