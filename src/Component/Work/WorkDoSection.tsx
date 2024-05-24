/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { workDoSectionData } from "../../constants/workConstant";
const WorkDoSection = () => {
  const [isLazy, setIsLazy] = useState(0);

  useEffect(() => {
    const timeouts = [1000, 1500, 2000];
    timeouts.forEach((time) => {
      setTimeout(() => {
        setIsLazy(time);
      }, time);
    });
  }, []);

  return (
    <WorkDoSectionS>
      <h5>what we do</h5>
      <WorkDoSectionListS>
        {workDoSectionData.map((item) => (
          <li key={item.text}>
            <a className={isLazy >= item.time ? "active" : ""}>{item.text}</a>
          </li>
        ))}
      </WorkDoSectionListS>
    </WorkDoSectionS>
  );
};

export default WorkDoSection;

const WorkDoSectionS = styled.div`
  margin: 15px 0 90px 0;
  width: 100%;
  h5 {
    padding: 0 19px 14px;
    font-size: 14px;
    display: block;
  }
`;

const WorkDoSectionListS = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  li {
    padding: 0 19px;
    text-transform: uppercase;
    @media screen and (max-width: 767px) {
      width: 100%;
      font-size: 18px;
    }
    @media screen and (min-width: 768px) and (max-width: 1198px) {
      width: 50%;
      font-size: 28px;
    }
    @media screen and (min-width: 1199px) {
      width: 50%;
      font-size: 32px;
    }
  }
  a {
    position: relative;
    padding: 14px 0;
    display: flex;
    width: 100%;
    transform: translate(0, 30px);
    opacity: 0;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: currentColor;
      height: 1px;
      width: 0px;
      opacity: 0.5;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background: currentColor;
      height: 1px;
      width: 0px;
      opacity: 0.5;
    }
    &.active {
      transform: translate(0);
      opacity: 1;
      transition: all 0.9s ease-in;
      &::after {
        width: 100%;
        transition: width 0.9s ease-in;
      }
    }
  }
`;
